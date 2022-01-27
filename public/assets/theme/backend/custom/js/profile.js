$(function () {

     jQuery.validator.addMethod("CheckOldPassword", function (value, element){
             
            if($("#newPassword").val() && $("#curPassword").val()){
                return true;
            }else if(!$("#newPassword").val() && !$("#curPassword").val())
            {
                return true;
            }
            
            if($("#newPassword").val()){
                if(!$("#curPassword").val()){
                    return false;
                }else{
                    return true;
                }
            }else{
                return true;
            }
        },"This field is required.");
        
         jQuery.validator.addMethod("CheckNewPassword", function (value, element){
             
            if($("#newPassword").val() && $("#curPassword").val()){
                return true;
            }else if(!$("#newPassword").val() && !$("#curPassword").val())
            {
                return true;
            }
            
           if($("#curPassword").val()){
                if(!$("#newPassword").val()){
                    return false;
                }else{
                    return true;
                }
            }else{
                return true;
            }
        },"This field is required.");

    // It has the name attribute "registration"
    $("#profileForm").validate({
        
        //Specify validation rules
        rules: {
            name: {
                required: true,
            },
            email:{
                required: true,
                email:true
            },
            newPassword:{
                CheckNewPassword: true,
            },
            curPassword:{
                CheckOldPassword: true,
            }
        },
        //Specify validation error messages
        messages: {
            name: {
               required:"Please enter category name",
               maxlength:"Max 50 character allowed"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
            $("#save_profile_btn").prop("disabled", true);
            var data = $("#profileForm").serialize();
            $.ajax({
                url: APP_URL + "/admin/update_profile",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#save_profile_btn").prop("disabled", false);
                    if (response.status == true) {
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            $("#newPassword").val('');
                            $("#curPassword").val('');
                            if(response.reload){
                               window.location.reload();
                            }else{
                               ResetCategories();
                            }
                        }, 2000);
                    } else {
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_profile_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});