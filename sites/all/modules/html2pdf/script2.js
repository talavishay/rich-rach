var page = new WebPage();
var system = require("system"),
        fs = require('fs'),
        t = system.args[1],
        url = 'http://127.0.1.1/';
 page.viewportSize = { width: 1024, height: 768 };
page.open(url, function (status) {
page.render("XX.png");
//try {
//               fs.write("/dev/stdout", "\n    done ! \n\n", "w");
//    page.render("out/out.png", function (status) {
//
//                    phantom.exit();
//    });
//} catch(e) {
//        console.log(e);

//}
        phantom.exit();

});
