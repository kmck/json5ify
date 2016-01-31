'use strict';

var fs = require('fs');
var expandTilde = require('expand-tilde');
var JSON5 = require('json5');

var json5ify = {};

json5ify.require = function(file, options) {
    return JSON5.parse(fs.readFileSync(expandTilde(file), options).toString());
};

for (var key in JSON5) {
    json5ify[key] = JSON5[key];
}

module.exports = json5ify;
