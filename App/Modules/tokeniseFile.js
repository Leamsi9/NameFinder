//This module turns .txt files into an array of words (strings)
var tokenise = require('./');
var fs = require('fs'); //node file system object
var fileName = 'oliverTwist';
var sourceFile = './../../Sources/oliver-twist.txt';
var destFile = './../Data/WorkingSource/' + fileName + 'Tokenised.js';
var separator = /[\d\s.,;:*'"\(\)\+-]+/;
//Take a .txt file, turn it into a string and convert it to an array of word tokens
var preprocessFile = function (sourceFile, separator) {
    var tokenised = fs.readFileSync(sourceFile).toString('utf-8').split(separator);
    return tokenised;
};
//Take the tokenised array and output it into a .js file
var saveFile = function (destFile, tokenised) {
    fs.writeFileSync(destFile, tokenised, 'utf-8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Be thrilled: your new file is saved");
    });
};
var tokenisedText = preprocessFile(sourceFile, separator);
saveFile(destFile, tokenisedText);
module.exports.tokenisedText = tokenisedText;
