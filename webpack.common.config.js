const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {/*Babel会把ES6, ES7统统转为ES5*/
                test: /\.js|jsx$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {/*编译图片*/
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader'
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-inline-loader',
                    options: {}
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                  'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                  'xml-loader'
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                  loader: 'expose-loader',
                  options: 'jQuery'
                },{
                  loader: 'expose-loader',
                  options: '$'
                }]
            }]
    },
    plugins: [
        /*HtmlWebpackPlugin 每次会自动把js插入到你的模板index.html里面去*/
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        /*优化缓存*/
        new webpack.HashedModuleIdsPlugin(),
    ],
    /*文件路径别名设置*/
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    },
    /*提取公共代码*/
    optimization:{
        splitChunks:{
            name:'vendor'
        }
    },
};

module.exports = commonConfig;