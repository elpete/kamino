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
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}