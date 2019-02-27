const helpers = require('./index.js');
module.exports.matchEntityInArray = (entitiesToSeek, arrayToAnalyse, index, nameHolder) => {
    entitiesToSeek.forEach((entity) => {
        if (entity === arrayToAnalyse[index]) {
            helpers.unshift(nameHolder, arrayToAnalyse[index]); // Move matches to holding array so they can be concatenated into composite names if more than one match found on each loop.
            helpers.splice(arrayToAnalyse, index, 1); // Remove matches from the txtToAnalyse array, so we can later find isolated names
        }
    });
};
//# sourceMappingURL=matchEntityInArray.js.map