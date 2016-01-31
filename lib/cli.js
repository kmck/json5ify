#!/usr/bin/env node

'use strict';

var stdin = process.stdin;
var stdout = process.stdout;
var argv = require('minimist')(process.argv.slice(2));

var json5ify = require('./json5ify');

function toJSON(obj, space) {
    if (space === true) {
        space = 2;
    }
    if (typeof obj === 'string') {
        obj = json5ify.parse(obj);
    }
    return JSON.stringify(obj, null, space);
}

function writeJSON(inputString) {
    try {
        stdout.write(toJSON(inputString, argv.space));
    } catch (e) {
        stdout.write(inputString);
    }
    stdout.write('\n');
}

if (!stdin.isTTY) {
    var chunks = [];
    stdin.on('data', function(chunk) {
        chunks.push(chunk);
    });
    stdin.on('end', function() {
        writeJSON(chunks.join(''));
    });
} else if (argv.path) {
    writeJSON(json5ify.require(argv.path));
} else if (argv.input) {
    writeJSON(json5ify.parse(argv.input));
} else {
    stdout.write('usage: try piping something in or using --input="{ your: \'json\' }"\n');
    process.exit();
}
