
$(function () {

    // It has the name attribute "registration"
    $("#contact-form-d").validate({
        // Specify validation rules
        rules: {
            name:{
                required: true
            },
            email:{
                required: true
            },
            phone:{
                required: true
            },
            subject:{
                required: true
            },
            message:{
                required: true
            }
        },
        messages:{

            name: {
                required:'Please enter your name',
            },
            email: {
                required:'Please enter your email',
            },
            phone: {
                required:'Please enter your phone',
            },
            subject:{
                required:'Please select subject',
            },
            message:{
                required:'Please write your message',
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            var form_data = $("#contact-form-d").serialize()+'&_token='+csrfTokenVal;

            $.ajax({
                url: APP_URL + "/send-contact-message",
                data: form_data,
                type: "post",
                datatype:'json',
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    response = jQuery.parseJSON(response);
                    block_gui_end();
                    $("#save_cont_btn").prop("disabled", true);
                    if(response.status == true) {
                       
                        $("#contact-form-d")[0].reset();
                        $("#addCatModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                              window.location.reload();
                             }, 2000);
                    } else {
                         $("#save_cont_btn").prop("disabled", false);
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
                    $("#save_cont_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});



