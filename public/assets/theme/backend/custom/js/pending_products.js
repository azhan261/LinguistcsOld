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
    $("#search_field_filter").val('');
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
     
     if ($("#search_field_filter").val())
        data['search'] = $("#search_field_filter").val();
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
               required:"Please enter option name",
               maxlength:"Max 50 character allowed"
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

function UpdateRecord(event){
    
     var id = $(event).attr('data-id');
     var validator = $("#addForm").validate();
     validator.resetForm();
     if(id){
         $.ajax({
                url:APP_URL + "/admin/get_option",
                data:{'id':id,'_token':csrfTokenVal},
                dataType:'json',
                type:'get',
                beforeSend: function (){
                    block_gui_start();
                },
                success:function(response){
                    block_gui_end();
                    if(response.option){
                      $("#cid").val(response.option.id);
                      $("#name").val(response.option.name);
                      $("#status").val(response.option.status).change();
                      $("#addModal").modal('show');
                   }
               
                },error:function(response){
                    block_gui_end();
                    console.log("server side error");
                }
             })
         
     }
    
}

function TrashRecord(event){
   
    var id = $(event).attr('data-id');
    if(id){
        var res = confirm("Are you sure you want to delete ?");
        if(res){
            $.ajax({
                url:APP_URL + "/admin/trash_product",
                data:{'id':id,'_token':csrfTokenVal},
                dataType:'json',
                type:'post',
                beforeSend: function () {
                    block_gui_start();
                },
                success:function(response){
                    block_gui_end();
                  if(response.status == true){
                     $("#success_msg").html(response.message);
                     $('#success_message_modal').modal("show");
                     setTimeout(function () {
                        $("#success_msg").html("");
                        $('#success_message_modal').modal("hide");
                        ResetOptions();
                      }, 2000);
                   }else{
                      $("#error_msg").html(response.message);
                      $('#error_message_modal').modal("show");
                       setTimeout(function () {
                            $("#error_msg").html("");
                            $('#error_message_modal').modal("hide");
                       }, 2000);
                   }
                },error:function(response){
                    block_gui_end();
                    console.log("server side error");
                }
             })
        }
    }
}

var SelectedCat = [];
if(ProductCategories){
  $.each(ProductCategories , function(key , value){
      SelectedCat.push(value.category_id);
  }); 
}
function ManageProductCategories(event){
   
    var id =  $("#categories_drp").val();
    var label = $("#categories_drp option:selected").text();
    if(SelectedCat.indexOf(id) > -1 || $("#product-category"+id).html()){
       return false;
    }
    if(id && label){
       SelectedCat.push(id); 
       var newOption = ' <div id="product-category'+id+'">';
                         newOption = newOption + '<i class="fa fa-minus-circle" onclick="removeCategory('+id+')"></i>';
                         newOption = newOption +' '+ label;
                         newOption = newOption + '<input type="hidden" name="product_category[]" value="'+id+'">';
                         newOption = newOption + '</div>'; 
        $("#product-category-block").append(newOption); 
    }
}

function removeCategory(id){
    $("#product-category"+id).remove();
    SelectedCat.splice($.inArray(id, SelectedCat),1);
}

if(TotalProductMedia)
 var image_row = TotalProductMedia;
else
 var image_row = 1;

function addImage() {
	html  = '<tr id="image-row' + image_row + '">';
	html += '  <td class="text-left"><label class="uploadLabel" for="input-image' + image_row + '"><img id="input-image' + image_row + '-label" src="'+TMAXNOIMAGE+'" style="width:100px;height:100px;background-color: white;border: 1px solid #ddd;border-radius: 4px" alt="" title=""/></label> <input id="input-image' + image_row + '" onchange="ShowImagePreview(this),ValidateUploadedImage(this)" name="product_images[' + image_row + '][image]" type="file" style="display:none;"></td>';
	html += '  <td class="text-right"><input type="text" name="product_images[' + image_row + '][sort_order]" value="" placeholder="Sort Order" class="form-control" /></td>';
	html += '  <td class="text-left"><button type="button" onclick="$(\'#image-row' + image_row  + '\').remove();" data-toggle="tooltip" title="Remove" class="btn btn-danger"><i class="fa fa-minus-circle"></i></button></td>';
	html += '</tr>';
	$('#images tbody').append(html);
	image_row++;
}


