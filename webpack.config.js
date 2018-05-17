const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "bundle": "./src/quipu.js",
        "bundle.min": "./src/quipu.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
        // new webpack.optimize.UglifyJsPlugin({ // for minify
        //     include: /\.min\.js$/,
        //     minimize: true
        // })
    ]
};