<?php
/**
 * @file
 * magnets.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function magnets_user_default_permissions() {
  $permissions = array();

  // Exported permission: view own unpublished content.
  $permissions['view own unpublished content'] = array(
    'name' => 'view own unpublished content',
    'roles' => array(
      'administrator' => 'administrator',
      'magnet' => 'magnet',
    ),
    'module' => 'node',
  );

  return $permissions;
}
