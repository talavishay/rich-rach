jQuery(document).ready(function(){
var match = /Activity posted on your facebook wall/i;
if(jQuery(".messages").length){
if(jQuery(".messages").text().match(match).length){
    jQuery(".messages").text(jQuery(".messages").text().replace(match, "פרסום התמונה על קיר הפייסבוק שלך הצליח!"));
    jQuery(".messages").text(jQuery(".messages").text().replace(/הודעת סטטוס/i, ""));
}
}

var div = jQuery("#block-block-9");
	jQuery("div.node-mag").before(jQuery(div).prepend(jQuery("h2.node-title")));
    jQuery("[fid] a").each(function(i, val){
        jQuery(val).bind("click", function(e){
            e.preventDefault();
            var fid = jQuery(e.currentTarget).parents("[fid]").attr("fid");
            window.location.href= '/f/'+fid+'/title/'+jQuery("#page-title").text();
            return false;
        });
    });
// jQuery('.colorbox.cboxElement > img').css({
  //"margin": "6% 10% 10%",
//  "max-width": "100px",
  //"min-height": "85px"
    //    });
jQuery(".view-magnets .field-item").css({
    "float": "left",
    "min-height": "120px",
"position":"relative"
});
var about = jQuery(".node[about]").attr("about");

jQuery(' a.post').each(function(i, val){
    jQuery(val).attr("href", jQuery(val).attr("href") + about).css({
   "background": 'url("sites/all/themes/rich_rach/img/magnets-share.png") no-repeat scroll center center transparent',
    'color': 'transparent',
   'font-size': "0px",
   'position': "absolute", "bottom":"10px",
   'font-size': "0px",
	'height':'20px',
   'width': "100%"
}).bind("click", function(e){
	jQuery(e.currentTarget).css("background","url(/misc/throbber.gif) no-repeat scroll bottom center transparent");
});
});

});
