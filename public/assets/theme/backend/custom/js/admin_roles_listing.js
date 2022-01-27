$('body').on('click', '.pagination a',function (e){
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(this).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRoles(url, data);
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
    getRoles(url, data);
    window.history.pushState("", "", url);
});

$("#SerachFilterBtn").on("click", function (e){
    
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRoles(url, data);
    window.history.pushState("", "", url);
});

function ResetRoles(){
    
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    $("#admin_roles_search_field_filter").val('');
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRoles(url, data);
    window.history.pushState("", "", url);
}
function applyfillter(){
    
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRoles(url, data);
    window.history.pushState("", "", url);
}

function getRoles(url, data) {
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        success: function (data){
            block_gui_end();
            $('#admin_roles_listing_block').html(data);
            $("html, body").animate({scrollTop: 0}, 500);
            
        }, error: function (data){
            block_gui_end();
            console.log("Roles could not be loaded.");
        }
    })
}

function get_parameter_val(name, url){
   
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

function filter_uri(uri_enc){
    if (typeof uri_enc !== "undefined")
        uri_enc = uri_enc.replace(/\+/g, '%20');
    return decodeURIComponent(uri_enc);
}

function makeDataObject(data){
 
    if($("#admin_roles_search_field_filter").val())
       data['search'] = $("#admin_roles_search_field_filter").val();
    else
       data['search'] = "";
   
    return data;
    
}



  $(function(){
           $.validator.addMethod('filesize', function(value, element, param) {
                   return this.optional(element) || (element.files[0].size <= param) 
                });
          
         // Initialize form validation on the registration form.
         // It has the name attribute "registration"
         $("#add_role_form").validate({
            // Specify validation rules
            rules: {
               
               name:{
                  required: true,
                  maxlength: 25,
               },
               display_name:{
                  required: true,
                  maxlength: 25,
               },
               description:{
                  required: false,
                  maxlength: 255,
               }
           },
             //Specify validation error messages
            messages:{
              //full_name:"Please provide name",
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                 
                $("#save_role").prop("disabled",true);
                    var data =  $("#add_role_form").serialize();
                    $.ajax({
                        url:APP_URL+"/admin/roles/save",
                        data:data,
                        dataType:"json",
                        type:"post",
                        beforeSend: function(){
                            block_gui_start();
                        },
                        success:function(response){
                            block_gui_end();    
                            $("#save_role").prop("disabled",false);
                            if(response.status == true){
                                $("#ManageRoleModal").modal("hide");
                                $("#add_role_form")[0].reset();
                                 $("#success_msg").html(response.message);
                                $('#success_message_modal').modal("show");
                               setTimeout(function(){
                                   $("#success_msg").html("");
                                   $('#success_message_modal').modal("hide");
                                  $("#ManageRoleModal").modal("hide");
                                  applyfillter();
                              },2000);
                           }else{
                                $("#ManageRoleModal").modal("hide");
                                $("#error_msg").html(response.message);
                                $('#error_message_modal').modal("show");
                               setTimeout( function(){
                                   $("#error_msg").html("");
                                   $('#error_message_modal').modal("hide");
                                   $("#ManageRoleModal").modal("show");
                              },2000);
                           }
                        },error:function(response){
                            block_gui_end();    
                            $("#save_role").prop("disabled",false);
                            console.log("server side error");
                        }
                    });
               }
         });
     });
    