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

    localStorage.setItem('order_search', "");
    localStorage.setItem('order_id_field_filter', '');
    localStorage.setItem('order_filter_status', "");
    localStorage.setItem('order_from_date', "");
    localStorage.setItem('order_to_date', "");
    localStorage.setItem('order_sort_by', "");
    localStorage.setItem('order_sort_order', "");

    $("#search_customer_field_filter").val('');
    $("#search_order_id_field_filter").val('');
    $("#filter_status").val('').change();
    $("#from_date").val('');
    $("#to_date").val('');


    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getRecords(url, data);
    window.history.pushState("", "", url);
}
function applyfillter() {

    if ($("#search_customer_field_filter").val())
        localStorage.setItem('order_search', $("#search_customer_field_filter").val());
    else
        localStorage.setItem('order_search', "");

    if ($("#search_order_id_field_filter").val())
        localStorage.setItem('order_id_field_filter', $("#search_order_id_field_filter").val());
    else
        localStorage.setItem('order_id_field_filter', '');


    if ($("#filter_status").val())
        localStorage.setItem('order_filter_status', $("#filter_status").val());
    else
        localStorage.setItem('order_filter_status', "");

    if ($("#from_date").val())
        localStorage.setItem('order_from_date', $("#from_date").val());
    else
        localStorage.setItem('order_from_date', "");

    if ($("#to_date").val())
        localStorage.setItem('order_to_date', $("#to_date").val());
    else
        localStorage.setItem('order_to_date', "");

    if ($("#sort_by").val())
        localStorage.setItem('order_sort_by', $("#sort_by").val());
    else
        localStorage.setItem('order_sort_by', "");

    if ($("#sort_order").val())
        localStorage.setItem('order_sort_order', $("#sort_order").val());
    else
        localStorage.setItem('order_sort_order', "");


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

    if ($("#search_customer_field_filter").val())
        data['search'] = $("#search_customer_field_filter").val();
    else
        data['search'] = "";

    if ($("#search_order_id_field_filter").val())
        data['order_id'] = $("#search_order_id_field_filter").val();
    else
        data['order_id'] = "";


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

$(document).on("click", "#addNew", function () {
    $("#addForm")[0].reset();
    var validator = $("#addForm").validate();
    validator.resetForm();
    $("#cid").val('');
    $("#addModal").modal("show");
});


$(function () {

    // It has the name attribute "registration"
    $("#addForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 50
            }
        },
        //Specify validation error messages
        messages: {
            name: {
                required: "Please enter option name",
                maxlength: "Max 50 character allowed"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {

            $("#save_btn").prop("disabled", true);
            var data = $("#addForm").serialize();
            $.ajax({
                url: APP_URL + "/admin/save_option",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#save_btn").prop("disabled", false);
                    if (response.status == true) {
                        $("#addForm")[0].reset();
                        $("#addModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            ResetOptions();
                        }, 2000);
                    } else {
                        $("#addModal").modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        $('html, body').animate({scrollTop: 0}, 'slow', function () {
                        });
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $("#addModal").modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});

function UpdateRecord(event) {

    var id = $(event).attr('data-id');
    var validator = $("#addForm").validate();
    validator.resetForm();
    if (id) {
        $.ajax({
            url: APP_URL + "/admin/get_option",
            data: {'id': id, '_token': csrfTokenVal},
            dataType: 'json',
            type: 'get',
            beforeSend: function () {
                block_gui_start();
            },
            success: function (response) {
                block_gui_end();
                if (response.option) {
                    $("#cid").val(response.option.id);
                    $("#name").val(response.option.name);
                    $("#status").val(response.option.status).change();
                    $("#addModal").modal('show');
                }

            }, error: function (response) {
                block_gui_end();
                console.log("server side error");
            }
        })

    }

}

function TrashRecord(event) {

    var id = $(event).attr('data-id');
    if (id) {
        var res = confirm("Are you sure you want to delete ?");
        if (res) {
            $.ajax({
                url: APP_URL + "/admin/trash_order",
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

function ManageProductCategories(event) {

    var id = $("#categories_drp").val();
    var label = $("#categories_drp option:selected").text();
    if (SelectedCat.indexOf(id) > -1 || $("#product-category" + id).html()) {
        return false;
    }
    if (id && label) {
        SelectedCat.push(id);
        var newOption = ' <div id="product-category' + id + '">';
        newOption = newOption + '<i class="fa fa-minus-circle" onclick="removeCategory(' + id + ')"></i>';
        newOption = newOption + ' ' + label;
        newOption = newOption + '<input type="hidden" name="product_category[]" value="' + id + '">';
        newOption = newOption + '</div>';
        $("#product-category-block").append(newOption);
    }
}

function removeCategory(id) {
    $("#product-category" + id).remove();
    SelectedCat.splice($.inArray(id, SelectedCat), 1);
}




function readURL(input, id) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#' + id).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function ShowImagePreview(event) {
    var ext = $(event).val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) != -1) {
        var id = $(event).attr('id') + '-label';
        var data_type = $(event).attr('data-type');
        readURL(event, id);
        if (data_type == "variation-img") {
            UpdateVariationMedia(event);
        }
    } else {
        var id = $(event).attr('id') + '-label';
        $('#' + id).attr('src', TMAXNOIMAGE);
    }
}



function ManageOptions(event) {
    var id = $(event).val();
    if (id == "AddMoreOption") {
        AddMoreOption();
        return false;
    }

    if (id) {
        $("#selected_option_id").val(id);
        $.ajax({
            url: APP_URL + "/admin/get_option_values",
            data: {'option_id': id, '_token': csrfTokenVal},
            dataType: 'json',
            type: 'post',
            success: function (response) {
                var optionValues = '<option value="">--None--</option>';
                if (response.status == true) {
                    if (response.optionVlue) {
                        $.each(response.optionVlue, function (index, value) {
                            if (value.value_name)
                                optionValues = optionValues + '<option value="' + value.id + '">' + value.value_name + '</option>';
                        });

                    }
                }
                optionValues = optionValues + '<option value="AddMoreOptionValue">--Add More--</option>';
                $("#option_value_drp").empty().append(optionValues);
            }, error: function (error) {
                console.log("server side error");
            }

        });
    }

}

var SelectedOptionValues = [];
var SelectedOptions = [];

function ManageOptionValues(event) {

    var option_id = $("#options_drp").val();
    var option_label = $("#options_drp option:selected").text();
    var id = $("#option_value_drp").val();
    var label = $("#option_value_drp option:selected").text();
    if (id == "AddMoreOptionValue") {
        AddMoreOptionValue();
        return false;
    }

    if (SelectedOptionValues.indexOf(id) > -1) {
        return false;
    }

    if (id && label) {
        SelectedOptionValues.push(id);
        SelectedOptions[id] = id + '-' + option_id + '-' + option_label + '-' + label;
        $("#variation_options").val(SelectedOptions);
        console.log("After Adding Option");
        console.log(SelectedOptions);


        var newOption = ' <div id="product-option-value' + id + '">';
        newOption = newOption + '<i class="fa fa-minus-circle" onclick="removeOptionValue(' + id + ')"></i>';
        newOption = newOption + ' ' + option_label + ' > ' + label;
        newOption = newOption + '<input type="hidden" name="product_option_values[' + option_id + '][] value="' + id + '">';
        newOption = newOption + '</div>';
        $("#product-variation-block").append(newOption);
    }
}

function removeOptionValue(id) {
    $("#product-option-value" + id).remove();
    SelectedOptionValues.splice($.inArray(id, SelectedOptionValues), 1);
    SelectedOptions.splice($.inArray(id, SelectedOptions), 1);
    $("#variation_options").val(SelectedOptions);


    console.log("After Removing Option");
    console.log(SelectedOptions);

}

function AddMoreOption() {

    $("#addOptionForm")[0].reset();
    var validator = $("#addOptionForm").validate();
    validator.resetForm();
    $("#addOptionModal").modal("show");
}

function AddMoreOptionValue() {

    $("#addOptionValueForm")[0].reset();
    var validator = $("#addOptionValueForm").validate();
    validator.resetForm();
    $("#addOptionValue").modal("show");

}

function UpdateOptions() {

    $.ajax({
        url: APP_URL + "/admin/product_options_list",
        data: {'_token': csrfTokenVal},
        dataType: 'json',
        type: 'post',
        success: function (response) {
            var optionValues = '';
            if (response.status == true) {
                if (response.options) {
                    $.each(response.options, function (index, value) {
                        if (value.name)
                            optionValues = optionValues + '<option value="' + value.id + '">' + value.name + '</option>';
                    });
                    optionValues = optionValues + '<option value="AddMoreOption">--Add More--</option>';
                    $("#options_drp").empty().append(optionValues);
                }
            }
        }, error: function (response) {
            console.log("server side error");
        }
    })
}


function UpdateOptionValues() {

    var id = $("#options_drp").val();
    $.ajax({
        url: APP_URL + "/admin/get_option_values",
        data: {'option_id': id, '_token': csrfTokenVal},
        dataType: 'json',
        type: 'post',
        success: function (response) {
            var optionValues = '<option value="">--None--</option>';
            if (response.status == true) {
                if (response.optionVlue) {
                    $.each(response.optionVlue, function (index, value) {
                        if (value.value_name)
                            optionValues = optionValues + '<option value="' + value.id + '">' + value.value_name + '</option>';
                    });
                }
            }
            optionValues = optionValues + '<option value="AddMoreOptionValue">--Add More--</option>';
            $("#option_value_drp").empty().append(optionValues);
        }, error: function (error) {
            console.log("server side error");
        }

    });
}

$(function () {

    // It has the name attribute "registration"
    $("#addOptionForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 50
            }
        },
        //Specify validation error messages
        messages: {
            name: {
                required: "Please enter option name",
                maxlength: "Max 50 character allowed"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {

            $("#save_option_btn").prop("disabled", true);
            var data = $("#addOptionForm").serialize();
            $.ajax({
                url: APP_URL + "/admin/save_option",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#save_option_btn").prop("disabled", false);
                    if (response.status == true) {
                        $("#addOptionForm")[0].reset();
                        $("#addOptionModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        UpdateOptions();
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                        }, 3000);
                    } else {
                        $("#addOptionModal").modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $("#addOptionForm").modal("show");
                        }, 3000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_option_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});


$(function () {

    // It has the name attribute "registration"
    $("#addOptionValueForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 50
            }
        },
        //Specify validation error messages
        messages: {
            name: {
                required: "Please enter option value name",
                maxlength: "Max 50 character allowed"
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {

            $("#save_option_value_btn").prop("disabled", true);
            var data = $("#addOptionValueForm").serialize() + '&option_id=' + $("#options_drp").val();
            $.ajax({
                url: APP_URL + "/admin/save_option_value",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#save_option_value_btn").prop("disabled", false);
                    if (response.status == true) {
                        $("#addOptionValueForm")[0].reset();
                        $("#addOptionValue").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        UpdateOptionValues();
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                        }, 2000);
                    } else {
                        $("#addOptionValue").modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $("#addOptionValue").modal("show");
                        }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#save_option_value_btn").prop("disabled", false);
                    console.log("server side error");
                }
            });
        }
    });
});



$(function () {

    // It has the name attribute "registration"
    $("#ProductForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 255
            }
        },
        //Specify validation error messages
        messages: {
            name: {
                required: "Please enter product name",
                maxlength: "Max 255 character allowed"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            block_gui_start();
            $("#save_tmax_product_btn").prop("disabled", true);
            if ($("#ProductForm").valid() && $("#name").val()) {
                $("#ProductForm").submit();
            } else {
                block_gui_end();
                alert("Please add product name!");
                $("#save_tmax_product_btn").prop("disabled", false);
                $("#info").click();
            }
        }
    });
});


function UpdateVariation(event) {

    var id = $(event).attr("data-id");
    var field = $(event).attr("data-field");
    if (field == "active") {
        var value = $(event).attr("data-status");
    } else {
        var value = $(event).val();
    }

    if (id && field) {
        $.ajax({
            url: APP_URL + "/admin/update_product_variation",
            data: {'id': id, 'field': field, 'value': value, '_token': csrfTokenVal},
            dataType: 'json',
            type: 'post',
            success: function (response) {

            }, error: function (error) {
                console.log("server side error");
            }
        });
    }
}



function UpdateVariationMedia(event) {

    var variation_id = $(event).attr("data-id");
    var file_id = $(event).attr("id");
    var formData = new FormData();
    formData.append('variation_image', $('#' + file_id)[0].files[0]);
    formData.append('id', variation_id);
    formData.append('_token', csrfTokenVal);

    $.ajax({
        url: APP_URL + "/admin/updateProductVariationImage",
        type: 'POST',
        data: formData,
        success: function (data) {

        },
        cache: false,
        contentType: false,
        processData: false
    });

}

function ValidateUploadedImage(event) {

    var obj_id = $(event).attr("id");
    var error_lable_id = $(event).attr("id") + '_error';
    if ($(event).val()) {
        var ext = $(event).val().split('.').pop().toLowerCase();
        if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
            $('#' + error_lable_id).remove();
            $("#" + obj_id).after('<p id=' + error_lable_id + ' style="color:#FF0000;"> Invalid Image Format! Image Format Must Be JPG, JPEG, PNG or GIF.</p>');
            $("#" + obj_id).val('');
        } else {
            $('#' + error_lable_id).remove();
        }/*else{
         //var picsize = ($("#"+obj_id).files[0].size);
         var picsize = 200000000;
         if(picsize > 1000000){
         $('#'+error_lable_id).remove();
         $("#"+obj_id).after('<p id="'+error_lable_id+'" style="color:#FF0000;">Maximum File Size Limit is 1MB.</p>'); 
         console.log($("#"+obj_id));
         error=0;
         }else{
         error =1;
         $('#'+error_lable_id).remove();
         }
         //$('#'+error_lable_id).remove();
         if(error != 1){
         //$('input:submit').attr('disabled',false);
         }
         }*/
    }

}

function saveOrderHistory() {

    if ($("#button_history").is(":disabled"))
        return false;

    $("#button_history").prop("disabled", true);
    var data = $("#order_history_form").serialize() + '&_token=' + csrfTokenVal;
    $.ajax({
        url: APP_URL + "/admin/saveOrderHistory",
        data: data,
        dataType: "json",
        type: "post",
        beforeSend: function () {
            block_gui_start();
        },
        success: function (response) {
            block_gui_end();
            $("#button_history").prop("disabled", false);
            if (response.status == true) {
                $("#order_history_form")[0].reset();
                $("#success_msg").html(response.message);
                $('#success_message_modal').modal("show");
                setTimeout(function () {
                    $("#success_msg").html("");
                    $('#success_message_modal').modal("hide");
                    location.reload();
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
            $("#button_history").prop("disabled", false);
            console.log("server side error");
        }
    });
}

function refreshProductQty(event) {

    var id = $(event).attr("data-row-id");
    var qty = parseInt($("#qty" + id).val());
    //var additionalAmount = parseFloat($("#additional_amntVal"+id).val().replace(',', ''));
    var additionalAmount = parseFloat($("#origin_admVal" + id).val().replace(',', ''));
    var unitPrice = parseFloat($("#unitPriceVal" + id).val().replace(',', ''));
    var originQty = parseInt($("#origin_qty" + id).val().replace(',', ''));
    var UnitAdditionalAmount = (additionalAmount / originQty);
    
    console.log("UnitPrice=>=>"+unitPrice);
    console.log("OriginalQty=>=>"+originQty);
    console.log("UnitAdditionalAmount=>=>"+UnitAdditionalAmount);
    
    additionalAmount = (qty * UnitAdditionalAmount);
    
    console.log("Qtyt=>=>"+additionalAmount);
    console.log("Additional Amout=>=>"+additionalAmount);
    
    var totalPrice = ((unitPrice * qty) + additionalAmount);
    if (totalPrice)
        totalPrice = totalPrice.toFixed(2);

    $("#additional_amnt" + id).html(additionalAmount);
    $("#additional_amntVal" + id).val(additionalAmount);
    $("#total" + id).html(totalPrice);
    $("#totalVal" + id).val(totalPrice);
}

var durations_list = [];
var unit_price = 0.00;
var cost_price = 0.00;

$(document).on("click", "#button-product-add", function () {
    var product_id = $("#input-product").val();
    var lable = $("#input-product option:selected").text();
    var productLable = lable.split('(');

    var name = '';
    var variation = '';
    if (productLable.length > 0) {
        name = productLable[0];
        if (productLable[1])
            variation = productLable[1].replace(")", "");
    }

    var qty = $("#input-quantity").val();
    $("#pQty").val(qty);
    $("#pName").val(name);
    $("#pVariationLabel").val(variation);
    $("#pId").val(product_id);

    if (product_id) {
        $.ajax({
            url: APP_URL + "/admin/getProductInstallments",
            data: {'product_id': product_id, '_token': csrfTokenVal},
            dataType: "json",
            type: "post",
            beforeSend: function () {
                block_gui_start();
            },
            success: function (response) {
                block_gui_end();
                if (response.status == true) {
                    var installments = response.installments;
                    var durations = '';
                    var types = '';
                    var values = '';
                    unit_price = parseFloat(response.unit_price);
                    cost_price = parseFloat(response.costPrice);
                 
                    $("#cunitPrice").val(unit_price);
                    $("#ccostPrice").val(cost_price);
                   
                    $.each(installments, function (key, value) {
                        durations_list[value.duration] = {'type': value.type, 'value': value.interest_rate};
                        durations = durations + "<option value=" + value.duration + ">" + value.duration + "</option>";
                        types = types + "<option value=" + value.type + ">" + value.type + "</option>";
                        //values = values + "<option value=" + value.interest_rate + ">" + value.interest_rate + "</option>";
                        if(key == 0)
                           values = value.interest_rate;
                        
                    });
                    $("#duration").html(durations);
                    $("#type").html(types);
                    //$("#value").html(values);
                    $("#value").val(values);
                    $("#addProductValue").modal("show");
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
        });
    }
});

$("#duration").on("change", function (){
    var dur = $(this).val();
    if (dur) {
        var type = durations_list[dur].type;
        var value = durations_list[dur].value;
        $("#type").val(type).change();
        //$("#value").val(value).change();
        $("#value").val(value);
    }
});

$(document).on("click", "#saveProduct", function () {
   
    totalProducts = 0;
    unit_price = parseFloat($("#cunitPrice").val());
    cost_price = parseFloat($("#ccostPrice").val());
    $('.product_search').val(null).trigger('change');
    
    $('#tab-cart table >  tbody  > tr').each(function(){
         var indx = parseInt($(this).attr("data-index"));
         if(indx > totalProducts)
            totalProducts = indx;
    });
    totalProducts  = totalProducts + 1;
    
    var product_name = $("#pName").val()
    var pId = $("#pId").val();
    var pVariationLabel = $("#pVariationLabel").val();
    var pQty = parseInt($("#pQty").val());
    var value = parseFloat($("#value").val());
    var pId = pId.split('-');
    if(pId[1])
      var variation_id = pId[1];
   
    if(pId[0])
      pId = pId[0];
   
    var installment_duration = $("#duration").val();
    var installment_type =  $("#type").val();
    var installment_value =  $("#value").val();
    
    
    var additionalAmount = 0.00;
    if ($("#type").val() == "percentage") {
        additionalAmount = ((value / 100) * (unit_price * pQty));
    } else {
        additionalAmount = (value + (unit_price * pQty));
    }
    
    var totalAmount = (unit_price * pQty) + additionalAmount;
    var product = '<tr id="productrow' + totalProducts + '" data-index='+totalProducts+'>';
    product = product + '<td class="text-left" id="productLable">' + product_name;
    product = product + '</td>';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][product_id]" value="' + pId + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][product_variation_id]" value="' + variation_id + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][installment_duration]" value="' + installment_duration + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][installment_type]" value="' + installment_type + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][installment_value]" value="' + installment_value + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][unitPrice]" value="' + unit_price + '">';
    product = product + '<input type="hidden" name="products[' + totalProducts + '][costPrice]" value="' + cost_price + '">';
    product = product + '<td class="text-left" id="variationlable">' + pVariationLabel + '</td>';
    product = product + '<td class="text-right">';
    product = product + '<div class="input-group btn-block" style="max-width: 200px;">';
    product = product + '<input type="text" name="products[' + totalProducts + '][quantity]" id="qty' + totalProducts + '" value="' + pQty + '" class="form-control">';
    product = product + '<input type="hidden" id="origin_qty' + totalProducts + '" value="' + pQty + '">';
    product = product + '<span class="input-group-btn">';
    product = product + '<button type="button" style="height:33px; " data-toggle="tooltip" title="" data-row-id=' + totalProducts + ' onclick="refreshProductQty(this)" data-loading-text="Loading..." class="btn  data-original-title="Refresh">';
    product = product + '<i class="fa fa-refresh"></i>';
    product = product + '</button>';
    product = product + '</span>';
    product = product + '</div>';
    product = product + '</td>';
    product = product + '<td class="text-right"><small>RS</small>';
    product = product + ' <span id="unitPrice' + totalProducts + '">';
    product = product + numberWithCommas(unit_price);
    product = product + '</span>';
    product = product + '<input type="hidden" id="unitPriceVal' + totalProducts + '" value="' + unit_price + '">';
    product = product + '</td>';

    product = product + '<td class="text-right"><small>RS</small>';
    product = product + ' <span id="costPrice' + totalProducts + '">';
    product = product + numberWithCommas(cost_price);
    product = product + '</span>';
    product = product + '<input type="hidden" id="costPriceVal' + totalProducts + '" value="' + cost_price + '">';
    product = product + '</td>';

    product = product + '<td class="text-right">';
    product = product + '<small>RS</small>';
    product = product + '<span id="additional_amnt' + totalProducts + '"> ' + numberWithCommas(additionalAmount) + '</span>';
    product = product + '<input type="hidden" id="additional_amntVal' + totalProducts + '" value="' + additionalAmount + '">';
    product = product + '<input type="hidden" id="origin_admVal' + totalProducts + '" value="' + additionalAmount + '">';
    product = product + '</td>';
    product = product + '<td class="text-right">';
    product = product + '<small>RS</small>';
    product = product + '<span id="total' + totalProducts + '"> ' + numberWithCommas(totalAmount) + '</span>';
    product = product + '<input type="hidden" id="totalVal' + totalProducts + '" value="' + totalAmount + '">';
    product = product + '</td>';
    product = product + '<td class="text-center" style="width: 3px;">';
    product = product + '<button type="button" value="' + totalProducts + '" data-toggle="tooltip" title="" onclick="$(\'#productrow' + totalProducts + '\').remove();" data-loading-text="Loading..." class="btn btn-danger" data-original-title="Remove"><i class="fa fa-minus-circle"></i></button></td>';
    product = product + '</tr>';
    $("#cart").append(product);
    $("#addProductValue").modal("hide");

});

function ShowOrderPreview() {

    var subTotal = 0.00;
    var Total = 0.00;
    var string = '';
  
    $('#tab-cart table >  tbody  > tr').each(function (key, value) {
        
        var index = parseInt($(this).attr('data-index'));
        if($(this).find("#unitPriceVal" + index).val()) {
            var name = $(this).find("#productLable").html();
            var variationLable = $(this).find("#variationlable").html();
            var qty = $(this).find("#qty" + index).val();
            var unitPrice = $(this).find("#unitPriceVal" + index).val();
            var costPrice = $(this).find("#costPriceVal" + index).val();
            var additionalAmount = parseFloat($(this).find("#additional_amntVal" + index).val().replace(',', ''));
            var total = parseFloat($(this).find("#totalVal" + index).val().replace(',', ''));
            subTotal = subTotal + total;
            string = string + '<tr>';
            string = string + '<td class="text-left">' + name + '</td>';
            string = string + '<td class="text-left">' + variationLable + '</td>';
            string = string + '<td class="text-right">' + qty + '</td>';
            string = string + '<td class="text-right"><small>Rs</small> ' + numberWithCommas(unitPrice) + '</td>';
            string = string + '<td class="text-right"><small>Rs</small> ' + numberWithCommas(costPrice) + '</td>';
            string = string + '<td class="text-right"><small>Rs</small> ' + numberWithCommas(additionalAmount) + '</td>';
            string = string + '<td class="text-right"><small>Rs</small> ' + numberWithCommas(total) + '</td>';
            string = string + '</tr>';
        }
    });
    if (!string) {
        string = string + "<tr><td colspan='10'>No product found</td></tr>";
    }

    Total = subTotal;
    string = string + '<tr>';
    string = string + '<td class="text-right" colspan="6">Sub-Total:</td>';
    string = string + '<td class="text-right" id="PreviewSubTotal"><small>Rs</small> ' + numberWithCommas(subTotal) + '</td>';
    string = string + '</tr>';
    string = string + '<tr>';
    string = string + '<td class="text-right" colspan="6">Total:</td>';
    string = string + '<td class="text-right" id="PreviewTotal"><small>Rs</small> ' + numberWithCommas(Total) + '</td>';
    string = string + '</tr>';
    $("#total").html(string);
}

$(document).on("click","#button-save",function(){

          let order_status = $(this).attr('data-order-status');
          if(typeof  order_status !== null && order_status == 'approved'){
               if(!confirm('Are you sure you want to update approved order.It will overwrite the installments history.')) {
                  return false;
                }
           }

           if($("#button-save").is(":disabled")){
              return false;
           }
           
           if(!$("#input-customer").val() || !$("#input-email").val() || !$("#input-telephone").val()){
              $("#error_msg").html("Customer detail missing!");
              $('#error_message_modal').modal("show");
              return false;    
           }
           
          if($('#tab-cart table >  tbody  > tr').length == 0){
              $("#error_msg").html("Please add product to save!");
              $('#error_message_modal').modal("show");
              return false;    
           }
           
        
           $("#button-save").prop("disabled", true);
            var data = $("#manage_order_form").serialize()+'&_token='+csrfTokenVal;
            $.ajax({
                url: APP_URL + "/admin/placeOrder",
                data: data,
                dataType: "json",
                type: "post",
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    $("#button-save").prop("disabled", false);
                    if (response.status == true) {
                        $("#manage_order_form")[0].reset();
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                            if(response.order_id){
                               window.location.href = APP_URL+"/admin/manage_order/"+response.order_id;
                           }
                        }, 2000);
                    } else {
                        $("#addModal").modal("hide");
                        $("#error_msg").html(response.message);
                        $('#error_message_modal').modal("show");
                        setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                            $("#addModal").modal("show");
                       }, 2000);
                    }
                }, error: function (response) {
                    block_gui_end();
                    $("#button-save").prop("disabled", false);
                    console.log("server side error");
                }
            });
    
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//button-save

/// Handle filters
$(document).ready(function () {

    let url =  window.location.href;
    if (~url.indexOf("admin/orders")){
        let is_filter = false;
        let order_search  = localStorage.getItem('order_search');
        if(typeof order_search !== "undefined"  && order_search !== null) {
            $("#search_customer_field_filter").val(order_search);
            is_filter =  true;
        }

        let order_id_field_filter  = localStorage.getItem('order_id_field_filter');
        if(typeof order_id_field_filter !== "undefined"  && order_id_field_filter !== null) {
            $("#search_order_id_field_filter").val(order_id_field_filter);
            is_filter =  true;
        }

        let order_filter_status  =  localStorage.getItem('order_filter_status');
        if(typeof order_filter_status !== "undefined"  && order_filter_status !== null) {
            $("#filter_status").val(order_filter_status).change();
            is_filter =  true;
        }

        let order_from_date = localStorage.getItem('order_from_date');
        if(typeof order_from_date !== "undefined"  && order_from_date !== null) {
            $("#from_date").val(order_from_date);
            is_filter =  true;
        }

        let order_to_date = localStorage.getItem('order_to_date');
        if(typeof order_to_date !== "undefined"  && order_to_date !== null){
            $("#to_date").val(order_to_date);
            is_filter =  true;
        }

        let order_sort_by = localStorage.getItem('order_sort_by');
        if(typeof order_sort_by !== "undefined"  && order_sort_by !== null){
            $("#sort_by").val(order_sort_by);
            is_filter =  true;
        }

        let order_sort_order = localStorage.getItem('order_sort_order');
        if(typeof order_sort_order !== "undefined"  && order_sort_order !== null){
            $("#sort_order").val(order_sort_order);
            is_filter =  true;
        }

        if(is_filter === true){
            applyfillter();
            is_filter = false;
        }
    }

})
