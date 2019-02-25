const path = require('path');
const webpack = require('webpack');
const memoryfs = require('memory-fs');

const SlateLocalesPlugin = require('../../');

// eslint-disable-next-line
const testCompiler = function(fixture, options = {}) {
  const compiler = webpack({
    context: path.resolve(__dirname, '../', fixture),
    entry: `./index.js`,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist/assets'),
    },
    plugins: [
      new SlateLocalesPlugin({
        from: path.resolve(__dirname, '../', fixture, 'sections'),
        to: path.resolve(__dirname, '../dist/sections'),
        genericTemplateName: 'template.liquid',
      }),
    ],
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err);

      resolve(stats);
    });
  });
};

module.exports = testCompiler;
