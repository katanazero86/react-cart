const path = require('path');

// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
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
                test: /\.(scss)/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options : {sourceMap: true, modules: true} },
                    { loader: 'sass-loader', options : {sourceMap: true} }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: './index.css'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
}