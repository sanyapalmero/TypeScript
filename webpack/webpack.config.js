const path = require('path');

module.exports = {
    entry: './src/app.ts',

    mode: "development",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};