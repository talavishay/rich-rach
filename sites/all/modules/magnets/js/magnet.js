jQuery(document).ready(function(){
var div = '<div id="magnet_notice" style="margin-top: 20px;min-height: 130px;">הורים יקרים,   לפניכם תמונות שצולמו במהלך מסיבה של חברכם/חברתכם</div>';
	jQuery("div.node-mag").before(jQuery(div).prepend(jQuery("h2.node-title")));
    jQuery("[fid] a").each(function(i, val){
        jQuery(val).bind("click", function(e){
            e.preventDefault();
            var fid = jQuery(e.currentTarget).parents("[fid]").attr("fid");
            window.location.href= '/f/'+fid+'/title/'+jQuery("#page-title").text();
            return false;
        });
    });
 jQuery('.colorbox.cboxElement > img').css({
  "margin": "6% 10% 10%",
//  "max-width": "100px",
  //"min-height": "85px"
        });
jQuery(".view-magnets .field-item").css({
    "float": "left",
    "min-height": "115px"
});
var about = jQuery(".node[about]").attr("about");

jQuery(' a.post').each(function(i, val){
    jQuery(val).attr("href", jQuery(val).attr("href") + about).css({
   "background": 'url("sites/all/themes/rich_rach/img/magnets-share.png") no-repeat scroll center center transparent',
    'color': 'transparent',
   'font-size': "0px"
});
});

});
