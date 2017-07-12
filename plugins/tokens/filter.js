'use strict';

const { Transform } = require('stream');
const tokenRegex = /[^a-zA-Z0-9_-][a-zA-Z0-9_-]{43}[^a-zA-Z0-9_-]/g;

module.exports = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().replace(tokenRegex, '(API Token Suppressed)'));
    }
});
