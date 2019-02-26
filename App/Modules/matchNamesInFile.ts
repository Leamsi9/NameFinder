// Matching logic prototype

const tokenise = require('./tokeniseFile.ts');

//Stub arrays for testing
const firstNames = ['Mary', 'Oliver', 'Peter']
const lastNames = ['Twist', 'Johnson', 'Stephens']
const titles = ['Mr', 'Mrs', 'Sir']
const txtToAnalyse = ['Oliver', 'Stephens', 'Oliver','was', 'charcoal', 'Oliver', 'commas', 'Mr', 'Stephens', 'Peter', 'Mrs','Mary', 'Stephens','The', 'Oliver', 'Johnson','or', 'Oliver', 'blue', 'Mr', 'Oliver', 'Twist']

// Processing and output arrays
let compositeName = []// temporary holding space for composite name values (e.g. 'Mrs', 'Mary', 'Stephens')
const results = []; // Collection of processed name results, containing both isolated and composite names (e.g. 'Peter', 'Mrs Mary Stephens', 'Peter')

//Helper functions
const unshift = (entitiesToSeek, arrayToAnalyse) => entitiesToSeek.unshift(arrayToAnalyse);
const splice = (arrayToAnalyse, index, length) => arrayToAnalyse.splice(index, length);
const join = (entitiesToSeek, arrayToAnalyse, separator) => entitiesToSeek.push(arrayToAnalyse.join(separator));

//Matching function
const matchEntityInArray = (entitiesToSeek, arrayToAnalyse, index) => {
    entitiesToSeek.forEach((entity) => {
        if (entity === arrayToAnalyse[index]) {
            unshift(compositeName, arrayToAnalyse[index]) // Move matches to holding array so they can be concatenated into composite names if more than one match found on each loop.
            splice(arrayToAnalyse, index, 1) // Remove matches from the txtToAnalyse array, so we can later find isolated names
        }
    })
};


const search = new Promise(function (resolve, reject) {}); //I am using chained promises as a state machine with matches and non-matches as events to trigger state transitions


// A Divide and Conquer algorithm to recursively walk the txtToAnalyse array and the entitiesToSeek arrays for all matches.
// It begins by finding a matching surname and then looks at the preceding index for firstNames or title entities before it. If it finds a match it looks in the preceding index for title entities.
// Each time it finds a match, it removes it from the txtToAnalyse array, which means that when the array has been fully traversed, all the target entities still left to find will be isolated firstNames entities.

//Assumptions: This assumes that all proper names to look for are consistently formatted as [Title] [First Name] [Last Name]. That is in fact the case in Oliver Twist.


for (let i = 0; i < lastNames.length; i++) {
    for (let j = 0; j < txtToAnalyse.length; j++) //walk through both the txtToAnalyse and the lastNames arrays from start to end
        if (lastNames[i] == txtToAnalyse[j]) { //find the first indexes with matching values in both arrays
            console.log('txtToAnalyse IS NOW: ' + txtToAnalyse) //For testing purposes - will be removed and turned into an actual test
            search.then(matchEntityInArray(lastNames, txtToAnalyse, j)) // Match triggers a promise as a state machine. First match is extracted and processed
                .then(matchEntityInArray(firstNames, txtToAnalyse, j - 1) | matchEntityInArray(titles, txtToAnalyse, j - 1) | matchEntityInArray(lastNames, txtToAnalyse, j - 1)) //Look in the preceding index for a name element
                .then(matchEntityInArray(titles, txtToAnalyse, j - 2)) //Look for an initial title if last match found a name
                .then(join(results, compositeName, ' ')) //join the composite of all the name entities into a single name value, and push it into the results array
            compositeName = [] //clear the composite name handler ready to start again
        }
}

//Final loop to hoover up the remaining isolated first names using a simplified version of the algorithm above.
for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < txtToAnalyse.length; j++)
        if (firstNames[i] == txtToAnalyse[j]) {
            matchEntityInArray(firstNames, txtToAnalyse, j)
            join(results, compositeName, ' ')
            compositeName = []
        }
}

//Output array values of each composite name and each isolated name. Used here for testing purposes and will be adapted into a test
console.log(results)

//Output the original array with all names and titles stripped off
console.log('THE FINAL txtToAnalyse IS ' + txtToAnalyse)