<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

//function rich_rach_preprocess_links__mylinks(&$vars) {
//  print_r($vars);exit;
//}
/**
 *
 *  Implements hook_process_region().
 * 
 */
function rich_rach_page_alter(&$vars) {
    if(isset( $vars["header"]["header"]["menu"])){
        $vars["footer"]["footer"]["system_main-menu"] = $vars["header"]["header"]["menu"];
        $vars["footer"]["footer"]["system_main-menu"]['#weight'] = -100;
        $vars["footer"]["footer"]['#sorted'] = FALSE;
    }
}
function rich_rach_alpha_process_zone(&$vars) {
    $theme = alpha_get_theme();
    if ($vars['elements']['#zone'] === 'header') {
        $vars['site_name'] = $theme->page['site_name'];
        $vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
        $vars['site_slogan'] = $theme->page['site_slogan'];
        $vars['site_name_hidden'] = $theme->page['site_name_hidden'];
        $vars['site_slogan_hidden'] = $theme->page['site_slogan_hidden'];
        $vars['logo'] = $theme->page['logo'];
        $vars['logo_img'] = $vars['logo'] ? '<img src="' . $vars['logo'] . '" alt="' . check_plain($vars['site_name']) . '" id="logo" />' : '';
        $vars['linked_logo_img'] = $vars['logo'] ? l($vars['logo_img'], '<front>', array('attributes' => array('rel' => 'home', 'title' => check_plain($vars['site_name'])), 'html' => TRUE)) : '';
        
    }
}
function rich_rach_css_alter(&$css){
    if($_GET["q"] === "node/66"){
        unset($css['sites/all/themes/omega/omega/css/omega-visuals.css']);
    }
}
function rich_rach_preprocess_page(){    
    if(drupal_is_front_page()){
        drupal_add_js(                    '(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s);js.id = id;  js.src = "//connect.facebook.net/he_IL/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"))',  array('type' => 'inline', 'scope' => 'header', 'weight' => 5));            
    }
}
