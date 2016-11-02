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
    }
};

//This plugin instructs Webpack to inflate the template with an
//import of the bundle it creates and to load the result in the
//output directory, dist/.

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [ ... ],
    output: { ... },
    module: { ... },
    plugins: [
	new HtmlWebpackPlugin({template: __dirname + "/app/index.tmpl.html"})
    ]
};
