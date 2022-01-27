$('body').on('click', '.pagination a', function (e){
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(this).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getWebUsers(url, data);
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
    getWebUsers(url, data);
    window.history.pushState("", "", url);
});

//$("#sort_direction").on("click", function (e) {
//
//    e.preventDefault();
//    $('#load a').css('color', '#dfecf6');
//    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
//    var url = $(location).attr('href');
//    var page_number = get_parameter_val("page", url);
//    var url = window.location.href;
//    var url = updateQueryStringParameter(url, "page", page_number);
//    var data = make_final_parameters_object(url);
//    data = makeDataObject(data);
//    getWebUsers(url, data);
//    window.history.pushState("", "", url);
//
//});

$("#sort_by").on("change", function (e) {

    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getWebUsers(url, data);
    window.history.pushState("", "", url);

});

$("#applyUserResetfilterbtn").on("click", function (e){
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    $("#VendorCreationDateFrom_filter").val('');
    $("#VendorCreationDateTo_filter").val('');

    $('input[name=account_status]').prop('checked', false)
    $("#search_field_filter").val('');
    var data = make_final_parameters_object(url);
    getWebUsers(url, data);
    window.history.pushState("", "", url);

});

function resetFilters(){
       
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    $("#VendorCreationDateFrom_filter").val('');
    $("#VendorCreationDateTo_filter").val('');

    $('input[name=account_status]').prop('checked', false)
    $("#search_field_filter").val('');
    var data = make_final_parameters_object(url);
    getWebUsers(url, data);
    window.history.pushState("", "", url);
    
    
}


$("#PerPage").on("change", function (e) {

    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getWebUsers(url, data);
    window.history.pushState("", "", url);

});

$("#SerachFilterBtn").on("click", function (e){
  
    e.preventDefault();
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    //var url = window.location.href;
    page_number = 1;
    var url = updateQueryStringParameter(url, "page", page_number);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getWebUsers(url, data);
    window.history.pushState("", "", url);
    
});

function applyfillter() {
    $('#load a').css('color', '#dfecf6');
    $('#load').append('<img style="position: absolute; left: 0; top: 0; articles/listingz-index: 100000;" src="/images/loading.gif" />');
    var url = $(location).attr('href');
    var page_number = get_parameter_val("page", url);
    var url = window.location.href;
    var url = updateQueryStringParameter(url, "page", 1);
    var data = make_final_parameters_object(url);
    data = makeDataObject(data);
    getWebUsers(url, data);
    window.history.pushState("", "", url);
}

function getWebUsers(url, data) {
    block_gui_start();
    $.ajax({
        data: data,
        url: url,
        success: function (data) {
            block_gui_end();
            //alert("Yes");
            $('#listingBlock').html(data);
            $('[data-toggle="tooltip"]').tooltip();
            $("html, body").animate({scrollTop: 0}, 500);
            LetterAvatar.transform();
        },error: function (data) {
          block_gui_end();
          console.log("Projects could not be loaded.");
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

function filter_uri(uri_enc) {
    if (typeof uri_enc !== "undefined")
        uri_enc = uri_enc.replace(/\+/g, '%20');
    return decodeURIComponent(uri_enc);
}

function makeDataObject(data , sortDir) {
    
   if($('input[name=account_status]:checked').val())
      data['account_status'] = $('input[name=account_status]:checked').val();

    var sort_by = $("#sort_by").val();
    data['sort_by'] = sort_by;
    
    if(!sortDir){
      var cClass = $("#sort_direction i").attr("class");
        cClass =  cClass.replace(/\s/g, '');
     if(cClass == "lala-sort-amount-desc"){
        var sort_order = "desc";
     }else if(cClass == "lala-sort-amount-asc"){
        var sort_order = "asc";
     }
    }else{
       var sort_order = sortDir;
    }
    
    var PerPage = $("#PerPage").val();
    data['PerPage'] = PerPage;
    data['sort_order'] = sort_order;
   
    var customer_start = $("#CustomerCreationDateFrom_filter").val();
    data['customer_creation_start'] = customer_start;
    var customer_end = $("#CustomerCreationDateTo_filter").val();
    data['customer_creation_end'] = customer_end;
   
    var search = $("#search_field_filter").val();
    data['search'] = search;
    
    return data;
}
