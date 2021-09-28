import {dirname, join, resolve} from 'path'
import {fileURLToPath} from 'url';
import { exec } from 'child_process';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: './src/index.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        path: resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        static: {
            directory: join(__dirname, 'dist'),
            watch: true,
        },
        client: {
            overlay: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: /index\.scss/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
    },
};