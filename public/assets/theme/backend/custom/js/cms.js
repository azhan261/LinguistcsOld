   //////////////////  Home page Content /////////////////////////

    $("#addHomeForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             },
              banner_main_title: {
                required: true,
             },
              banner_description: {
                required: true,
             },
              abt_banner_img: {
                required: true,
             },
              banner_title2: {
                required: true,
             },
             blog_description1: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter  title",
            },
            banner_main_title: {
               required:"Please enter  title",
            },
            banner_description: {
               required:"Please enter  description",
            },
            banner_title2: {
               required:"Please enter  title",
            },
            banner_description2: {
               required:"Please enter  description",
            },
             blog_description1: {
               required:"Please enter  description",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
              var form_data = new FormData($('#addHomeForm')[0]);
              dropzones.forEach(function (dropzone) {
                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "home_banner_img") {
                        form_data.append('home_banner_img', file);
                    }
                    if (cindex && cindex == "home_banner_img2") {
                        form_data.append('home_banner_img2', file);
                    }
                    if (cindex && cindex == "home_banner_img3") {
                        form_data.append('home_banner_img3', file);
                    }
                    if (cindex && cindex == "home_banner_img4") {
                        form_data.append('home_banner_img4', file);
                    }
                    if (cindex && cindex == "home_banner_img5") {
                        form_data.append('home_banner_img5', file);
                    }
                    if (cindex && cindex == "course_home_banner_img") {
                        form_data.append('course_home_banner_img', file);
                    }
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save_home_page",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                   response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });



      //////////////////  About us page Content /////////////////////////

    $("#addAboutUsForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter  title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           tinyMCE.triggerSave();
              //var data = $("#addAboutUsForm").serialize();
             // var form_data = new FormData();
              var form_data = new FormData($('#addAboutUsForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "about_banner_img") {
                        form_data.append('about_banner_img', file);
                    }
                    if (cindex && cindex == "seo_banner_img") {
                        form_data.append('seo_banner_img', file);
                    }
                    if (cindex && cindex == "logo_image1") {
                        form_data.append('logo_image1', file);
                    }
                    if (cindex && cindex == "logo_image2") {
                        form_data.append('logo_image2', file);
                    }
                    if (cindex && cindex == "logo_image3") {
                        form_data.append('logo_image3', file);
                    }
                     if (cindex && cindex == "logo_image4") {
                        form_data.append('logo_image4', file);
                    }
                   
                })
               })

           
              form_data.append("id",  $('#id').val());
              form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save_about_us",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                   response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });

