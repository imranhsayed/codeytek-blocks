<?php
/**
 * Register Courses gutenberg blocks
 *
 * @package codeytek-blocks
 */

namespace CODEYTEK\Blocks\Inc\Blocks;

use CODEYTEK\Blocks\Inc\Traits\Singleton;

/**
 * Class Courses
 */
class Courses {

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
		add_action( 'init', [ $this, 'register_block' ] );

	}

	/**
	 * Register block and styles
	 */
	public function register_block() {

		// Block front end and editor styles.
		wp_register_style(
			'codeytek-block-courses-banner-styles',
			CODEYTEK_BLOCKS_BUILD_URL . '/css/courses-banner.css',
			[ 'wp-edit-blocks' ],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/css/courses-banner.css' )
		);

		// Block Editor Script.
		wp_register_script(
			'codeytek-block-courses-banner-editor-js',
			CODEYTEK_BLOCKS_BUILD_URL . '/js/courses-banner.js',
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/js/courses-banner.js' )
		);

		wp_localize_script(
			'codeytek-block-courses-banner-editor-js',
			'mbaJsData',
			[ 'site_url' => get_home_url() ]
		);

		register_block_type(
			'codeytek-blocks/courses-banner',
			[
				'style'         => 'codeytek-block-courses-banner-styles',
				'editor_style'  => 'codeytek-block-courses-banner-styles',
				'editor_script' => 'codeytek-block-courses-banner-editor-js',
			]
		);
	}

}
