const path = require('path')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { NODE_ENV } = process.env

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        disable: NODE_ENV === 'development',
    }),
    new HtmlwebpackPlugin({
        title: 'ColorPicker',
        filename: 'index.html',
        template: 'docs/index.html',
        inject: true,
        hash: true,
        path: NODE_ENV === 'development' ? './assets' : './',
    }),
]

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.BannerPlugin({
            banner: `Last update: ${new Date().toString()}`,
        })
    )
}

const common = {
    entry: path.resolve(__dirname, 'docs/index.js'),
    performance: { hints: false },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, ''),
        publicPath: '/',
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: './',
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader?babelrc'],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: { lessOptions: { javascriptEnabled: true } },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
                use: [
                    {
                        loader:
                            'url-loader?limit=1&hash=sha512&digest=hex&size=16&name=resources/[hash].[ext]',
                    },
                ],
            },
        ],
    },
}

module.exports = () => {
    if (NODE_ENV === 'development') {
        return Object.assign({}, common, {
            entry: [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://127.0.0.1:3100',
                'webpack/hot/only-dev-server',
                path.resolve(__dirname, 'docs/index'),
            ],
            devtool: 'source-map',
        })
    }

    return Object.assign({}, common, {
        entry: [path.resolve(__dirname, 'docs/index')],
        optimization: { minimizer: [new UglifyJsPlugin()] },
    })
}
