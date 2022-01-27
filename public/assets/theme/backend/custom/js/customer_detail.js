
$(function () {
     jQuery.validator.addMethod("IsPasswordRequired", function(value, element) {
       if($("#change_password").is(":checked")){
           return ($("#new_password").val() ? true : false);
       }else{
           return true;
       }
       
    }, "Please enter new password");
    // It has the name attribute "registration"
    $("#PofileForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 100
            },
            phone: {
                required: true,
                maxlength: 20,
                number: true,
            },
            new_password :{
                IsPasswordRequired:true,
                minlength:6
            }
        },
        //Specify validation error messages
        messages: {
            name: {
               required:"Please enter customer name",
               maxlength:"Max 100 character allowed"
            },
           phone: {
               required:"Please enter phone number",
               maxlength:"Max 20 character allowed"
            },
            
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
            $("#update_customer_profile").prop("disabled", true);
            var chng = $("#change_password").is(":checked") ? 1 : 0;
             var data = $("#PofileForm").serialize()+"&change_password="+chng+'&_token='+csrfTokenVal;
            $.ajax({
                url: APP_URL + "/admin/update_customer_profile",
                 data: data,
                 dataType: "json",
                 type: "post",
                 beforeSend: function () {
                      block_gui_start();
                  },
                 success: function (response) {
                      block_gui_end();
                      $("#update_customer_profile").prop("disabled", false);
                     if (response.status == true) {
                          $("#change_password").attr("checked",false);
                          $("#new_password").val("");
                          $("#success_msg").html(response.message);
                          $('#success_message_modal').modal("show");
                          setTimeout(function () {
                              $("#success_msg").html("");
                              $('#success_message_modal').modal("hide");
                          }, 2000);
                      } else {
                         $("#error_msg").html(response.message);
                         $('#error_message_modal').modal("show");
                         setTimeout(function () {
                            $("#error_msg").html("");
                             $('#error_message_modal').modal("hide");
                         }, 2000);
                     }
                 }, error: function (response) {
                    block_gui_end();
                     $("#update_customer_profile").prop("disabled", false);
                     console.log("server side error");
                 }
            });
        }
    });
});