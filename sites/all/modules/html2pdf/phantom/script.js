var page = require('webpage').create(),
    fs = require('fs'),
    sys = require('system'),
    out = {"err":[]},
    fileName = "out/",    input = "in/";
//     console.log("/dev/stdout", 'xxx'  );    
//   fs.write("/dev/stdout", 'xxx' );    
debugger;
try {
        var args = JSON.parse(sys.args[1]);
        if(args.media === "print"){
            page.paperSize = {
                format : "A4",
                orientation : "portrait",
                margin : {"top":"7cm"}
            };
            input += 'pdf.html';
        } else {
//            page.viewportSize = { width: 400, height: 410 };
            input += 'png.html';
//            fileName += "out.png";
        }
    }catch(e){                  
        out.err.push(e) ;    
}
debugger;

//fs.write("/dev/stdout", );    
//console.log(JSON.encode(page));    
//var args = {};

//args.month = sys.args[2];
//args.year = sys.args[3];
   
//            fs.write("/dev/stdout", sys.args[1] );    


page.onConsoleMessage = function (msg) { console.log(msg); };    
//page.zoomFactor = 2;
//page.viewportSize = { width: sys.args[1], height: sys.args[2] };

page.open(input,function(success){    
    debugger;    
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {        
        page.evaluate(function(inner_args, out) {
            // jQuery is loaded, now manipulate the DOM
            debugger;
           try{
                jQuery("#dayOfWeek").text(inner_args.dayOfWeek);
                jQuery("#type").text(inner_args.type);
                jQuery("#year").text(inner_args.year);
                jQuery("#month").text(inner_args.month);
                jQuery("#day").text(inner_args.day);
                jQuery("#hour").text(inner_args.hour);
                jQuery("#minutes").text(inner_args.minutes);
                jQuery("#address").text(inner_args.address);
                jQuery("#phone").text(inner_args.phone);
                jQuery("#age").text(inner_args.age);
                jQuery("#party").text(inner_args.party);
                if(args.media === "mail"){
                    debugger;
                    jQuery("#frame").css({"margin":"0px","position" : "absolute", "top":"0px","left":"0px"});
                    jQuery("body").css({"padding":"0px", "margin":"0px","width":"400"});
                }
           } catch(e){
             out.err.push(e) ;
           }
        }, args, out);
        debugger;
        try{
            if(args.media === "mail"){
                fileName += 'out.png';
            } else {
                fileName += 'out.pdf';
            }
            page.render(fileName);
        }catch(e){
            out.err.push(e) ;    
        }
        var output_path = '/sites/all/modules/html2pdf/phantom/'+fileName;
        output = { "err":out.err, "page" :  page, "media" : args.media, "fileName" : output_path };
     
        fs.write("/dev/stdout", JSON.stringify(output) );    
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
