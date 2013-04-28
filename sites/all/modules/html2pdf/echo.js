var  fs = require('fs');
var t = 10,
interval = setInterval(function(){
        if ( t > 0 ) {
             try {
        
        fs.write("/dev/stdout", t--, "w");
        fs.write("/dev/stdout", "\n", "w");
    } catch(e) {
        console.log(e);
    }

        } else {
            console.log("BLAST OFF!");
            phantom.exit();
        }
    }, 1000);

