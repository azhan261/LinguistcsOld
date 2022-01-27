$(function () {

    // It has the name attribute "registration"
    $("#addPayemntForm").validate({
        // Specify validation rules
        rules: {
            creditCardNumber:{
                required: true,
                number:true

            },
            creditCardType:{
                required: true
            },
            expDateMonth:{
                required: true,
                number:true,
                 maxlength: 2
            },
            expDateYear:{
                required: true,
                number:true,
                 maxlength: 4
            }
            ,
            cvv2Number:{
                required: true,
                number:true
            }

        },
        messages: {

            creditCardNumber: {
               required:"Please enter card number",
            },
            creditCardType: {
               required:"Please select card type",
            },
            expDateMonth: {
               required:"Please enter month",
               maxlength:"Max 2 digit allowed"
            },
            expDateYear: {
               required:"Please enter year",
               maxlength:"Max 4 digit allowed"
            },
            cvv2Number: {
               required:"Please enter cv code",
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
             var data = $("#addPayemntForm").serialize()+'&_token='+csrfTokenVal;

         
            $.ajax({
                url: APP_URL + "/admin/payment-process",
                data: data,
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    $("#save_cat_btn").prop("disabled", true);
                    if(response.status == true) {

                        $("#addPayemntForm")[0].reset();
                        if(response.message == 'Successfully'){
                            var level = response.data.level_no;
                            var amount = response.data.amount;
                          window.location.href = APP_URL +'/admin/course-plan/'+level+'/'+amount;
                        }else {
                          window.location.href = APP_URL +'/signup-alert';
                        }
                    } else {
                         block_gui_end();
                         $("#save_cat_btn").prop("disabled", false);
                        alert(response.message)
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







