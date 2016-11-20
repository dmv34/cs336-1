//All the requires
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + '/app/scripts/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/,  loader: 'style!css?modules!postcss' }
        ]
    },
    //The plugins instructs Webpack to inflate the template with an
    //import of the bundle it creates and to load the result in the
    //output directory, dist/.
    plugins: [
       new HtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html"}),
       new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3001,
        proxy: { '/api/*': 'http://localhost:3000' },
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};
