'use strict';

var fs = require('fs');
var path = require('path');

function isOutdated(src, target) {
    if (!fs.existsSync(target)) {
        return true;
    }
    return fs.statSync(src).mtime > fs.statSync(target).mtime;
}

module.exports = {
    name: "uglify",

    createConfig: function (context, block) {
        var cfg = {
            files: []
        };

        context.inFiles.forEach(function (fname) {
            var minname = fname.replace(/\.js$/, '.min.js');
            var file = path.join(context.inDir, fname);
            var minfile = path.join(context.inDir, minname);
            var outfile = path.join(context.outDir, fname);

            if (!isOutdated(file, outfile)) {
                return context.outFiles.push(fname);
            } else if (!isOutdated(file, minfile)) {
                return context.outFiles.push(path.relative(context.outDir, minfile));
            } else {
                cfg.files.push({
                    src: [file],
                    dest: outfile
                });
                return context.outFiles.push(fname);
            }
        });
        return cfg;
    }
};
