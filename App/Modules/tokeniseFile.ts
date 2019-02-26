//This module turns .txt files into an array of words (strings)

const fs = require('fs'); //node file system object

let fileName = 'oliverTwist';
let sourceFile = './../../Sources/oliver-twist.txt';
let destFile = './../Data/WorkingSource/' + fileName + 'Tokenised.js';
let separator = /[\d\s.,;:*'"\(\)\+-]+/;

//Take a .txt file, turn it into a string and convert it to an array of word tokens
const preprocessFile = (sourceFile, separator) => {
    let tokenised = fs.readFileSync(sourceFile).toString('utf-8').split(separator);
    return tokenised;
};

//Take the tokenised array and output it into a .js file

const saveFile = (destFile, tokenised) => {
    fs.writeFileSync(destFile, tokenised, 'utf-8', (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Be thrilled: your new file is saved");
    })
};

const tokenisedText = preprocessFile(sourceFile, separator);

saveFile(destFile, tokenisedText);

module.exports.tokenisedText = tokenisedText