//................................................. Course form 

     $("#addCoursesForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             },
             sub_title: {
                required: true,
             },
             s2_title1: {
                required: true,
             },
             s2_description1: {
                required: true,
             },
             s2_title2: {
                required: true,
             },
             s2_description1: {
                required: true,
             },
             s2_title3: {
                required: true,
             },
             s2_description3: {
                required: true,
             },
             s2_title4: {
                required: true,
             },
             s2_description4: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter  title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
          // $("#updateblogBtn").prop("disabled", true);
            // var form_data = new FormData();
             // var data = $("#addBlogForm").serialize()+'&_token='+csrfTokenVal;
              var form_data = new FormData($('#addCoursesForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "course_banner_img") {
                        form_data.append('course_banner_img', file);
                    }
                    if (cindex && cindex == "seo_banner_img") {
                        form_data.append('seo_banner_img', file);
                    }
                    if (cindex && cindex == "s2_banner_img1") {
                        form_data.append('s2_banner_img1', file);
                    }
                    if (cindex && cindex == "s2_banner_img2") {
                        form_data.append('s2_banner_img2', file);
                    }
                    if (cindex && cindex == "s2_banner_img3") {
                        form_data.append('s2_banner_img3', file);
                    }
                     if (cindex && cindex == "s2_banner_img4") {
                        form_data.append('s2_banner_img4', file);
                    }
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save_courses",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                   response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
     //////////////////  Course Detail PAge /////////////////////////

      $("#addCoursesDetailForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             },
             sub_title: {
                required: true,
             },
             s2_title1: {
                required: true,
             },
             s2_description1: {
                required: true,
             },
             s2_title2: {
                required: true,
             },
             s2_description1: {
                required: true,
             },
             s2_title3: {
                required: true,
             },
             s2_description3: {
                required: true,
             },
             s2_title4: {
                required: true,
             },
             s2_description4: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter  title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
          // $("#updateblogBtn").prop("disabled", true);
            // var form_data = new FormData();
             // var data = $("#addBlogForm").serialize()+'&_token='+csrfTokenVal;
              var form_data = new FormData($('#addCoursesDetailForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "course_banner_img") {
                        form_data.append('course_banner_img', file);
                    }
                     if (cindex && cindex == "s2_banner_img1") {
                        form_data.append('s2_banner_img1', file);
                    }
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save_courses_detail",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                   block_gui_start();
                },
                success: function (response) {
                   response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
     //////////////////  Contact us page Content /////////////////////////

    $("#addContactUsForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter  title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
          // $("#updateblogBtn").prop("disabled", true);
            // var form_data = new FormData();
             // var data = $("#addBlogForm").serialize()+'&_token='+csrfTokenVal;
              var form_data = new FormData($('#addContactUsForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "home_banner_img") {
                        form_data.append('home_banner_img', file);
                    }
                    if (cindex && cindex == "home_banner_img2") {
                        form_data.append('home_banner_img2', file);
                    }
                    
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save_contact_us",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                   block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });

    $("#addLoginForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
          // $("#updateblogBtn").prop("disabled", true);
            // var form_data = new FormData();
             // var data = $("#addBlogForm").serialize()+'&_token='+csrfTokenVal;
              var form_data = new FormData($('#addLoginForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "home_banner_img") {
                        form_data.append('home_banner_img', file);
                    }
                    if (cindex && cindex == "home_banner_img2") {
                        form_data.append('home_banner_img2', file);
                    }
                    
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save-login-page",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                   block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
    
    $("#addRegisterForm").validate({
        rules: {
           
             banner_title: {
                required: true,
             }
            
        },
        //Specify validation error messages
        messages: {
            banner_title: {
               required:"Please enter title",
            }
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
          // $("#updateblogBtn").prop("disabled", true);
            // var form_data = new FormData();
             // var data = $("#addBlogForm").serialize()+'&_token='+csrfTokenVal;
              var form_data = new FormData($('#addRegisterForm')[0]);
              dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
              var fiels = dropzone.getAcceptedFiles();
              fiels.forEach(function (file, i) {
                    i = i+1;
                    if (cindex && cindex == "home_banner_img") {
                        form_data.append('home_banner_img', file);
                    }
                    if (cindex && cindex == "home_banner_img2") {
                        form_data.append('home_banner_img2', file);
                    }
                    
                   
                })
               })
               form_data.append('_token', csrfTokenVal);
           
            $.ajax({
                url: APP_URL + "/admin/cms/save-register-page",
                data: form_data,
                type: "post",
                 cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                   block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    block_gui_end();
                   $("#updateblogBtn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                             location.reload();
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#updateblogBtn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
    
        
        //////////////////   ///////////////////////// 
tinymce.init({
    selector :'#seo_description1',
    //toolbar: "mybutton",
    theme: "modern",
    height: 200,
    paste_data_images: false,
    plugins: [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
    ],
    toolbar1: "imageupload , mybutton ,insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
    toolbar2: " | forecolor backcolor",
    image_advtab: false,
 });  
       
 //......................end.......

Dropzone.autoDiscover = false;
var dropzones = [];

$(document).ready(function () {

    $('.dropzone').each(function (i, el) {
        var name = 'g_' + $(el).data('field')
        var myDropzone = new Dropzone(el, {
            url: window.location.pathname,
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 1,
            maxFiles: 1,
            paramName: name,
            addRemoveLinks: true,
        })
        dropzones.push(myDropzone);
    })
  
})
    

 