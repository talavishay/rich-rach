<div<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  
  <div<?php print $content_attributes; ?>>
            
              <?php
                // We hide the comments and links now so that we can render them later.
                hide($content['comments']);
                hide($content['links']);
                ?>
                <h2 class="node-title" id="node-title"><?php print $title; ?></h1>
                <?php
                print render($content);
              ?>
                <?php if ($display_submitted): ?>
                    <div class="submitted">נכתב ע"י <?php print $name; ?>  <?php print $date; ?></div>
                <?php endif; ?>  
</div>
  
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <div class="links node-links clearfix"><?php print render($content['links']); ?></div>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</div>