jQuery(document).ready(function() {
var text = 'יש לשנות את שם המחבר <a href="/admin/people/create">למשתמש החדש</a>.הפוסט נמצא במצב לא פורסם על מנת להיות מוגן משאר הגולשים.';
jQuery("#mag-node-form").prepend(jQuery('<div></div>').append(text));
Drupal.settings.rich_rach = {};
// BIRTHDAY MENU -- #block-menu-menu-select
if(typeof(Drupal.settings.views_get_view) !== "undefined"){
jQuery.each(Drupal.settings.views_get_view, function(key, val){    
    jQuery("#block-menu-menu-birthday .block-inner .content").append(jQuery(val).hide());
});
// Insert the taxonomy menu after the (regular) menu
if(typeof(Drupal.settings.views_get_view_parent) !== "undefined"){
    var tax_menu =  jQuery(Drupal.settings.views_get_view_parent);
    jQuery("#block-menu-menu-select .block-inner > .content, aside .view-taxonomy-term", tax_menu).hide();
    jQuery('aside > .region-inner #block-menu-menu-birthday').after(tax_menu);
}
jQuery('#block-menu-menu-select .block-inner > .content a').each(function(i, val){
    jQuery(val).bind("click", function(e) {
        e.preventDefault();
        jQuery(" section#block-menu-menu-birthday > div.block-inner > div.content > ul.menu").hide();
        var current_link_id = jQuery(e.currentTarget).attr("data");
        var  current_id = "#"+ current_link_id;

        jQuery("aside .view-taxonomy-term").hide();
        jQuery('#block-menu-menu-select .block-inner > .content').hide();
        jQuery(current_id).show().parents(".block-views").show();
        
        return false;
    });
});
jQuery(".view-taxonomy-term .view-content").each(function(i, val){
    var menu_entry = jQuery("li", val).first().clone();
    jQuery("a", menu_entry).text("כל המסיבות").attr("href", "#").addClass("all");
    jQuery("ul", val).append(jQuery(menu_entry));
});
// activate the taxonomy menu if requested in the url by the 
if(window.location.hash){
    var reg = new RegExp("#taxonomy=(.*)", "i");
    if(window.location.hash.match(reg)){
        var taxonomy_name = window.location.hash.replace(reg , "$1");
        jQuery("section#block-menu-menu-birthday > div.block-inner > div.content > ul.menu").hide();
        jQuery("."+taxonomy_name).show().parents(".block-views").show();
    }
} 
if(jQuery("ul.menu li.active-trail a").length !== 0){
    Drupal.settings.rich_rach.menu_active_href = jQuery("ul.menu li.active-trail a").first().attr("href");
    jQuery(".view-taxonomy-term li a").each(function(i ,val){
        var re = new RegExp(Drupal.settings.rich_rach.menu_active_href, "i");
        if(jQuery(val).attr("href").match(re)){  
            jQuery(val).addClass("active").parents("li").addClass("active-trail") ;
        };
    });
}
jQuery('#block-menu-menu-select h2').append(jQuery('<span id="block-menu-menu-select_toggle"></span>')).bind("click", function(e) {
    if (jQuery('#block-menu-menu-select .content:visible').length >= 1) {
        jQuery(".sidebar-first .view-taxonomy-term").parents(".block-views").hide();
    }
    jQuery('#block-menu-menu-select .content').toggle();
});
jQuery(".view-taxonomy-term li a.all").live("click", function(e){
    e.preventDefault();
    jQuery("aside .view-taxonomy-term").hide();
    jQuery(" section#block-menu-menu-birthday > div.block-inner > div.content > ul.menu").show();    
});
}
// ####  BIRTHDAY MENU -- END

// adding video, print , F links inside the images container...
// field-name-field-image-type 
//
// youtube
Drupal.settings.rich_rach.link = jQuery('<div class="media_bar"><a class="video" href="#">סרטון</a></div>').append(jQuery('.node > .content > iframe '));



//jQuery('html:not(.overlay-open) .field-type-youtube').bind("click", function() {
//    jQuery('.field-name-field-youtube').toggle();
//});

jQuery(".media_bar .print").live("click", function(e) {
jQuery("#block-views-829a587528abfc530ad5f75cdeaaf250").hide();
    jQuery("#block-webform-client-block-65, #block-system-main .node .field-name-body ").toggle("slow");
    
});
jQuery(".media_bar .video").live("click", function(e) {
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250, .field-name-field-youtube').show();
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-content').hide();
    if(jQuery("#block-views-829a587528abfc530ad5f75cdeaaf250 #close").length === 0 ){
        jQuery(".view-nid-field-image-slideshow").prepend(jQuery('<div class="view-header"><span id="close"></span></div>'));
    }
    if( jQuery('.field-name-field-youtube:visible').length === 0){
        jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-nid-field-image-slideshow').append(jQuery(Drupal.settings.rich_rach.youtube));
            jQuery('.field-name-field-youtube').show();
    }
});

jQuery("#block-views-829a587528abfc530ad5f75cdeaaf250 .media_bar .video").live("click", function(e) {
    e.preventDefault();
    jQuery('.field-name-field-youtube').show();
    if(jQuery("#block-views-829a587528abfc530ad5f75cdeaaf250 #close").length === 0 ){
        jQuery(".view-nid-field-image-slideshow").prepend(jQuery('<div class="view-header"><span class="close"></span></div>'));
    }
    if( jQuery('.field-name-field-youtube:visible').length === 0){
        jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-nid-field-image-slideshow').append(jQuery(Drupal.settings.rich_rach.youtube));
            jQuery('.field-name-field-youtube').show();
    }
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-content').hide();
    return false;
});
// IMG slideshow
jQuery('#img_toggle').live("click", function(e){
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250').show();
    jQuery('.field-name-field-youtube').hide();
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-content').show();
});
jQuery('span#close').live("click", function(e){
    jQuery("#region-content .block-views").hide();
    if( jQuery('.field-name-field-youtube').length === 1){
        Drupal.settings.rich_rach.youtube = jQuery('.field-name-field-youtube');
        jQuery('.field-name-field-youtube').remove();
    }
});
jQuery('div.field-name-field-image-type div.field-items').after(Drupal.settings.rich_rach.link).before(jQuery('<div id="img_toggle"></div>'));

// print 

// add close botton the webform block overlay
jQuery("form#webform-client-form-65").prepend(jQuery('<div class="view-header"><span class="close"></span></div>').bind("click", function(e){
    jQuery(" #block-webform-client-block-65").hide();
}));

if(jQuery("body.front").length === 0){
    jQuery(".view-recomondations.view-display-id-block_recommend .view-content .views-row").append(jQuery('<div class="more">המשך >></div>'));
    jQuery(".view-recomondations.view-display-id-block_recommend .view-content .views-row").not(':last-child').after("<hr/>");
    jQuery(".view-recomondations.view-display-id-block_recommend .view-content .views-row .more").bind("click", function(e){
        var views_row = jQuery(e.currentTarget).parents(".views-row");
        jQuery(".teaser", views_row).toggle();
        jQuery(".full", views_row).toggle();
        if(jQuery(".full:visible", views_row).length === 1){
            jQuery(e.currentTarget).text("חזור <<");
        } else {
            jQuery(e.currentTarget).text("המשך >>");
        }
    });
}
if( typeof(Drupal.settings.taxonomy_menu) !== "undefined" ){
	jQuery("#block-block-6").after(jQuery(Drupal.settings.taxonomy_menu));  
        jQuery('#toggle').bind("click", function(e){
        jQuery("#taxonomy-select-blog .toggle").toggle();
        });
}

jQuery('.node-type-blog select#edit-tid  option:first-child').text(jQuery('#edit-tid-wrapper label').css("display","none").text());
    // get current node image slideshow 
    if(typeof(Drupal.settings.nid) !== "undefined" ){
        // ####    Drupal ajax method
        jQuery('<div id="get_slides" style="display:none;"></div>').addClass('ajax-processed').each(function (i,val) {
                        var element_settings = {};
                        var base = jQuery(this).attr('id');
                        element_settings.url = '/get_slides/'+Drupal.settings.nid; //jQuery(this).attr('id');
                        element_settings.event = 'click';
                        element_settings.progress = { 'type': 'throbber' };
                        element_settings.submit = { "js": true, "nid": Drupal.settings.nid };      // ::::: Here we add a query parameter.
                        var ajax = new Drupal.ajax(base, this, element_settings);
        }).click();
    }
    if(typeof(Drupal.settings.views_get_view) !== "undefined" && Drupal.settings.nid !== "4"){
        jQuery(".media_bar").prepend(jQuery('<a class="print" href="#">הדפיסו הזמנות</a>'));
    }
});

Drupal.ajax.prototype.commands.after_slides_refresh = function (ajax, response, status) {
    if(jQuery('.view-nid-field-image-slideshow').children().length !== 0 ){
            jQuery('#img_toggle').css("display","block");
    }
    jQuery('#block-views-829a587528abfc530ad5f75cdeaaf250 .view-nid-field-image-slideshow ').append(jQuery(".field-name-field-youtube")).after(jQuery(Drupal.settings.rich_rach.link).clone());
};

