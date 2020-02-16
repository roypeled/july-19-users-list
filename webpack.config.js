var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./client/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
    ],

    devServer: {
        port: 9090,
        proxy: {
            "/": "http://localhost:3000"
        }
    }

};
