const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'application_a',
      library: { type: 'var', name: 'application_a' },
      filename: 'remoteEntry.js',
      exposes: {
        './SayHelloFromA': './src/app',
      },
      remotes: {
        // 'application_b': 'application_b@http://localhost:3002/remoteEntry.js',
        'application_b': 'application_b',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
