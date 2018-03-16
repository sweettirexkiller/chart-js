let webpack = require('webpack');
let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'dist',
];

// the clean options to use
let cleanOptions = {
    root:     __dirname,
    verbose:  true,
    dry:      false
};

module.exports = {
    entry: {
        main: [
            "./src/main.js",
            // "./src/main.css"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test: /\.css$/, use: [ 'style-loader','css-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        // new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "[name].css",
            // chunkFilename: "[id].css"
        // })
    ]
};