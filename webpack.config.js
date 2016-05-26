var webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}