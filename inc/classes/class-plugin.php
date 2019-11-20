<?php
/**
 * Plugin manifest class.
 *
 * @package codeytek-blocks
 */

namespace CODEYTEK\Blocks\Inc;

use \CODEYTEK\Blocks\Inc\Traits\Singleton;

/**
 * Class Plugin
 */
class Plugin {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// Load plugin classes.
		Blocks::get_instance();

	}

}
