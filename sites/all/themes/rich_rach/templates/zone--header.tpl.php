<?php 
/**
 * @file
 * rich_rach's theme implementation to display the zone--header.
 */
?>
<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>  
  <div<?php print $content_attributes; ?>>
    
      <?php if ($linked_logo_img || $site_name || $site_slogan): ?>
    <div class="branding-data clearfix">
      <?php if ($linked_logo_img): ?>
      <div class="logo-img">
        <?php print $linked_logo_img; ?>
      </div>
      <?php endif; ?>
      <?php if ($site_name || $site_slogan): ?>
      <?php $class = $site_name_hidden && $site_slogan_hidden ? ' element-invisible' : ''; ?>
      <hgroup class="site-name-slogan<?php print $class; ?>">        
      <!--  <?php if ($site_name): ?>
        <?php $class = $site_name_hidden ? ' element-invisible' : ''; ?>
        <?php if ($is_front): ?>        
        <h1 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h1>
        <?php else: ?>
        <h2 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h2>
        <?php endif; ?>
        <?php endif; ?>
        <?php if ($site_slogan): ?>
        <?php $class = $site_slogan_hidden ? ' element-invisible' : ''; ?>-->x
        <h6 class="site-slogan<?php print $class; ?>"><?php print $site_slogan; ?></h6>
        <?php endif; ?>
        <a id="facebook_header" href="http://www.facebook.com/pages/%D7%A8%D7%99%D7%A5-%D7%A8%D7%A5-%D7%99%D7%95%D7%9D-%D7%94%D7%95%D7%9C%D7%93%D7%AA-%D7%91%D7%9E%D7%97%D7%A9%D7%91%D7%94-%D7%AA%D7%97%D7%99%D7%9C%D7%94/170494236307563"><img src="/sites/all/themes/rich_rach/img/f.png"></a>
      </hgroup>
      <?php endif; ?>
    </div>
    <?php endif; ?>
      
      
      <?php print $content; ?>
  </div>
<?php if ($wrapper): ?></div><?php endif; ?>