const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js'], // Points to the app controller that communicates w/ everything else
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // Regular expression used to test for files ending in .js
                exclude: /node_modules/, // Excludes all node module .js files
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};