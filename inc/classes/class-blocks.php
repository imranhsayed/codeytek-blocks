<?php
/**
 * Register gutenberg blocks
 *
 * @package codeytek-newslinks
 */

namespace CODEYTEK\Blocks\Inc;

use CODEYTEK\Blocks\Inc\Blocks\Add_Categories;
use CODEYTEK\Blocks\Inc\Blocks\Courses;
use \CODEYTEK\Blocks\Inc\Traits\Singleton;




/**
 * Class Blocks
 */
class Blocks {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		Add_Categories::get_instance();
		Courses::get_instance();

	}

}
