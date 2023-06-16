const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {IgnorePlugin} = require('webpack');
const Copy = require('copy-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const {merge} = require('webpack-merge');
const runtimeNodePath = path.resolve(__dirname, 'node_modules/@olympeio/runtime-node');
const olympeioPath = path.resolve(__dirname, 'node_modules/@olympeio');
const olympeioExtensionsPath = path.resolve(__dirname, 'node_modules/@olympeio-extensions');


const dist = path.join(__dirname, 'dist');
const npmPackage = require('./package.json');
const drawPath = path.resolve(__dirname, 'node_modules/@olympeio/draw');

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
            olympe: drawPath
        }
    },
    module: {
        rules: [
            {test: /\.js$/, enforce: 'pre', use: 'source-map-loader'},
            {test: /\.js$/, enforce: 'pre', use: 'webpack-import-glob-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Copy({
            patterns: [
                {from: drawPath + '/version.json', to: 'version.json'}
            ]
        }),
        new IgnorePlugin({resourceRegExp: /^(mssql*|mariasql|.oracle|oracledb|mysql|mysql2|mssql.|tedious|sqlite3|better-sqlite3|@vscode\/sqlite3|pg-query-stream|pg-native|node-pre-gyp)$/}),
    ],
    ignoreWarnings: [{message: /Empty results for "import '\.\/bricks\/\*\*\/\*\.js'"/}]
};

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

const server = {
    devServer: {
        port: 8888,
        client: {
            overlay: {
                warnings: false
            }
        },
        static: {
            directory: path.join(__dirname, 'dist/server')
        },
        devMiddleware: {
            writeToDisk: true
        }
    }
};

const draw = {
    name: 'draw',
    output: {path: path.join(__dirname, 'dist/draw'), globalObject: 'this'},
    entry: './src/main-web.js',
    resolve: {
        alias: {olympe: drawPath}
    },
    plugins: [
        new Copy({
            patterns: [
                {from: drawPath + '/index.html', to: 'index.html'},
                {from: drawPath + '/images', to: 'images'},
                {from: drawPath + '/fonts', to: 'fonts'},
                {from: drawPath + '/css', to: 'css'},
                {from: drawPath + '/doc', to: 'doc'},
                {from: 'res'},
                {from: drawPath + '/maintenance', to: 'maintenance'},
            ]
        })
    ]
};

const node = {
    name: 'node',
    target: 'node',
    entry: './src/main-node.js',
    output: {filename: 'main-node.js'},
    externals: ['os']
};

const nodeAI = {
    name: 'nodeai',
    target: 'node',
    entry: './src/main-node.js',
    output: {path: path.join(__dirname, 'dist/node'), globalObject: 'this', filename: 'main.js'},
    plugins: [
        new Copy({
            patterns: [{
                from: path.resolve(__dirname, 'res/oConfigNode-local.json'), to: 'oConfig.json'
            }
            ]
        })
    ],
    node: {
        __dirname: false,
    },

    externals: ['os'],
    resolve: {
        alias: {
            olympe: runtimeNodePath,
            '@olympeio': olympeioPath,
            '@olympeio-extensions': olympeioExtensionsPath
        }
    },

};

module.exports = [
    merge(commonConfig, node, plugins),
    merge(commonConfig, server, draw),
    merge(commonConfig, nodeAI, plugins)];
