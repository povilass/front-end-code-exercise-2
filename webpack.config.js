const path = require('path');
const Merge = require('webpack-merge');
//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//configs
const StylesConfig = require('./webpack/style.config');


const prepareMainConfig = (env, argv) => {
    const isProduction = argv && argv.mode === 'production';
    return {
        entry: {
            'index': ['./index.tsx'],
        },
        output: {
            publicPath: "/",
            path: path.join(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
            chunkFilename: isProduction ? '[name]/[name].[contenthash].js' : '[name]/[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_module/
                },
            ]
        },
        externals: [],
        optimization: {
            namedModules: true,
            namedChunks: true,
            concatenateModules: false,
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                        minSize: 0,
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                },
            },
        },
        plugins: [
            new CleanWebpackPlugin('./dist'),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.html'),
                filename: path.join(__dirname, 'dist', 'index.html')
            }),

        ].filter(plugin => !!plugin),
        devtool: isProduction ? false : 'inline-source-map'
    }
};

module.exports = (env, argv) => {
    return Merge.strategy({plugins: 'append',})(
        prepareMainConfig(env, argv),
        StylesConfig
    );
};

