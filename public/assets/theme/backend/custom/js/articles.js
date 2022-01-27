$('body').on('click', '.pagination a', function (e) {
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(this).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getArticles(url, data);
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
    getArticles(url, data);
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
    getArticles(url, data);
    window.history.pushState("", "", url);

});

function ResetArticles() {
    $("#filterArticleBtn").prop("disabled", true);
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);

    $("#search_field_filter").val('');
    $("#category_status").val('').change();
    $("#from_date").val('');
    $("#to_date").val('');

    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getArticles(url, data);
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
    getArticles(url, data);
    window.history.pushState("", "", url);
}

function getArticles(url, data) {
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

    if ($("#sort_order").val())
        data['sort_order'] = $("#sort_order").val();
    else
        data['sort_order'] = "";

    if ($("#sort_by").val())
        data['sort_by'] = $("#sort_by").val();
    else
        data['sort_by'] = "";

    if ($("#from_date").val())
        data['from_date'] = $("#from_date").val();
    else
        data['from_date'] = "";

    if ($("#to_date").val())
        data['to_date'] = $("#to_date").val();
    else
        data['to_date'] = "";


    return data;

}

function toggleFilterBtn() {

    var f1 = $("#search_field_filter").val();
    var f2 = $("#category_status").val();
    var f3 = $("#from_date").val();
    var f4 = $("#to_date").val();
    var f5 = $("#sort_by").val();
    var f6 = $("#sort_order").val();




    if (f1 || f2 || f3 || f4 || f5 || f6) {
        $('#filterArticleBtn').prop('disabled', false);
    } else {
        $("#filterArticleBtn").prop("disabled", true);
    }
}

$(document).on("click", "#addArticle", function () {
    $("#addArticleForm")[0].reset();
    $("#addArticleModal").modal("show");
});


$(function () {

    // It has the name attribute "registration"
    $("#addArticleForm").validate({
        // Specify validation rules
        rules: {
            title: {
                required: true,
            },
           description:{
                         required: function() 
                        {
                         CKEDITOR.instances.editor.updateElement();
                        },

                         minlength:10
                    },
            category_id: {
                required: true,
            }
        },
        //Specify validation error messages
        messages: {
            name: {
                required: "Please enter category name",
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {

        }
    });
});


function TrashCat(event) {

    var id = $(event).attr('data-id');
    if (id) {
        var res = confirm("Are you sure you want to delete ?");
        if (res) {
            $.ajax({
                url: APP_URL + "/admin/trash_articles",
                data: {'id': id, '_token': csrfTokenVal},
                dataType: 'json',
                type: 'post',
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            ResetArticles();
                        }, 5000);
                    } else {
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                        }, 5000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    console.log("server side error");
                }
            })
        }
    }
}


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
    
    document.querySelector("button[type=submit]").addEventListener("click", function (e){
        
        // Make sure that the form isn't actually being sent.
        var submittedForm = $(this).attr("id");
        e.preventDefault();
        e.stopPropagation();
        if (submittedForm == "save_art_btn") {

            var form = new FormData($('#addArticleForm')[0]);
            var article_media = 0;


            dropzones.forEach(function (dropzone) {

                var element = dropzone.element;
                var cindex = $(element).get(0).id;
                var paramName = dropzone.options;
                var fiels = dropzone.getAcceptedFiles();
                fiels.forEach(function (file, i) {
                    if (cindex && cindex == "article_media") {
                        article_media = article_media ;
                        form.append('image', file);
                    }
                })
                form.append('article_media', article_media);
                form.append('title', $('#title').val());
                form.append('description', CKEDITOR.instances['editor'].getData());
                form.append('category_id', $('#category_id').val());
                form.append('order', $('#order').val());
                form.append('status', $('#status').val());
                form.append('id', $('#cid').val());
                form.append('_token',csrfTokenVal);
            })

            if ($('#addArticleForm').valid()) {
                $("#save_art_btn").prop('disabled', true);
                $.ajax({
                    method: 'POST',
                    url: APP_URL + '/admin/save_article',
                    data: form,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    success: function (response) {
                        if (response.status == true) {

                            dropzones.forEach(function (dropzone) {
                                dropzone.removeAllFiles(true);
                            });
                            
                            $("#addArticleForm")[0].reset();
                            CKEDITOR.instances.editor.setData('');
                            $("#addArticleModal").modal("hide");
                            $("#success_msg").html(response.message);
                            $('#success_message_modal').modal("show");
                            setTimeout(function () {
                                $("#success_msg").html("");
                                $('#success_message_modal').modal("hide");
                                ResetArticles();
                            }, 5000);

                        } else {

                            $("#error_msg").html(response.message);
                            $('#error_message_modal').modal("show");
                            setTimeout(function () {
                                $("#error_msg").html("");
                                $('#error_message_modal').modal("hide");
                            }, 5000);
                        }
                        $("#save_art_btn").prop('disabled', false);
                    }, error: function (res) {
                        $("#save_art_btn").prop('disabled', false);
                        console.log("server side errors");
                    }
                });
            }
        }

    });

})

    
function UpdateCat(event) {

    var id = $(event).attr('data-id');
    if (id) {
        $.ajax({
            url: APP_URL + "/admin/get_articles",
            data: {'id': id, '_token': csrfTokenVal},
            dataType: 'json',
            type: 'get',
            beforeSend: function () {
                block_gui_start();
            },
            success: function (response){
                block_gui_end();
                if(response.article) {
                    $("#cid").val(response.article.id);
                    $("#title").val(response.article.title);
                    $("#category_id").val(response.article.category_id).change();
                    $("#order").val(response.article.order);
                    $("#status").val(response.article.status).change();
                    CKEDITOR.instances.editor.setData(response.article.description);
                 
                    if(response.article.image_url){
                      dropzones.forEach(function (dropzone) { 
                         var mockFile = { name: response.article.image_url, size: 12345 };
                         var imgUrl = APP_URL + '/public/upload/'+response.article.image_url;
                         dropzone.options.addedfile.call(dropzone, mockFile);
                         dropzone.options.thumbnail.call(dropzone, mockFile, imgUrl);
                     });
                   }
                   $("#addArticleModal").modal('show');
                }
            }, error: function (response) {
                block_gui_end();
                console.log("server side error");
            }
        })

    }

}    
    