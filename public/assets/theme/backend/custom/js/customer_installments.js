$('body').on('click', '.AdminCustomerInstallmentsPagination .pagination a', function (e) {
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(this).attr('href');
    var page_number = CustomerInstallmentsGet_parameter_val("page", url);
    var url = window.location.href;
    var url = CustomerInstallmentsUpdateQueryStringParameter(url, "page", page_number);
    var data = CustomerInstallmentsMake_final_parameters_object(url);
    data = CustomerInstallmentsMakeDataObject(data);
    CustomerInstallmentsgetRecords(url, data);
    window.history.pushState("", "", url);
});

$("#CustomerInstallmentsApplyfilterbtn").on("click", function (e) {
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = CustomerInstallmentsGet_parameter_val("page", url);
    var url = window.location.href;
    var url = CustomerInstallmentsUpdateQueryStringParameter(url, "page", 1);
    var data = CustomerInstallmentsMake_final_parameters_object(url);
    data = CustomerInstallmentsMakeDataObject(data);
    CustomerInstallmentsgetRecords(url, data);
    window.history.pushState("", "", url);
});

$("#CustomerInstallmentsSerachFilterBtn").on("click", function (e) {

    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = CustomerInstallmentsGet_parameter_val("page", url);
    var url = window.location.href;
    var url = $("#customer_installments_url").val();
    var url = CustomerInstallmentsUpdateQueryStringParameter(url, "page", 1);
    var data = CustomerInstallmentsMake_final_parameters_object(url);
    data = CustomerInstallmentsMakeDataObject(data);
    CustomerInstallmentsgetRecords(url, data);
    window.history.pushState("", "", url);

});

function CustomerInstallmentsResetOptions() {

    $("#filterBtn").prop("disabled", true);
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = CustomerInstallmentsGet_parameter_val("page", url);

    $("#ci_search_customer_field_filter").val('');
    $("#ci_search_order_id_field_filter").val('');
    $("#ci_filter_status").val('').change();
    $("#ci_from_date").val('');
    $("#ci_to_date").val('');

    var url = window.location.href;
    var url = CustomerInstallmentsUpdateQueryStringParameter(url, "page", 1);
    var data = CustomerInstallmentsMake_final_parameters_object(url);
    data = CustomerInstallmentsMakeDataObject(data);
    CustomerInstallmentsgetRecords(url, data);
    window.history.pushState("", "", url);
}
function CustomerInstallmentsApplyfillter() {

    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = CustomerInstallmentsGet_parameter_val("page", url);
    var url = window.location.href;
    var url = CustomerInstallmentsUpdateQueryStringParameter(url, "page", 1);
    var data = CustomerInstallmentsMake_final_parameters_object(url);
    data = CustomerInstallmentsMakeDataObject(data);
    CustomerInstallmentsgetRecords(url, data);
    window.history.pushState("", "", url);
}

function CustomerInstallmentsgetRecords(url, data){
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        dataType: 'json',
        success: function (data) {
            block_gui_end();
            $('#installments').html(data.content);
            $("html, body").animate({scrollTop: 0}, 500);
        }, error: function (data) {
            block_gui_end();
            console.log("installment could not be loaded.");
        }
    })
}

function CustomerInstallmentsGet_parameter_val(name, url) {

    url = CustomerInstallmentsFilter_uri(url);
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
function CustomerInstallmentsUpdateQueryStringParameter(uri, key, value) {

    uri = CustomerInstallmentsFilter_uri(uri);
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}

function CustomerInstallmentsMake_final_parameters_object(sourceURL) {

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

function CustomerInstallmentsFilter_uri(uri_enc) {
    if (typeof uri_enc !== "undefined")
        uri_enc = uri_enc.replace(/\+/g, '%20');
    return decodeURIComponent(uri_enc);
}

function CustomerInstallmentsMakeDataObject(data) {

    if ($("#ci_search_customer_field_filter").val())
        data['search'] = $("#ci_search_customer_field_filter").val();
    else
        data['search'] = "";

    if ($("#ci_filter_status").val())
        data['status'] = $("#ci_filter_status").val();
    else
        data['status'] = "";
    
    if ($("#ci_search_order_id_field_filter").val())
        data['order_id'] = $("#ci_search_order_id_field_filter").val();
    else
        data['order_id'] = "";
    
    if ($("#ci_sort_order").val())
        data['sort_order'] = $("#ci_sort_order").val();
    else
        data['sort_order'] = "";

    if ($("#ci_sort_by").val())
        data['sort_by'] = $("#ci_sort_by").val();
    else
        data['sort_by'] = "";

    if ($("#ci_from_date").val())
        data['from_date'] = $("#ci_from_date").val();
    else
        data['from_date'] = "";

    if ($("#ci_to_date").val())
        data['to_date'] = $("#ci_to_date").val();
    else
        data['to_date'] = "";
    
     data['customer_id'] = $("#customer_id").val();

    return data;
}

function CustomerInstallmentsToggleFilterBtn() {

    var f1 = $("#ci_search_field_filter").val();
    var f2 = $("#ci_filter_status").val();
    if (f1 || f2) {
        $('#ci_filterBtn').prop('disabled', false);
    } else {
        $("#ci_filterBtn").prop("disabled", true);
    }
}

$(document).on("click","#reloadInstallments",function(){
    
    var id = $("#order_detail_id").val();
    reloadInstallment(id);
   
});

function reloadInstallment(id){
     if(id){
           $.ajax({
                url: APP_URL + "/customer/view_product_installments",
                data: {'id': id, '_token': csrfTokenVal},
                dataType: 'json',
                type: 'post',
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    if(response.status == true) {
                        if(response.content){
                          $("#product_installments_block").html(response.content);
                          $("#viewInstallment").modal("show");
                       }
                    }else{
                        $("#viewInstallment").modal("hide");
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
//view_product_installments
function getInstallments(event){
    
    var id = $(event).attr('data-id');
    if (id) {
      
            $.ajax({
                url: APP_URL + "/customer/view_product_installments",
                data: {'id': id, '_token': csrfTokenVal},
                dataType: 'json',
                type: 'post',
                beforeSend: function () {
                    block_gui_start();
                },
                success: function (response) {
                    block_gui_end();
                    if(response.status == true) {
                        if(response.content){
                          $("#product_installments_block").html(response.content);
                          $("#viewInstallment").modal("show");
                       }
                    }else{
                        $("#viewInstallment").modal("hide");
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
 
