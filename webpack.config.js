var webpack = require("webpack"),
    debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname + "/src/js",
    entry: "./index",
    output: {
        path: __dirname + "/app/js",
        filename: "bundle.js",
        publicPath: __dirname
    },
    devtool: debug ? "inline-sourcemap" : null,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
}