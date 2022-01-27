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
    getStaff(url, data);
    window.history.pushState("", "", url);
});

$("#applyfilterbtn").on("click", function (e){
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getStaff(url, data);
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
    getStaff(url, data);
    window.history.pushState("", "", url);
});

function ResetStaff(){
    
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    $("#search_customer_field_filter").val('');
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getStaff(url, data);
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
    getStaff(url, data);
    window.history.pushState("", "", url);
}

function getStaff(url, data) {
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        dataType: 'json',
        success: function (data){
            block_gui_end();
            $('#admin_staff_listing_block').html(data.content);
            $("html, body").animate({scrollTop: 0}, 500);
        }, error: function (data){
            block_gui_end();
            console.log("Staff could not be loaded.");
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
 
    if($("#search_customer_field_filter").val())
       data['search'] = $("#search_customer_field_filter").val();
    else
       data['search'] = "";
   
    return data;
    
}



     $(function(){

          $.validator.addMethod('filesize', function(value, element, param) {
                   // param = size (en bytes) 
                   // element = element to validate (<input>)
                   // value = value of the element (file name)
                   return this.optional(element) || (element.files[0].size <= param) 
                });
                
     jQuery.validator.addMethod("IsPasswordRequired", function(value, element) {
       if($("#chng_password").is(":checked")){
           return ($("#new_password").val() ? true : false);
       }else{
           return true;
       }
       
    }, "Please enter new password");    
          
         // Initialize form validation on the registration form.
         // It has the name attribute "registration"
         $("#add_staff_form").validate({
             ignore: ":hidden",
            // Specify validation rules
            rules: {
               
               name:{
                  required: true,
                  maxlength: 50,
               },
                email:{
                  required: true,
                  email: true,
               },
               password:{
                   required:true,
                   minlength:6
               },
                new_password:{
                   IsPasswordRequired:true,
                   minlength:6
               },
               phone:{
                  required: true,
                  maxlength:12,
               },
               roles:{
                  required: true,
               },
               Address:{
                  required: false,
                  maxlength: 500,
              }
           },
             //Specify validation error messages
            messages:{
              //full_name:"Please provide name",
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form){
             
                $("#save_staff").prop("disabled",true);
                    var data =  $("#add_staff_form").serialize()+ '&roles=' + $('#roles').val();
                    $.ajax({
                        url:APP_URL+"/admin/save_staff",
                        data:data,
                        dataType:"json",
                        type:"post",
                        beforeSend: function(){
                            block_gui_start();
                        },
                        success:function(response){
                            block_gui_end();    
                            $("#save_staff").prop("disabled",false);
                            if(response.status == true){
                                $("#ManageStaffModal").modal("hide");
                                $("#add_staff_form")[0].reset();
                                $("#roles").select2("val", "");
                                 $("#success_msg").html(response.message);
                                $('#success_message_modal').modal("show");
                               setTimeout(function(){
                                  $("#success_msg").html("");
                                   $('#success_message_modal').modal("hide");
                                  $("#ManageStaffModal").modal("hide");
                                  applyfillter();
                              },2000);
                           }else{
                                $("#ManageStaffModal").modal("hide");
                                $("#error_msg").html(response.message);
                                $('#error_message_modal').modal("show");
                               setTimeout( function(){
                                   $("#error_msg").html("");
                                   $('#error_message_modal').modal("hide");
                                    $("#ManageStaffModal").modal("show");
                              },2000);
                           }
                        },error:function(response){
                            block_gui_end();    
                            $("#save_staff").prop("disabled",false);
                            console.log("server side error");
                        }
                    });
               }
         });
     });

    function is_delete(event) {

        var id = $(event).attr('data-id');
        var result = confirm("Are you sure you want to delete this staff?'");
        if (!result) {
            return false;
        }
        
        if (id) {
            $.ajax({
                url: APP_URL + "/admin/delete_user", // json datasource
                type: "post", ///sections/listing method  , by default get
                data: {_token: csrfTokenVal, 'id': id},
                dataType: "json",
                success: function (response) {
                    if (response.status == true) {
                        applyfillter();
                     }
                }, error: function (response) {
                    console.log("server side error");
                }
            });
        }
    }
   
    
    function edit_staff(event){
         reset_form();
         var id =  $(event).attr("data-id");
         $("#roles").select2({});
         $.ajax({
             url:APP_URL+"/admin/get_staff",
             data:{id:id,'_token':csrfTokenVal},
             dataType:"json",
             type:"post",
             success:function(response){
                 if(response.status == true){
                   
                    $("#name").val(response.data.name);
                    $("#email").val(response.data.email);
                    $("#email").prop("disabled",true);
                    $("#phone").val(response.data.phone);
                    $("#address").val(response.data.address);
                    $("#status").val(response.data.status).change();
                    $("#save_staff").text("Update Staff");
                    $("#staff_action_type").html("Update Staff");
                    $("#staff_id").val(response.data.id);
                    $("#AddPassword").hide();
                    $("#UpdatePassword").show();
                   
                    if(response.roles){
                      $.each(response.roles, function(i,e){
                          $("#roles option[value='" + e.id + "']").prop("selected", true).change();
                      });
                    }
                    $("#ManageStaffModal").modal("show");
                 }
             },error:function(response){
                console.log("server side error");
             }
         })
    }
    
    function reset_form(){
      
        $("#ManageStaffModal").modal("show");
        $("#add_staff_form")["0"].reset();
        $("#save_staff").text("Add Staff");
        $("#permission_action_type").html("Add Staff");
        $("#staff_id").val("");
        $(".search-select-role").select2("val", "");
        //$("#roles").select2("val", "");
         $("#roles").select2({});
        $("#email").prop("disabled",false);
        var validator = $("#add_staff_form").validate();
        validator.resetForm();
   }
