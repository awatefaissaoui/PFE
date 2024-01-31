const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
    target: 'node', // Specify the target environment (node.js)
    entry: './index.js', // Entry point for your server
    mode:"production", //
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

    output: {
        filename: 'bundle.js',
        /* eslint-disable-next-line  */
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CompressionPlugin()]
}