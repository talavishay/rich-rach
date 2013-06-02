<?php
/**
 * @file
 * magnets.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function magnets_user_default_roles() {
  $roles = array();

  // Exported role: magnet.
  $roles['magnet'] = array(
    'name' => 'magnet',
    'weight' => 4,
  );

  return $roles;
}
