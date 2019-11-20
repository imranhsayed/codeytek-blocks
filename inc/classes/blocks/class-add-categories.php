<?php
/**
 * Add Custom Category
 *
 * @package codeytek-blocks
 */

namespace CODEYTEK\Blocks\Inc\Blocks;

use \CODEYTEK\Blocks\Inc\Traits\Singleton;

/**
 * Class Blocks
 */
class Add_Categories {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		$this->setup_hooks();

	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {

		/**
		 * Actions
		 */
		add_action( 'block_categories', [ $this, 'add_block_category' ], 10, 2 );

	}

	/**
	 * Add Block Category.
	 *
	 * @param array   $categories Block categories.
	 * @param WP_Post $post Post.
	 *
	 * @return array Array of block categories.
	 */
	public function add_block_category( $categories, $post ) {

		$post_types = [ 'post', 'page' ];

		if ( ( ! in_array( $post->post_type, $post_types, true ) ) ) {
			return $categories;
		}

		// For $post_types add 'Mba Latest Issues' category.
		$categories = array_merge(
			$categories,
			[
				[
					'slug'  => 'codeytek-custom-blocks',
					'title' => __( 'Codeytek Blocks', 'codeytek-blocks' ),
				],
			]
		);

		return $categories;

	}

}