function readURL(input , id) {

    if(input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#'+id).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
 }

 function ShowImagePreview(event){
   var ext = $(event).val().split('.').pop().toLowerCase();  
   if($.inArray(ext, ['gif','png','jpg','jpeg']) != -1){
      var  id = $(event).attr('id')+'-label';
      var  data_type = $(event).attr('data-type');
      readURL(event , id);
      if(data_type == "variation-img"){
          UpdateVariationMedia(event);
       }  
    }else{
       var  id = $(event).attr('id')+'-label';
       $('#'+id).attr('src',TMAXNOIMAGE);
    }
 }

if(TotalProductAttributes)
  var attriute_row = TotalProductAttributes;
else    
 var attriute_row = 1;

function addAttribute() {
	html  = '<tr id="attribute_row' + attriute_row + '">';
	html += '<td class="text-left"><input id="input-key' + attriute_row +'"  class="form-control" name="product_attribute[' + attriute_row +'][key]" type="text"></td>';
        html += '<td class="text-right"><textarea class="form-control" name="product_attribute[' + attriute_row +'][value]" rows="5" ></textarea></td>';
	html += '<td class="text-left"><button type="button" onclick="$(\'#attribute_row' + attriute_row +'\').remove();" data-toggle="tooltip" title="" class="btn btn-danger" data-original-title="Remove"><i class="fa fa-minus-circle"></i></button>';
        html += '</td>';
        html += '</tr>';
	$('#attributes tbody').append(html);
 	attriute_row++;
}

if(TotalInstallmentPlans)
var installment_row = TotalInstallmentPlans;
else
var installment_row = 1;
    

function addInstallment() {
        var durationsStr = '';      
        durationsStr = durationsStr + '<select class="form-control tmax_select" name="product_installment[' + installment_row +'][duration]" id="duration">';
        $.each(durations, function (index, value) {
          durationsStr = durationsStr + '<option value="'+value+'">'+value+'</option>';
        });
        durationsStr = durationsStr + '</select>';
 
        html  = '<tr id="installment_row' + installment_row + '">';
        html += '<td class="text-left">'+durationsStr+'</td>';
        html += '<td><select class="form-control tmax_select" name="product_installment[' + installment_row +'][type]" id="type"><option value="percentage" selected="true">Percentage</option><option value="fix_amount">Fixed Amount</option></select></td>';
        html += '<td class="text-right"><input id="input-percentage' + installment_row +'" value="10" class="form-control" name="product_installment[' + installment_row +'][percentage]" type="text"></td>';
	html += '<td class="text-left"><button type="button" onclick="$(\'#installment_row' + installment_row +'\').remove();" data-toggle="tooltip" title="" class="btn btn-danger" data-original-title="Remove"><i class="fa fa-minus-circle"></i></button>';
        html += '</td>';
        html += '</tr>';
	$('#installment tbody').append(html);
 	installment_row++;
}

function ManageOptions(event){
      var id = $(event).val();
      if(id == "AddMoreOption"){
          AddMoreOption();
          return false;
      }
      
      if(id){
         $("#selected_option_id").val(id);
         $.ajax({
            url:APP_URL + "/admin/get_option_values",
            data:{'option_id':id,'_token':csrfTokenVal},
            dataType:'json',
            type:'post',
            success:function(response){
                var optionValues = '<option value="">--None--</option>';
                if(response.status == true ){
                   if(response.optionVlue){
                     $.each(response.optionVlue , function(index , value){
                      if(value.value_name)
                          optionValues = optionValues + '<option value="'+value.id+'">'+value.value_name+'</option>';
                      });  
                     
                   }
                }
                optionValues = optionValues + '<option value="AddMoreOptionValue">--Add More--</option>';
                $("#option_value_drp").empty().append(optionValues);
            },error:function(error){
                console.log("server side error");
            }
             
         });
      }
    
}

var SelectedOptionValues = [];
var SelectedOptions = [];

function ManageOptionValues(event){
   
    var option_id =  $("#options_drp").val();
    var option_label = $("#options_drp option:selected").text();
    var id =  $("#option_value_drp").val();
    var label = $("#option_value_drp option:selected" ).text();
    if(id == "AddMoreOptionValue"){
       AddMoreOptionValue();
       return false;
    }
    
    if(SelectedOptionValues.indexOf(id) > -1){
      return false;
    }
    
    if(id && label){
       SelectedOptionValues.push(id);
       SelectedOptions[id] = id+'-'+option_id+'-'+option_label +'-'+label;
       $("#variation_options").val(SelectedOptions);
       console.log("After Adding Option");
       console.log(SelectedOptions);
   
        
       var newOption = ' <div id="product-option-value'+id+'">';
                         newOption = newOption + '<i class="fa fa-minus-circle" onclick="removeOptionValue('+id+')"></i>';
                         newOption = newOption +' '+option_label+' > '+ label;
                         newOption = newOption + '<input type="hidden" name="product_option_values['+option_id+'][] value="'+id+'">';
                         newOption = newOption + '</div>'; 
        $("#product-variation-block").append(newOption); 
    }
}

function removeOptionValue(id){
    $("#product-option-value"+id).remove();
    SelectedOptionValues.splice($.inArray(id, SelectedOptionValues),1);
    SelectedOptions.splice($.inArray(id, SelectedOptions),1);
    $("#variation_options").val(SelectedOptions);
     
    
    console.log("After Removing Option");
    console.log(SelectedOptions);
    
}

function AddMoreOption(){

     $("#addOptionForm")[0].reset();
     var validator = $("#addOptionForm").validate();
     validator.resetForm();
     $("#addOptionModal").modal("show");
}

function AddMoreOptionValue(){

    $("#addOptionValueForm")[0].reset();
    var validator = $("#addOptionValueForm").validate();
    validator.resetForm();
    $("#addOptionValue").modal("show");

}

function UpdateOptions(){
     
        $.ajax({
                url:APP_URL + "/admin/product_options_list",
                data:{'_token':csrfTokenVal},
                dataType:'json',
                type:'post',
                success:function(response){
                   var optionValues = '';
                   if(response.status == true ){
                   if(response.options){
                     $.each(response.options , function(index , value){
                      if(value.name)
                          optionValues = optionValues + '<option value="'+value.id+'">'+value.name+'</option>';
                      });  
                      optionValues = optionValues + '<option value="AddMoreOption">--Add More--</option>';
                      $("#options_drp").empty().append(optionValues);
                   }
                  }
                },error:function(response){
                    console.log("server side error");
               }
         })    
}


function UpdateOptionValues(){
    
       var id = $("#options_drp").val();
       $.ajax({
            url:APP_URL + "/admin/get_option_values",
            data:{'option_id':id,'_token':csrfTokenVal},
            dataType:'json',
            type:'post',
            success:function(response){
                var optionValues = '<option value="">--None--</option>';
                if(response.status == true ){
                   if(response.optionVlue){
                     $.each(response.optionVlue , function(index , value){
                      if(value.value_name)
                          optionValues = optionValues + '<option value="'+value.id+'">'+value.value_name+'</option>';
                      });  
                   }
                }
                 optionValues = optionValues + '<option value="AddMoreOptionValue">--Add More--</option>';
                $("#option_value_drp").empty().append(optionValues);
            },error:function(error){
                console.log("server side error");
            }
             
      });
}

$(function(){
         
        // It has the name attribute "registration"
        $("#addOptionForm").validate({
        // Specify validation rules
        rules: {
            name: {
                required: true,
                maxlength: 100
            }
        },
        //Specify validation error messages
        messages: {
            name: {
               required:"Please enter option name",
               maxlength:"Max 100 character allowed"
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
                    if(response.status == true) {
                        $("#addOptionForm")[0].reset();
                        $("#addOptionModal").modal("hide");
                        $("#success_msg").html(response.message);
                        $('#success_message_modal').modal("show");
                        UpdateOptions();
                        setTimeout(function () {
                            $("#success_msg").html("");
                            $('#success_message_modal').modal("hide");
                        }, 3000);
                    } else{
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
                maxlength: 255
            }
        },
        //Specify validation error messages
        messages: {
            name: {
               required:"Please enter option value name",
               maxlength:"Max 255 character allowed"
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
           
            $("#save_option_value_btn").prop("disabled", true);
            var data = $("#addOptionValueForm").serialize()+'&option_id='+$("#options_drp").val();
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



$(function(){
        
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
               required:"Please enter product name",
               maxlength:"Max 255 character allowed"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
                 block_gui_start();
                 $("#save_tmax_product_btn").prop("disabled", true);
                if($("#ProductForm").valid() && $("#name").val()){
                  $('#ProductForm')[0].submit()
               }else{
                   block_gui_end();
                   alert("Please add product name!");
                   $("#save_tmax_product_btn").prop("disabled", false);
                  $("#info").click();
               }
        }
    });
});


function UpdateVariation(event){
   
     var id  = $(event).attr("data-id");
     var field  = $(event).attr("data-field");
     if(field == "active"){
        var value = $(event).attr("data-status");
     }else{
       var value = $(event).val();
     }
    
     if(id && field){
       $.ajax({
            url:APP_URL + "/admin/update_product_variation",
            data:{'id':id,'field':field,'value':value,'_token':csrfTokenVal},
            dataType:'json',
            type:'post',
            success:function(response){
           
            },error:function(error){
                console.log("server side error");
            }
      });    
     }
}



function UpdateVariationMedia(event){
    
     var variation_id = $(event).attr("data-id");
     var file_id = $(event).attr("id");
     var formData = new FormData();
     formData.append('variation_image', $('#'+file_id)[0].files[0]);
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

function ValidateUploadedImage(event){
     
      var obj_id = $(event).attr("id");
      var error_lable_id = $(event).attr("id")+'_error';
      if($(event).val()){
        var ext = $(event).val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1){
            $('#'+error_lable_id).remove();
            $("#"+obj_id).after('<p id='+error_lable_id+' style="color:#FF0000;"> Invalid Image Format! Image Format Must Be JPG, JPEG, PNG or GIF.</p>');  
 	    $("#"+obj_id).val('');
        }else{
          $('#'+error_lable_id).remove();
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
