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

		// Block Editor Script.
		wp_register_script(
			'codeytek-block-courses-banner-editor-js',
			CODEYTEK_BLOCKS_BUILD_URL . '/js/courses-banner.js',
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/js/courses-banner.js' )
		);

		// Courses Content

		wp_register_script(
			'mba-block-newsletter-primary-news-editor-js',
			CODEYTEK_BLOCKS_BUILD_URL . '/js/news.js',
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/js/news.js' ),
			true
		);

		wp_localize_script(
			'codeytek-block-courses-banner-editor-js',
			'codeytekJsData',
			[ 'site_url' => get_home_url() ]
		);

		register_block_type(
			'codeytek-blocks/courses-banner',
			[
				'editor_script' => 'codeytek-block-courses-banner-editor-js',
			]
		);

		// Register 'Primary News'.
		register_block_type(
			'codeytek-blocks/newsletter-primary-news',
			[
				'editor_script'   => 'mba-block-newsletter-primary-news-editor-js',
				'render_callback' => [ $this, 'newsletter_primary_news_callback' ],
				'attributes'      => [
					'postId'               => [
						'type'    => 'string',
						'default' => '',
					],
					'isFeaturedImgChecked' => [
						'type'    => 'boolean',
						'default' => 'false',
					],
				],
			]
		);
	}

	/**
	 * Render Callback from Primary news block.
	 *
	 * @param array $attributes Attributes.
	 *
	 * @return string
	 */
	public function newsletter_primary_news_callback( $attributes ) {

		return mba_blocks_render_template( 'block-templates/newsletter/primary-news', [ 'attributes' => $attributes ] );

	}

}
