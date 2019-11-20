<?php

/**
 * Register Enqueue gutenberg blocks
 *
 * @package codeytek-blocks
 */

namespace CODEYTEK\Blocks\Inc\Blocks;

use CODEYTEK\Blocks\Inc\Traits\Singleton;

/**
 * Class Enqueue
 */
class Enqueue {

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
		add_action( 'wp_enqueue_scripts', [ $this, 'frontend_scripts' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'backend_scripts' ] );

	}

	/**
	 * Register block and styles for frontend
	 */
	public function frontend_scripts() {

		// Block front end and editor styles.
		wp_register_style(
			'codeytek-block-courses-frontend-styles',
			CODEYTEK_BLOCKS_BUILD_URL . '/css/courses.css',
			[],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/css/courses.css' )
		);

		wp_enqueue_style( 'codeytek-block-courses-frontend-styles' );

	}

	/**
	 * Register block and styles for backend
	 */
	public function backend_scripts( $hook ) {

		// Block front end and editor styles.
		wp_register_style(
			'codeytek-block-courses-backend-styles',
			CODEYTEK_BLOCKS_BUILD_URL . '/css/courses.css',
			[],
			filemtime( CODEYTEK_BLOCKS_BUILD_PATH . '/css/courses.css' )
		);

		if ( 'post-new.php' === $hook ) {
			wp_enqueue_style( 'codeytek-block-courses-backend-styles' );
		}

	}

}
