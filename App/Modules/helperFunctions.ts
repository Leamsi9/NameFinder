require ('./index.js')
//Helper functions
module.exports.helpers = {
    unshift:(entitiesToSeek: Array<string>, arrayToAnalyse: Array<string>, index: number) => entitiesToSeek.unshift(arrayToAnalyse[index]),
    splice:(arrayToAnalyse: Array<string>, index: number, length: number) => arrayToAnalyse.splice(index, length),
    join:(entitiesToSeek: Array<string>, arrayToAnalyse: Array<string>, separator: string) => entitiesToSeek.push(arrayToAnalyse.join(separator))
};