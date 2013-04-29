var page = require('webpage').create(),
    fs = require('fs'),
    sys = require('system');
    
page.paperSize = {
    format : "A4",
    orientation : "portrait",
    margin : {"top":"7cm"}
};
    
//fs.write("/dev/stdout", );    
//console.log(JSON.encode(page));    
//var args = {};
var args = JSON.parse(sys.args[1]);
//args.month = sys.args[2];
//args.year = sys.args[3];
   
//            fs.write("/dev/stdout", sys.args[1] );    


page.onConsoleMessage = function (msg) { console.log(msg); };    
//page.zoomFactor = 2;
//page.viewportSize = { width: sys.args[1], height: sys.args[2] };

page.open("in.html",function(success){    
    
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {        
        page.evaluate(function(inner_args) {
            // jQuery is loaded, now manipulate the DOM
            jQuery("#dayOfWeek").text(inner_args.dayOfWeek);
            jQuery("#type").text(inner_args.type);
            jQuery("#year").text(inner_args.year);
            jQuery("#month").text(inner_args.month);
            jQuery("#day").text(inner_args.day);
            jQuery("#hour").text(inner_args.hour);
            jQuery("#minutes").text(inner_args.minutes);
            jQuery("#address").text(inner_args.address);
            jQuery("#phone").text(inner_args.phone);
            
            
        }, args);
        
        page.render('out.pdf');
//        page.render('out'+Date()+'.pdf');


        //success = {"success" : success , "system" : sys, "page" : page.content};
        success = { "page" : {  "plainText": page.plainText, 
                                "settings" : page.settings,
                                "title"     :page.title,
                                "url"       :page.url
                    }};
//        fs.write("/dev/stdout", JSON.stringify(success) );    
        //  @ html2pdf.module -- line 48..
        //Set the stdout stream to BLOCKING ! this will cause php towait for
        // our json msg...
        //stream_set_blocking($pipes[1], 1);
       

        phantom.exit();    
    });
     
});
//var timer = 5 ;
//window.setInterval(function(){
//    
//    if(timer === 0){
//          phantom.exit();    
//    }
//    timer--;
//}, 1000);


    //page.setContent(f,"http://localhost/imaginary/file1.html");
//    fs.write("/dev/stdout"", '<img src="');
//                page.render('/dev/stdout');
