const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)/,
                use: ["style-loader", {loader: 'css-loader', options: {sourceMap: true}}],
            },
            {
                test: /\.(scss)/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {sourceMap: true, modules: true}},
                    {loader: 'sass-loader', options: {sourceMap: true,}}
                ]
            },

        ]
    },
    devtool: 'source-map',
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // },
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[hash].css'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new CopyWebpackPlugin([
            { from: './public/assets', to: './assets' },
        ]),
    ],
}
