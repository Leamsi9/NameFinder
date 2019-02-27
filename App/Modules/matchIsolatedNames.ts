//Final loop to hoover up the remaining isolated first names using a simplified version of the algorithm above.
const isolated = require ('./index.js');
module.exports.matchIsolatedNames = (firstNames: Array<string>, arrayToAnalyse: Array<string>, results: Array<string>) => {
    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < arrayToAnalyse.length; j++)
            if (firstNames[i] == arrayToAnalyse[j]) {
                isolated.unshift(results, arrayToAnalyse[j])
            }
    }
}