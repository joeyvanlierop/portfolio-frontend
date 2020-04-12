const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * Entry
     *
     * The first place Webpack looks to start building the bundle.
     */
    entry: './src/js/index.js',

    /**
     * Output
     *
     * Where Webpack outputs the assets and bundles.
     */
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },

    /**
     * Plugins
     *
     * Customize the Webpack build process.
     */
    plugins: [
        /**
         * HtmlWebpackPlugin
         *
         * Generates an HTML file from a template.
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html', // Template file
            filename: 'index.html', // Output file
        }),
    ],

    /**
     * Module
     *
     * Determine how modules within the project are treated.
     */
    module: {
        rules: [
            /**
             * JavaScript
             *
             * Use Babel to transpile JavaScript files.
             */
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            /**
             * Styles
             *
             * Inject CSS into the head with source maps.
             */
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    /**
     * Webpack Dev Server
     * 
     * Updates the webpage in realtime
     */
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
    }
}
