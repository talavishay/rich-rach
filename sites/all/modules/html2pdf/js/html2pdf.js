jQuery(document).ready(function(){
jQuery("#webform-client-form-65 input#edit-submit").unbind().live("click",function(e){
    e.preventDefault();

    var data = {    "container":{
                        "type"      : jQuery("#block-menu-menu-birthday .active-trail a").text(),
                        "hour"      : jQuery("#edit-submitted-time-hour option:selected").val(),
                        "minutes"   : jQuery("#edit-submitted-time-minute option:selected").val(),
                        "dayOfWeek" : jQuery("#edit-submitted-day option:selected").text(),
                        "day"       : jQuery("#edit-submitted-date-day option:selected ").val(),
                        "month"     : jQuery("#edit-submitted-date-month option:selected").val(),
                        "year"      : jQuery("#edit-submitted-date-year option:selected").val(),
                        "address"   : jQuery("#edit-submitted-adress ").val(),
                        "phone"     : jQuery("#edit-submitted-number").val()   
                    }
    };
    jQuery.ajax({
        "url"   : "/html2pdf",
        "type"  : "POST",
        "data"  : data,
        "success": function(data){
//                console.log(data);
                window.open('/sites/all/modules/html2pdf/out.pdf', '_blank');
        }
    });
    return false;});
    
});