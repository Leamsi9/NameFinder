var matchComposite = require('./index.js');
// A Divide and Conquer algorithm to recursively walk the txtToAnalyse array and the entitiesToSeek arrays for all matches.
// It begins by:
// 1) finding a matching surname and then looks behind at the preceding index for firstNames or title entities before it.
// 2) If it finds a match it looks in the preceding index for title entities.
// 3) Each time it finds a match, it pushes it to the beginning of a temporary nameHolder array and removes it from the original arrayToAnalyse.
// 4) Before ending the loop it concatenates the values in the nameHolder array into a composite name string and pushes the concatenated name into a results array, clearing the nameHolder for the next loop.
// This means that when the array has been fully traversed, all surnames and their preceding names and titles will have been removed from the arrayToAnalyse and processed into the results array. The only entities still left to find in the arrayToAnalyse will be isolated firstNames entities.
module.exports.CompositeNames = {
    matchCompositeNames: function (surnames, firstNames, titles, arrayToAnalyse, nameHolder, results) {
        var matchAndConcatenate = new Promise(function (resolve, reject) { }); //I am using chained promises as a state machine with matches and non-matches as events to trigger state transitions
        for (var i = 0; i < surnames.length; i++) {
            for (var j = 0; j < arrayToAnalyse.length; j++) //walk through both the txtToAnalyse and the lastNames arrays from start to end
                if (surnames[i] == arrayToAnalyse[j]) { //find the first indexes with matching values in both arrays
                    // console.log('txtToAnalyse IS NOW: ' + txtToAnalyse) //For testing purposes - will be removed and turned into an actual test
                    matchAndConcatenate.then(matchComposite.matchEntityInArray(surnames, arrayToAnalyse, j)) // Match triggers a promise as a state machine. First match is extracted and processed
                        .then(matchComposite.matchEntityInArray(firstNames, arrayToAnalyse, j - 1) || matchComposite.matchEntityInArray(titles, arrayToAnalyse, j - 1) || matchComposite.matchEntityInArray(surnames, arrayToAnalyse, j - 1)) //Look in the preceding index for a name element
                        .then(matchComposite.matchEntityInArray(titles, arrayToAnalyse, j - 2)) //Look for an initial title if last match found a name
                        .then(matchComposite.join(results, nameHolder, ' ')); //join the composite of all the name entities into a single name value, and push it into the results array
                    nameHolder = []; //clear the composite name handler ready to start again
                }
        }
    }
};
