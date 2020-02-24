const path = require('path');

const rootPath = path.resolve(__dirname, '../');

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [require('autoprefixer')]
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./assets/css/variables/index.css'],
          include: path.resolve(__dirname, '../')
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  });
  config.module.rules.push({
    test: /\.pug$/,
    use: [{ loader: 'pug-plain-loader' }]
  });

  return config;
};
