const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const dist = path.join(__dirname, 'dist');
const npmPackage = require('./package.json');
const runtimePath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');

module.exports = {
    entry: {
        web: './src/main-web.js',
        node: './src/main-node.js'
    },
    output: {
        filename: 'main-[name].js',
        path: dist,
        globalObject: 'this',
        library: npmPackage.name,
        libraryTarget: 'umd'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', 'jsx', '.tsx', '.ts'],
        alias: {
            olympe: runtimePath
        }
    },
    module: {
        rules: [
            {test: /\.(tsx?)$/, use: 'ts-loader', exclude: /node_modules/},
            {test: /\.(jsx)$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ["@babel/env", "@babel/react"] }},
            {test: /\.js|ts$/, enforce: 'pre', use: 'source-map-loader'},
            {test: /\.js|ts$/, enforce: 'pre', use: 'webpack-import-glob-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    externals: ['olympe', nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new GenerateJsonPlugin(
            'package.json',
            {
                name: npmPackage.name,
                version: npmPackage.version,
                files: npmPackage.files,
                main: 'main-node.js',
                browser: 'main-web.js',
                dependencies: npmPackage.dependencies,
                dcInitConfig: 'import/dcInitConfig.json',
                homepage: 'https://github.com/olympeio/lab',
            }
        ),
        new Copy({
            patterns: [
                {from: '.dc-init', to: 'import', globOptions: {ignore: ['**/id_rsa']}},
                {from: 'README.md', to: 'README.md'}
            ]
        }),
    ],
};
