const path = require('path');
const esLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/main/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new esLintPlugin()],
}