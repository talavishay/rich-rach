<?php
/**
 * @file
 * magnets.features.inc
 */

/**
 * Implements hook_views_api().
 */
function magnets_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function magnets_image_default_styles() {
  $styles = array();

  // Exported image style: magnets.
  $styles['magnets'] = array(
    'name' => 'magnets',
    'effects' => array(
      14 => array(
        'label' => 'התאמה',
        'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
        'effect callback' => 'image_scale_effect',
        'dimensions callback' => 'image_scale_dimensions',
        'form callback' => 'image_scale_form',
        'summary theme' => 'image_scale_summary',
        'module' => 'image',
        'name' => 'image_scale',
        'data' => array(
          'width' => 110,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function magnets_node_info() {
  $items = array(
    'mag' => array(
      'name' => t('מגנטים'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('שם הילד'),
      'help' => '',
    ),
  );
  return $items;
}
