# json5ify

Pipe in JSON5, get back JSON.

This is useful if you forgot to `JSON.stringify()` the object before you wrote it to a file.

## Installation

    npm install -g json5ify

## Usage

    $ json5ify --input="{ key: 'value'}"

    {"key":"value"}

    $ echo "{oops: 'i wrote json5', why: 'because i am lazy'}" | json5ify

    {"oops":"i wrote json5","why":"because i am lazy"}

    $ json5ify --path=/path/to/my.json5

    {"file":"whatever"}

    $ echo "{oops: 'i wrote json5', why: 'because i am lazy'}" | json5ify --space=2 > ~/my.json5

## Options

* `--input={}`: JSON5 input
* `--path=PATH/TO/JSON5`: parse a file
* `--space`: pretty printing (defaults to two psaces)
* `--space=4`: pretty printing with a number of spaces
* `--space="    "`: pretty printing with a string
