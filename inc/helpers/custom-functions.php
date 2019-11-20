<?php
/**
 * Ozy blocks custom functions.
 *
 * @package codeytek-blocks
 */

/**
 * An extension to get_template_part function to allow variables to be passed to the template.
 *
 * @param  string $slug file slug like you use in get_template_part without php extension.
 * @param  array  $variables pass an array of variables you want to use in array keys.
 *
 * @return void
 */
function mba_blocks_get_template_part( $slug, $variables = array() ) {
	$template         = sprintf( '%s.php', $slug );
	$located_template = locate_template( $template, false, false );

	if ( empty( $located_template ) ) {
		return;
	}
	if ( ! empty( $variables ) && is_array( $variables ) ) {
		extract( $variables, EXTR_SKIP ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract
	}
	include $located_template; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable
}

/**
 * Render template.
 *
 * @param string $slug Template path.
 * @param array  $vars Variables to be used in the template.
 *
 * @return string Template markup.
 */
function mba_blocks_render_template( $slug, $vars = [] ) {

	ob_start();

	mba_blocks_get_template_part( $slug, $vars );

	$markup = ob_get_clean();
	return $markup;
}
