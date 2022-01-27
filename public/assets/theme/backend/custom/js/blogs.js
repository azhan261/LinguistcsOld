Dropzone.autoDiscover = false;
var dropzones = [];

$(document).ready(function () {
    $('.dropzone').each(function (i, el) {
        var name = 'g_' + $(el).data('field')
        var myDropzone = new Dropzone(el,{
            url: window.location.pathname,
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 1,
            maxFiles: 1,
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
            $('#categories_listing').html(data.content);
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
    alert('abc');
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


$(function () {

    // It has the name attribute "registration"
    $("#addCatForm").validate({
        // Specify validation rules
        rules: {
            course_name:{
                required: true
            },
            description:{
                required: true
            }

        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           tinyMCE.triggerSave();
            //$("#save_cat_btn").prop("disabled", true);
          //  var data = $("#addCatForm").serialize();
            var form_data = new FormData();
            form_data.append('title', $('#title').val());
            form_data.append('description', $('#description').val());
            form_data.append('status', $('#status').val());
            dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
                fiels.forEach(function (file, i){
                    if(cindex && cindex == "desktop_media"){
                       form_data.append('banner_image_desktop', file);
                    }else if(cindex && cindex == "mobile_media"){
                       form_data.append('banner_image_mobile', file);
                   }
                });
            });
            form_data.append('id', $('#cid').val());
            form_data.append('_token', csrfTokenVal);
         
            $.ajax({
                url: APP_URL + "/admin/save-blog",
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
                        
                        $("#addCatForm")[0].reset();
                        $("#addCatModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
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



function UpdateCat(event){
      tinyMCE.triggerSave();
     var id = $(event).attr('data-id');
     $(".tmax_select").select2({ width: '100%' });
      dropzones.forEach(function (dropzone) {
         dropzone.removeAllFiles(true);
     });
    
     if(id){
         $.ajax({
                url:APP_URL + "/admin/get-blog",
                data:{'id':id,'_token':csrfTokenVal},
                dataType:'json',
                type:'get',
                beforeSend: function (){
                    block_gui_start();
                },
                success:function(response){
                    block_gui_end();
                    if(response.blog){
                      
                      $("#cid").val(response.blog.id);
                      $("#title").val(response.blog.title);
                     // $("#description").val(response.blog.description);
                      $("#status").val(response.blog.status).change();
                      tinyMCE.activeEditor.setContent(response.blog.description);
                                if(response.blog.file_name){
                                    var mediaItem = '';  
                                    var mediaItem = '<div class="thumbnail col-md-2" id="p_'+response.blog.id+'">';
                                    var imgUrl = APP_URL + '/public/upload/'+response.blog.media_image;
                                    //mediaItem = mediaItem + '<a class="close" href="javascript:void(0)" id="img_'+value.id+'" onclick="RemoveMedia('+value.id+')">×</a>';
                                    mediaItem = mediaItem +'<img src="'+imgUrl+'">';
                                    mediaItem = mediaItem +'</div>';
                                    $("#desktop_images").append(mediaItem);
                                }
                        
                                 if(response.blog.banner_mb_image_url){
                                    var mediaItem = '';  
                                    var mediaItem = '<div class="thumbnail col-md-2" id="p_'+response.blog.id+'">';
                                    var imgUrl = APP_URL + '/public/upload/'+response.blog.banner_mb_image_url;
                                    //mediaItem = mediaItem + '<a class="close" href="javascript:void(0)" id="img_'+value.id+'"  onclick="RemoveMedia('+value.id+')">×</a>';
                                    mediaItem = mediaItem +'<img src="'+imgUrl+'">';
                                    mediaItem = mediaItem +'</div>';
                                    $("#mobile_images").append(mediaItem);
                               }
                      
                         $("#addCatModal").modal('show');
                  }
                 
                },error:function(response){
                    block_gui_end();
                    console.log("server side error");
                }
             })
         
     }
    
}


function TrashCat(event){
    
    var id = $(event).attr('data-id');
    if(id){
        var res = confirm("Are you sure you want to delete ?");
        if(res){
            $.ajax({
                url:APP_URL + "/admin/trash-blog",
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

