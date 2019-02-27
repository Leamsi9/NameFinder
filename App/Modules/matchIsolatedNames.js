//Final loop to hoover up the remaining isolated first names using a simplified version of the algorithm above.
var isolated = require('./index.js');
module.exports.matchIsolatedNames = function (firstNames, arrayToAnalyse, results) {
    for (var i = 0; i < firstNames.length; i++) {
        for (var j = 0; j < arrayToAnalyse.length; j++)
            if (firstNames[i] == arrayToAnalyse[j]) {
                isolated.unshift(results, arrayToAnalyse[j]);
            }
    }
};
