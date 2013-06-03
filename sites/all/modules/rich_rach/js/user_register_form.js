jQuery(document).ready(function(){
if(jQuery(".admin-menu-action.admin-menu-account > a >strong").text() == "merav"){

    jQuery("#edit-mail").val("magnets" + Date.now() + "@rich-rach.co.il");
    jQuery("#edit-pass-pass1").val("1234");
    jQuery("#edit-pass-pass2").val("1234");
if(    jQuery("#edit-roles-5").parent("div").find("label").text() == "magnet "){
    jQuery("#edit-roles-5").click();
}
    jQuery(".form-item:not(:first-child), fieldset").hide();
}
});
