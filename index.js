/*
 * index.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Entry-point for the livre client.
 *
 */

'use strict';

module.exports = function (options) {

  // Configuration
  options.client = require('client.js');
  require('./ui.js')(options);

};

