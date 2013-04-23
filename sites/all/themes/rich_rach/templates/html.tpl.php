<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
<!--[if lt IE 9  ]>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>

  <style type="text/css">
    #main_menu_camp,.block-title {
       filter: none;
    }
  </style>

<link href="/sites/all/themes/rich_rach/css/ie.css" rel="stylesheet"/>
<![endif]-->
<!--[if IE 9  ]>
<link href="/sites/all/themes/rich_rach/css/ie.css" rel="stylesheet"/>
<![endif]-->
</head>
<body<?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>