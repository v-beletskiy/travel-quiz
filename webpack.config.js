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
                SERVER_ORIGIN: 'https://travel-quiz.herokuapp.com',
                GOOGLE_AUTH_CLIENT_ID: '672296829298-afht3nto06agle3jbheb29j2g9gl3kvd.apps.googleusercontent.com',
                FACEBOOK_AUTH_APP_ID: '360415558039523',
                FACEBOOK_API_VERSION: 'v4.0',
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