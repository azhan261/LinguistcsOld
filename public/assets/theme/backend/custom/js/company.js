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
    getRecords(url, data);
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
    getRecords(url, data);
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
    getRecords(url, data);
    window.history.pushState("", "", url);

});

function ResetOptions() {

    $("#filterBtn").prop("disabled", true);
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);

    $("#search_customer_field_filter").val('');

    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRecords(url, data);
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
    getRecords(url, data);
    window.history.pushState("", "", url);
}

function getRecords(url, data) {
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        dataType: 'json',
        success: function (data) {
            block_gui_end();
            $('#admin_staff_listing_block').html(data.content);
            $("html, body").animate({scrollTop: 0}, 500);
        }, error: function (data) {
            block_gui_end();
            console.log("staff could not be loaded.");
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

    if ($("#search_customer_field_filter").val())
        data['search'] = $("#search_customer_field_filter").val();
    else
        data['search'] = "";

    if ($("#filter_status").val())
        data['status'] = $("#filter_status").val();
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
    var f2 = $("#filter_status").val();
    if (f1 || f2) {
        $('#filterBtn').prop('disabled', false);
    } else {
        $("#filterBtn").prop("disabled", true);
    }
}

function TrashRecord(event) {

    var id = $(event).attr('data-id');
    if (id) {
        var res = confirm("Are you sure you want to delete ?");
        if (res) {
            $.ajax({
                url: APP_URL + "/admin/delete_company",
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
                            ResetOptions();
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
                    console.log("server side error");
                }
            })
        }
    }
}


function reset_form(){
    $("#add_staff_form")[0].reset();
    $("#staff_id").val('');
    $("#name").val('');
    $("#email").val('');
    $("#phone").val('');
    $("#address").val('');
    $("#status").val('').change();
    $("#AddPassword").show();
    $("#UpdatePassword").hide();
    
    $("#ManageStaffModal").modal("show");
}

function edit_staff(event){
    $('#add_staff_form').trigger("reset");
    var id = $(event).attr('data-id');
    if (id) {
        $.ajax({
            url: APP_URL + "/admin/get_company",
            data: {'id': id, '_token': csrfTokenVal},
            dataType: 'json',
            type: 'post',
            beforeSend: function () {
                block_gui_start();
            },
            success: function (response) {
                block_gui_end();
               // console.log(response);
                if (response.status == true) {
                    $("#cid").val(response.data.id);
                    $("#name").val(response.data.name);
                    $("#city").val(response.data.city);
                    $("#province").val(response.data.province);
                    $("#address").val(response.data.address);
                    $("input[name=optradio][value= '"+response.data.type+"']").prop("checked",true);
                    $("#status").val(response.data.status).change();
                    $("#ManageStaffModal").modal("show");

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
                console.log("server side error");
            }
        })
    }

}



$(function () {

    // It has the name attribute "registration"
    $("#add_staff_form").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 100
            },
             address:{
                required: true,
            },
            city:{
                required: true,
            },
            province:{
                required: true,
            }
            

            //Change Password
        },
        //Specify validation error messages
        messages: {
            name: {
                required:"Please enter  name",
                maxlength:"Max 100 character allowed"
            },
            address: {
                required:"Please enter  address",
            },
            city: {
                required:"Please enter city",
            },
            province: {
                required:"Please enter province",
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           $("#save_staff").prop("disabled", true);

            var data = $("#add_staff_form").serialize()+'&_token='+csrfTokenVal;

            $.ajax({
                url: APP_URL + "/admin/save_company",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#save_staff").prop("disabled", false);
                    if (response.status == true) {
                        $("#ManageStaffModal").modal('hide');
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            ResetOptions();
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
                    $("#save_staff").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});

 $(".course_id-d1").on('change', function(){
   var course_id = $(this).val();
      if(course_id != ''){
        // $("#selected_option_id").val(id);
         $.ajax({
            url:APP_URL + "/admin/get_company_list",
            data:{'course_id':course_id,'_token':csrfTokenVal},
            dataType:'json',
            type:'post',
            success:function(response){
                var optionValues = '<option value="">Select </option>';
                if(response.status == true ){
                   if(response.optionVlue){
                     $.each(response.optionVlue , function(index , value){
                      
                      if(value.name)
                          optionValues = optionValues + '<option value="'+value.id+'">'+value.name+'</option>';
                      });  
                     
                   }
                }
                $("#option_value_drp").empty().append(optionValues);
            },error:function(error){
                console.log("server side error");
            }
             
         });
      }
    
});



