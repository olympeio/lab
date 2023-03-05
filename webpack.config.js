const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const {merge} = require('webpack-merge');

const dist = path.join(__dirname, 'dist');
const npmPackage = require('./package.json');
const runtimeWebPath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-web');

const commonConfig = {
    output: {
        path: dist,
        globalObject: 'this',
        library: npmPackage.name,
        libraryTarget: 'umd'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        alias: {
            olympe: runtimeWebPath
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: "source-map-loader"
            },
            {
                test: /\.js$/,
                exclude: [
                    /\.spec\.mjs$/,
                    /^tests\//
                ],
                enforce: "pre",
                use: "webpack-import-glob-loader"
            },
        ]
    },
    externals: ['olympe', nodeExternals()]
}

const plugins = {
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!main*']
        }),
        new GenerateJsonPlugin(
            'package.json',
            {
                name: npmPackage.name,
                version: npmPackage.version,
                main: 'main-node.js',
                browser: 'main-web.js',
                dependencies: npmPackage.dependencies,
                dcInitConfig: 'import/dcInitConfig.json'
            }
        ),
        new Copy({
            patterns: [
                {from: '.dc-init', to: 'import', globOptions: {ignore: ['**/id_rsa']}}
            ]
        }),
    ]
};

const node = {
    name: 'node',
    target: 'node',
    entry: './src/main-node.js',
    output: { filename: 'main-node.js' },
    externals: ['os']
};

const web = {
    name: 'web',
    entry: './src/main-web.js',
    output: { filename: 'main-web.js' },
};


module.exports = [merge(commonConfig, node, plugins), merge(commonConfig, web)];
