# NameFinder
A basic named entity recognition Proof of Concept.

It frist tokenises the .txt file, turning the document into an array of strings, stripping all non-word characters. The result is a haystack of words containing both names and non-names (arrayToAnalyse).

I devised a Divide and Conquer algorithm (matchCompositeNames)to recursively walk the arrayToAnalyse and the entitiesToSeek arrays for all matches.
 It begins by:
 1) finding a matching surname and then looks behind at the preceding index for firstNames or title entities before it.
 2) If it finds a match it looks in the preceding index for title entities.
 3) Each time it finds a match, it pushes it to the beginning of a temporary nameHolder array and removes it from the original arrayToAnalyse.
 4) Before ending the loop it concatenates the values in the nameHolder array into a composite name string and pushes the concatenated name into a results array, clearing the nameHolder for the next loop.
 This means that when the array has been fully traversed, all surnames and their preceding names and titles will have been removed from the arrayToAnalyse and processed into the results array. The only entities still left to find in the arrayToAnalyse will be isolated firstNames entities.
 
 It then scoops up the remaining isolated names (matchIsolatedNames) and pushes it into the results array.
 
 It finally sorts the array, counts then merges duplicates, and outputs the results into .txt file
 

