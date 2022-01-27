Dropzone.autoDiscover = false;
var dropzones = [];

$(document).ready(function () {
    $('.dropzone').each(function (i, el) {
        var name = 'g_' + $(el).data('field')
        var myDropzone = new Dropzone(el,{
            url: window.location.pathname,
            autoProcessQueue: false,
            uploadMultiple: false,
            parallelUploads: 1,
            maxFiles: 1,
            acceptedFiles: '.mp3, .mp4, .pdf',
            paramName: name,
            addRemoveLinks: true,
            removedfile: function(file) {
                file.previewElement.remove();
           }
        });
        dropzones.push(myDropzone);
    });
});

$('body').on('click', '.pagination a', function (e){
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(this).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getCategories(url, data);
    window.history.pushState("", "", url);
});

$("#applyfilterbtn").on("click", function (e) {
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getCategories(url, data);
    window.history.pushState("", "", url);
});

$("#SerachFilterBtn").on("click", function (e) {

    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getCategories(url, data);
    window.history.pushState("", "", url);

});

function ResetCategories() {
    $("#filterCategoryBtn").prop("disabled", true);
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    $("#search_field_filter").val('');
    $("#category_status").val('').change();
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getCategories(url, data);
    window.history.pushState("", "", url);
}
function applyfillter() {

    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getCategories(url, data);
    window.history.pushState("", "", url);
}

function getCategories(url, data) {
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        dataType: 'json',
        success: function (data) {
            block_gui_end();
            $('#level_listing').html(data.content);
            $("html, body").animate({scrollTop: 0}, 500);
        }, error: function (data) {
            block_gui_end();
            console.log("Categories could not be loaded.");
        }
    })
}

