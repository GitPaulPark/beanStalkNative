/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 * @Format
 * @type {import("metro-config").MetroConfig}
 */

'use strict';

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const path = require('path');

const config = {
  // watchFolders: [
  //   path.resolve(__dirname, '../../node_modules'),
  //   path.resolve(__dirname, '../assets'),
  //   path.resolve(__dirname, '../normalize-color'),
  //   path.resolve(__dirname, '../polyfills'),
  //   path.resolve(__dirname, '../virtualized-lists'),
  // ],
  resolver: {
    blockList: [/buck-out/, /sdks\/hermes/],
    //   extraNodeModules: {
    //     'react-native': __dirname,
    //   },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
