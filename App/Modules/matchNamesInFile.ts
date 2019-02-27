// Matching logic prototype

const app = require ('./index.js');

//Stub arrays for testing
const firstNames = ['Mary', 'Oliver', 'Peter']
const lastNames = ['Twist', 'Johnson', 'Stephens']
const titles = ['Mr', 'Mrs', 'Sir']
const txtToAnalyse = ['Oliver', 'Stephens', 'Oliver', 'was', 'charcoal', 'Oliver', 'commas', 'Mr', 'Stephens', 'Peter', 'Mrs', 'Mary', 'Stephens', 'The', 'Oliver', 'Johnson', 'or', 'Oliver', 'blue', 'Mr', 'Oliver', 'Twist']

// Processing and output arrays
let nameHolder = []// temporary holding space for composite name values (e.g. 'Mrs', 'Mary', 'Stephens')
const results = []; // Collection of processed name results, containing both isolated and composite names (e.g. 'Peter', 'Mrs Mary Stephens', 'Peter')

app.matchCompositeNames(lastNames, firstNames, titles, txtToAnalyse, nameHolder, results);


//Output array values of each composite name and each isolated name. Used here for testing purposes and will be adapted into a test
console.log(results)

//Output the original array with all names and titles stripped off
console.log('THE FINAL txtToAnalyse IS ' + txtToAnalyse);
