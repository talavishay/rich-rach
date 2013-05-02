jQuery(document).ready(function(){
    var submit = jQuery("#webform-client-form-65 input#edit-submit");
jQuery("#webform-client-form-65 input#edit-submit").unbind().live("click",function(e){
    e.preventDefault();

    Drupal.settings.loading = window.setInterval(function(){
            var sub = jQuery(submit).val();
            jQuery("#webform-client-form-65 input#edit-submit").val(sub+" *");
        
    }, 800);
    var data = {    "json":{
                        "type"      : jQuery("#block-system-main .node .node-title").text(),
                        "hour"      : jQuery("#edit-submitted-time-hour option:selected").val(),
                        "minutes"   : jQuery("#edit-submitted-time-minute option:selected").val(),
                        "dayOfWeek" : jQuery("#edit-submitted-day option:selected").text(),
                        "day"       : jQuery("#edit-submitted-date-day option:selected ").val(),
                        "month"     : jQuery("#edit-submitted-date-month option:selected").val(),
                        "year"      : jQuery("#edit-submitted-date-year option:selected").val(),
                        "address"   : jQuery("#edit-submitted-adress ").val(),
                        "phone"     : jQuery("#edit-submitted-number").val(),
                        "media"     : jQuery(".webform-component-radios input:checked").val()
                    }
    };
    if(parseInt(data.json.minutes) < 5 ){
        data.json.minutes = "00";
    } else {
        if(parseInt(data.json.minutes) > 5  && parseInt(data.json.minutes) <=10 ){
            data.json.minutes = "10";
        }
    }
    jQuery.ajax({
        "url"   : "/html2pdf/data/--remote-debugger-port=9000",
        "type"  : "POST",
        "data"  : data,
        "success": function(data){
            clearInterval(Drupal.settings.loading);
            try{
                jQuery(".phantom").remove();
                var phantom_page = jQuery.parseJSON(data);
                console.log(phantom_page );
                if(phantom_page.media === "print"){
//                    window.open(phantom_page.url, '_blank');
                    
//                    jQuery("#webform-client-form-65").append(jQuery('<a target="blank" href="'+phantom_page.url+'" class="fileDownloadSimpleRichExperience">הורד עכשיו!</a>').bind("click",  function (e) {
//                    var that = e.currentTarget;
//                    (function($,that){
//                        console.log(that);
//                        url = $(that).attr('href');
//                        jQuery.fileDownload(url, {                            
//                            preparingMessageHtml: "We are preparing your report, please wait...",
//                            failMessageHtml: "There was a problem generating your report, please try again.",
//                            successCallback: function (url) {
//
//                                alert('You just got a file download dialog or ribbon for this URL :' + url);
//                            },
//                            failCallback: function (html, url) {
//
//                                alert('Your file download just failed for this URL:' + url + '\r\n' +
//                                        'Here was the resulting error HTML: \r\n' + html
//                                        );
//                            }
//                        });
//                    }(jQuery, that));
//                        return false; //this is critical to stop the click event which will trigger a normal file download!
//                    }).click());
                    setTimeout(function(){
                       
                        output_window.print();
                        
                    },5000);
                    
                } else {
//                    var url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
//                    jQuery("#webform-component-adress").prepend(jQuery('<img class="phantom" style="width:60%;float:left" src="'+phantom_page.fileName+'?'+Date("milliseconds")+'"/>'));
                    jQuery("#block-webform-client-block-65").append(jQuery('<img class="phantom"  src="'+phantom_page.fileName+'?'+Date("milliseconds")+'"/>'));
//                    var img = jQuery("#phantom");
                }
                    output_window = window.open(phantom_page.fileName+'?'+Date("milliseconds"));
//                    console.log(output_window );
                   
            }catch(e){
                console.log(e);
                
            }

        }
    });
    return false;
});

});
