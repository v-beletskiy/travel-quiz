const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.min.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `./assets/fonts/[name].[ext]`,
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: 'file-loader',
                    },
                ]
            },
        ]
    },
    plugins: [
        new Dotenv({
            path: path.join(__dirname, '.env'),
            safe: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                SERVER_ORIGIN: JSON.stringify(process.env.SERVER_ORIGIN),
                GOOGLE_AUTH_CLIENT_ID: JSON.stringify(process.env.GOOGLE_AUTH_CLIENT_ID),
                FACEBOOK_AUTH_APP_ID: JSON.stringify(process.env.FACEBOOK_AUTH_APP_ID),
                FACEBOOK_API_VERSION: JSON.stringify(process.env.FACEBOOK_API_VERSION),
            }
        }),
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'inline-source-map',
}