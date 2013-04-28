var page = require('webpage').create(),
    fs = require('fs'),
    sys = require('system'),
    width = sys.args[1], 
    height = sys.args[2];

page.onConsoleMessage = function (msg) { console.log(msg); };    
//page.zoomFactor = 2;
//page.viewportSize = { width: sys.args[1], height: sys.args[2] };

page.open("in.html",function(success){    
    
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {        
        page.evaluate(function(width, height) {
            // jQuery is loaded, now manipulate the DOM
            $("h1").text(Date()).css({  "font-size" : "1em",
                                        "width": width ,
                                        "height" : height }
                                    ).after(jQuery("<h2>W = "+width+"</h2>"));
        }, width, height);
        page.paperSize = {
            format: "A4",
            orientation: "portrait",
            margin: {top:"5.7cm", bottom:"1cm"}            
          };
        page.render('out.pdf');


        //success = {"success" : success , "system" : sys, "page" : page.content};
        success = { "page" : {  "plainText": page.plainText, 
                                "settings" : page.settings,
                                "title"     :page.title,
                                "url"       :page.url
                    }};
        fs.write("/dev/stdout", JSON.stringify(success) );    
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
