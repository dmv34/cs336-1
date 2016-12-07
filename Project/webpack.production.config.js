//All the requires
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    postcss: [
        require('autoprefixer')
      ],
    //The plugins instructs Webpack to inflate the template with an
    //import of the bundle it creates and to load the result in the
    //output directory, dist/.
    plugins: [
       new HtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html"}),
       //new webpack.HotModuleReplacementPlugin(),
       new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
};
