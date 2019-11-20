/* global process __dirname */
const DEV = 'production' !== process.env.NODE_ENV;

/**
 * Plugins
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const cssnano = require( 'cssnano' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const StyleLintPlugin = require( 'stylelint-webpack-plugin' );
const FriendlyErrorsPlugin = require( 'friendly-errors-webpack-plugin' );
const WebpackAssetsManifest = require( 'webpack-assets-manifest' );
const glob = require( 'glob' );

// JS Directory path.
const JSDir = path.resolve( __dirname, 'js' );
const IMG_DIR = path.resolve( __dirname, 'img' );
const FONTS_DIR = path.resolve( __dirname, 'fonts' );
const BUILD_DIR = path.resolve( __dirname, 'build' );

const entries = glob.sync( 'js/blocks/**/index.js' );

// Add new entries, fileName: filePath
const entry = {};

// Push pages.
if ( entries.length ) {
	entries.forEach( ( file ) => {
		const fileName = file.replace( '/index.js', '' ).replace( 'js/blocks/', '' );

		if ( fileName ) {
			entry[ fileName ] = path.resolve( __dirname, file );
		}
	} );
}

const output = {
	path: BUILD_DIR,
	filename: 'js/[name].js'
};

/**
 * Note: argv.mode will return 'development' or 'production'.
 */
const plugins = ( argv ) => [
	new CleanWebpackPlugin( [ BUILD_DIR ] ),

	new MiniCssExtractPlugin( {
		filename: 'css/[name].css'
	} ),

	new WebpackAssetsManifest(),

	new StyleLintPlugin( {
		'extends': 'stylelint-config-wordpress/scss'
	} ),

	new FriendlyErrorsPlugin( {
		clearConsole: false
	} )
];

const rules = [
	// {
	// 	enforce: 'pre',
	// 	test: /\.(js|jsx)$/,
	// 	exclude: /node_modules/,
	// 	use: 'eslint-loader'
	// },
	{
		test: /\.js$/,
		include: [ JSDir ],
		exclude: /node_modules/,
		use: 'babel-loader'
	},
	{
		test: /\.scss$/,
		exclude: /node_modules/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader',
			'postcss-loader',
			'sass-loader'
		]
	},
	{
		test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
		exclude: [ FONTS_DIR, /node_modules/ ],
		use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: '../',
			},

		}
	},
	{
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		exclude: [ IMG_DIR, /node_modules/ ],
		use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: '../',
			},
		}
	}
];

const optimization = [
	new OptimizeCssAssetsPlugin( {
		cssProcessor: cssnano
	} ),

	new UglifyJsPlugin( {
		cache: false,
		parallel: true,
		sourceMap: false
	} )
];

module.exports = ( env, argv ) => ( {
	entry: entry,
	output: output,
	plugins: plugins( argv ),
	devtool: 'source-map',

	module: {
		'rules': rules
	},

	optimization: {
		minimizer: optimization
	},

	externals: {
		jquery: 'jQuery'
	}
} );
