# grunt-usemin-uglifynew - smarter uglifyjs for grunt-usemin

> Usemin uglify task that reuses existing .min files.

## Usage example

Require this plugin:

```
var uglifyNew = require('grunt-usemin-uglifynew');
```

Configure the `useminPrepare` task like this:

```
useminPrepare: {
    html: 'src/index.html',
    options: {
        dest: 'dist',
        flow: {
            steps: {
                js: [uglifyNew, 'concat'],
                css: ['concat', 'cssmin']
            },
            post: []
        }
    }
}
```

This flips the order of compilation: each file is minified independently first, concatenation happens last. Files that have already been minified (e.g. libraries that ship a `.min.js` file) won't be minified again.

## License 

    (The MIT License)

    Copyright (C) 2013 by Ruben Vermeersch <ruben@savanne.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
