require('./index.js');
//Helper functions
module.exports.helpers = {
    unshift: (entitiesToSeek, arrayToAnalyse, index) => entitiesToSeek.unshift(arrayToAnalyse[index]),
    splice: (arrayToAnalyse, index, length) => arrayToAnalyse.splice(index, length),
    join: (entitiesToSeek, arrayToAnalyse, separator) => entitiesToSeek.push(arrayToAnalyse.join(separator))
};
//# sourceMappingURL=helperFunctions.js.map