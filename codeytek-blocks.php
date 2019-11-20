<?php
/**
 * Plugin Name: CODEYTEK Blocks
 * Description: Gutenberg blocks for codeytek.org
 * Plugin URI:  https://www.codeytek.org
 * Author:      rtCamp
 * Author URI:  https://rtcamp.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Version:     1.0
 * Text Domain: codeytek-blocks
 *
 * @package codeytek-blocks
 */

define( 'CODEYTEK_BLOCKS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'CODEYTEK_BLOCKS_BUILD_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/assets/build' );
define( 'CODEYTEK_BLOCKS_BUILD_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/assets/build' );

require_once CODEYTEK_BLOCKS_PATH . '/inc/helpers/custom-functions.php'; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingCustomConstant
require_once CODEYTEK_BLOCKS_PATH . '/inc/helpers/autoloader.php'; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingCustomConstant

/**
 * To load plugin manifest class.
 *
 * @return void
 */
function mba_blocks_plugin_loader() {
	\CODEYTEK\Blocks\Inc\Plugin::get_instance();
}

mba_blocks_plugin_loader();