function get_parameter_val(name, url) {

    url = filter_uri(url);
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
function updateQueryStringParameter(uri, key, value) {

    uri = filter_uri(uri);
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}

function make_final_parameters_object(sourceURL) {

    var queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    var obj = {};
    var pairs = queryString.split('&');
    for (i in pairs) {
        var split = pairs[i].split('=');
        if (obj[decodeURIComponent(split[0])]) {
            obj[decodeURIComponent(split[0])] = obj[decodeURIComponent(split[0])] + "," + decodeURIComponent(split[1]);
        } else {
            obj[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
        }
    }
    return obj;
}

function filter_uri(uri_enc) {
    if (typeof uri_enc !== "undefined")
        uri_enc = uri_enc.replace(/\+/g, '%20');
    return decodeURIComponent(uri_enc);
}

function makeDataObject(data) {

    if ($("#search_field_filter").val())
        data['search'] = $("#search_field_filter").val();
    else
        data['search'] = "";

    if ($("#category_status").val())
        data['status'] = $("#category_status").val();
    else
        data['status'] = "";

    return data;
}

function toggleFilterBtn() {

    var f1 = $("#search_field_filter").val();
    var f2 = $("#category_status").val();
    if (f1 || f2) {
        $('#filterCategoryBtn').prop('disabled', false);
    } else {
        $("#filterCategoryBtn").prop("disabled", true);
    }
}

$(document).on("click", "#addCat", function () {
     dropzones.forEach(function (dropzone) {
         dropzone.removeAllFiles(true);
    });
    $("#mobile_images").html('');
    $("#desktop_images").html('');
    $(".tmax_select").select2({ width: '100%' });
    $("#addCatForm")[0].reset();
    $("#cid").val('');
    $("#addCatModal").modal("show");
});


$(document).on('click', '#save_cat_btn', function(){
    var answerType = $('.answer-type-d').find(":selected").val();
    var quesType = $('.question-type-d').find(":selected").val();


    //For question update cause
   if(quesType == ''  || typeof quesType  == "undefined"){
               quesType = $(".question_type_").val();
           }
   if(answerType == ''  || typeof answerType  == "undefined"){
       answerType = $(".answer_type_").val();
   }
    //......
    var validationRules = {
        level_title: "required"
    }
    
    var validationMessage = {
        level_title: "Please specify title",
    }
    
    if(answerType == 'multiple_choise'){
        var validationRules = {
            "questions[]": "required",
            "option1[]": "required",
            "option2[]": "required",
            "option3[]": "required",
            "option4[]": "required",
            "answer_list[]": "required"
        }
        
        var validationMessage = {
            "questions[]": "Please add question",
            "option1[]": "Please add option 1",
            "option2[]": "Please add option 2",
            "option3[]": "Please add option 3",
            "option4[]": "Please add option 4",
            "answer_list[]": "Please select answer"
        }
    }else if(answerType == 'ques_ans'){
        var validationRules = {
            "other_question_list[]": "required"
        }
        
        var validationMessage = {
            "other_question_list[]": "Please select answer"
        }
    }else if(answerType == 'blank'){
        var validationRules = {
            "other_blank_question_list[]": "required",
            "blank_answers_list[]": "required"
        }
        
        var validationMessage = {
            "other_blank_question_list[]": "Please add question",
            "blank_answers_list[]": "Please add answer"
        }
    }
    
    if(quesType == 'add_text'){
        validationRules.listening_question_text = "required";
        validationMessage.listening_question_text = "Please add question details";
    }
    
    // It has the name attribute "registration"
    $("#addCatForm").validate({
        // Specify validation rules
        rules: validationRules,
        messages: validationMessage,
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            //$("#save_cat_btn").prop("disabled", true);
            var data = $("#addCatForm").serialize();
            var form_data = new FormData();
            if($('.question-list-d').length)
            {
             $.each($('.question-list-d'), function(k)

            {
                if($(this).val() != ''){
                    form_data.append("question_list[]",  $(this).val());
                }
  
             });
 
            }

            if($('.option1-list-d').length)
            {
             $.each($('.option1-list-d'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("option1_list[]",  $(this).val());
                }
  
             });
 
            }

            if($('.option2-list-d').length)
            {
             $.each($('.option2-list-d'), function(k)

            {
                if($(this).val() != ''){
                    form_data.append("option2_list[]",  $(this).val());
                }
  
             });
 
            }

            if($('.option3-list-d').length)
            {
             $.each($('.option3-list-d'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("option3_list[]",  $(this).val());
                }
  
             });
            }

            if($('.option4-list-d').length)
            {
             $.each($('.option4-list-d'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("option4_list[]",  $(this).val());
                }
  
             });
            }

             if($('.answer-list-d').length)
            {
             $.each($('.answer-list-d'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("answer_list[]",  $(this).val());
                }
  
             });
            }

            if($('.other-question-list-d').length)
            {
             $.each($('.other-question-list-d'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("question_list[]",  $(this).val());
                }
  
             });
            }

            
            if($('.other_blank_question_list').length)
            {
             $.each($('.other_blank_question_list'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("question_list[]",  $(this).val());
                }
  
             });
            }

            if($('.blank_answers_list').length)
            {
             $.each($('.blank_answers_list'), function(k)
            {
                if($(this).val() != ''){
                    form_data.append("answer_list[]",  $(this).val());
                }
  
             });
            }

            if($('.listening_question_text').val() != '')
            {
              form_data.append("listening_question_text",  $('.listening_question_text').val());
            }

             if($('.question_instructions').val() != '')
            {
              form_data.append("question_instructions",  $('.question_instructions').val());
            }

            

           var level    = $('#level_no').find(":selected").val();
           var course_id    = $('.course_id-d').find(":selected").val();
           var activity = $('#activity_id').find(":selected").attr("data-name");
           var topic_id = $('.topic_id-d').find(":selected").val();
           var activity = $('#activity_id').find(":selected").attr("data-name");
           var question_type = $('.question-type-d').find(":selected").val();
           var answer_type = $('.answer-type-d').find(":selected").val();
           // For upate cause
           if(activity == '' || typeof activity  == "undefined"){
               activity = $(".activity_type_").val();
           }
             if(level == '' || typeof level  == "undefined"){
               level = $(".level_").val();
           }
           if(course_id == ''  || typeof course_id  == "undefined"){
               course_id = $(".course_id_").val();
           }
           if(topic_id == ''  || typeof topic_id  == "undefined"){
               topic_id = $(".topic_id_").val();
           }
           if(question_type == ''  || typeof question_type  == "undefined"){
               question_type = $(".question_type_").val();
           }
           if(answer_type == ''  || typeof answer_type  == "undefined"){
               answer_type = $(".answer_type_").val();
           }
           
           //......
         
           form_data.append('course_id', course_id);
           form_data.append('level', level);
           form_data.append('activity', activity);
           form_data.append('topic_id', topic_id);
           form_data.append('question_type', question_type);
           form_data.append('answer_type',  answer_type);

           form_data.append('listening_title', $('.listening-title-d').val());
           form_data.append('total_marks', $('.total-marks-d').val());
           
           form_data.append('id', $('#cid').val());
           form_data.append('_token', csrfTokenVal);

           if(quesType == 'file_upload'){
                var isFile = true;
                dropzones.forEach(function (dropzone) {
                    var element = dropzone.element;
                    var cindex = $(element).get(0).id;
                    var paramName = dropzone.options;
                    var fiels = dropzone.getAcceptedFiles();
                    if(fiels.length == 0){
                        isFile = false;
                    }
                    fiels.forEach(function (file, i){
                        if(cindex && cindex == "desktop_media"){
                           form_data.append('uploaded_file', file);
                        }else if(cindex && cindex == "mobile_media"){
                           form_data.append('banner_image_mobile', file);
                        }
                    });
                });
                if(!isFile){
                    alert("Please select a file to upload");
                    return false;
                }
           }
           
            $.ajax({
                url: APP_URL + "/admin/save-level-planning",
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
                    $("#save_cat_btn").prop("disabled", false);
                    if(response.status == true) {
                        dropzones.forEach(function (dropzone) {
                             dropzone.removeAllFiles(true);
                        });
                        
                        $("#addCatForm")[0].reset();
                        $("#addCatModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                       // window.location.href  = APP_URL+'/admin/dashboard';
                      window.location.href  = APP_URL+ '/admin/listing/'+response.course_id+'/'+response.activity_id+'/'+response.level+'/'+response.topic_id;
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            if(response.reload){
                               window.location.reload();
                            }else{
                               ResetCategories();
                            }
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_cat_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});



//............ Levels question Update function
$(function () {
    // It has the name attribute "registration"
    $("#updateLevelForm").validate({
        // Specify validation rules
        rules: {
            title:{
                required: true
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            tinyMCE.triggerSave();
            $("#save_cat_btn").prop("disabled", true);

            var data = $("#updateQuestionForm").serialize();
            var form_data = new FormData($('#updateLevelForm')[0]);
          
           form_data.append('listening_question_text', $('#listening_question_text_up').val());
           form_data.append('id', $('#cid').val());
           form_data.append('_token', csrfTokenVal);

            dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
                fiels.forEach(function (file, i){
                    if(cindex && cindex == "desktop_media"){
                       form_data.append('uploaded_file', file);
                    }else if(cindex && cindex == "mobile_media"){
                       form_data.append('banner_image_mobile', file);
                   }
                });
            });
           
            $.ajax({
                url: APP_URL + "/admin/update-level-questions",
                data: form_data,
                type: "post",
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    //block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    block_gui_end();
                    $("#save_cat_btn").prop("disabled", false);
                    if(response.status == true) {
                        dropzones.forEach(function (dropzone) {
                             dropzone.removeAllFiles(true);
                        });
                        window.location.reload();
                        $("#updateQuestionForm")[0].reset();
                        $("#addCatModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        window.location.reload();
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            if(response.reload){
                               window.location.reload();
                            }else{
                               ResetCategories();
                            }
                        }, 2000);
                    } else {
                        $('#success_message_modal').modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $('#success_message_modal').modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_cat_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});


function TrashCat(event){
    
    var id = $(event).attr('data-id');
    if(id){
        var res = confirm("Are you sure you want to delete ?");
        if(res){
            $.ajax({
                url:APP_URL + "/admin/trash-level-planning",
                data:{'id':id,'_token':csrfTokenVal},
                dataType:'json',
                type:'post',
                beforeSend: function () {
                    block_gui_start();
                },
                success:function(response){
                    block_gui_end();
                  if(response.status == true){
                     $("#success_msg").html(response.message);
                     $('#success_message_modal').modal("show");
                     window.location.reload();
                     setTimeout(function () {
                        $("#success_msg").html("");
                        $('#success_message_modal').modal("hide");
                        ResetCategories();
                      }, 2000);
                   }else{
                      $("#error_msg").html(response.message);
                      $('#error_message_modal').modal("show");
                       setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                       }, 2000);
                   }
                },error:function(response){
                    block_gui_end();
                    console.log("server side error");
                }
             })
        }
    }
}

 
//function ManageOptions(event){
$(".activity-d").on('change', function(){
    getTopics();
});

function getTopics(topicId = ''){
    var level_no = $(".level_no-d").find(":selected").val();
    var course_id = $(".course_id-d").find(":selected").val();
    
      if(course_id != '' && level_no!=''){
        // $("#selected_option_id").val(id);
         $.ajax({
            url:APP_URL + "/admin/get_option_values",
            data:{'level_no':level_no, 'course_id':course_id,'_token':csrfTokenVal},
            dataType:'json',
            type:'post',
            success:function(response){
                var optionValues = '<option value="">Select topic</option>';
                if(response.status == true ){
                   if(response.optionVlue){
                     $.each(response.optionVlue , function(index , value){
                      
                      if(value.name)
                          optionValues = optionValues + '<option value="'+value.id+'">'+value.name+'</option>';
                      });  
                     
                   }
                }
                $("#option_value_drp").empty().append(optionValues);
                if(topicId != ''){
                    $("#option_value_drp").val(topicId);
                }
            },error:function(error){
                console.log("server side error");
            }
             
        });
    }
}

function RemoveMedia(id){
    
     if (confirm('Are you sure you want to delete media?')) {
          
         $("#p_"+id).remove();
         
          $.ajax({
                       url:APP_URL + "/admin/remove_category",
                       data:{'id':id,'_token':csrfTokenVal},
                       dataType:'json',
                       type:'post',
                       success:function(res){
                           
                       },error:function(res){
                           
                       }
                   });
             } else {
               return false;
             }
}

$("#add_section").on("click", function(){
    var section_type = $('#section_type').find(":selected").text();
    if(section_type == 'Multiple chose'){
         $(".multi-question-d").show();

        }else if(section_type == 'Q/A'){

            $(".ques-answerp-d").show();

        }else if(section_type == 'Fill in the blanks'){

            $(".fill-blanks-d").show();
        
    }else{
           
          console.log("Working in progress");  
    }

});

$("#filterLevelBtn").on("click", function(){

   var course_id =    $('#course_id').find(":selected").val();
   var level =    $('#level_no').find(":selected").val();
   var activity = $('#activity_id').find(":selected").attr('data-name');
   var topic = $('.topic_id-d').find(":selected").val();
   var quesType = $('.question-type-d').find(":selected").val();
   var answerType = $('.answer-type-d').find(":selected").val();

    if(course_id == ''){
       alert("please select course");
       return false;
    }else if(level == ''){
       alert("please select level");
       return false;
    }else if(activity == ''){
       alert("please select activity");
       return false;
    }else if(topic == ''){
       alert("please select topic");
       return false;
    }else if(quesType == ''){
       alert("please select question type");
       return false;
    }else if(answerType == ''){
        alert("please select answer type");
        return false;
    }
        $(".manage-heading").text(activity);
         $(".main_content-d").show();
         
       listening_question_text
        if(quesType =='add_text'){
               
            tinymce.init({
                selector :'#listening_question_text',
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
             
             $(".add_text-d").show();
             $(".ques-file-uploader-d").hide();
        }else if(quesType =='file_upload'){
             
             $(".ques-file-uploader-d").show();
             $(".add_text-d").hide();
       }

       tinymce.init({
        selector :'#_question_instructions',
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

       // Answer type start  
         if(answerType =='multiple_choise'){
             $(".multi-question-d").show();
             $(".ques-answerp-d").hide();
         }else if(answerType =='file_upload'){
             $(".question-tag-d").hide();
             $(".ques-answerp-d").hide();
             $(".multi-question-d").hide();

         }else if(answerType =='ques_ans'){
             $(".ques-answerp-d").show();
             $(".multi-question-d").hide();

         }else if(answerType =='blank'){
             $(".question-tag-d").hide();
             $(".ques-answerp-d").hide();
             $(".multi-question-d").hide();
             $(".multi-blank-d").show();

         }else if(answerType =='pronunciation'){
             $(".question-tag-d").hide();
             $(".ques-answerp-d").hide();
             $(".multi-question-d").hide();
             $(".multi-blank-d").hide();

         }
       
       }); 

$("#nextLevelBtn").on("click", function(){
 
   var _level = $('#_page_level_no').find(":selected").val();
   var course_id = $('#course_id').find(":selected").val();
   var _activity = $('#_page_activity_id').find(":selected").attr('data-name');
   var _topic = $('#option_value_drp').find(":selected").val();
   
   if(course_id == ''){
       alert("Please select course.");
   }else if(_level == ''){
       alert("Please select level.");
   }else if(_activity == ''){
       alert("Please select activity.");
   }else if(_topic == ''){
       alert("Please select topic.");
   }else{
       window.location.href  = APP_URL+'/admin/listing/'+course_id+'/'+_activity+'/'+_level+'/'+_topic;
   }


});
 




