const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const configLookup = {
  [process.env.NODE_ENV]: 'development',
  development: 'development',
  'quality-assurance': 'quality-assurance',
  prod: 'prod',
}[process.env.NODE_ENV];

module.exports = {
  entry: `${process.cwd()}/src/index.js`,
  output: {
    path: `${process.cwd()}/build`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [`${process.cwd()}/src`, 'node_modules'],
    alias: {
      config: path.join(__dirname, 'config', configLookup),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 Chrome versions'],
                  },
                  debug: true,
                  useBuiltIns: 'usage',
                },
              ],
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 65000,
          },
        },
      },
      {
        test: /\.(eot|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
