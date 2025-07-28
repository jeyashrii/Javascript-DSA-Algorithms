// Problem Statement:
// write a function that accepts an array and chunk size.
// The function should return a new array where the original arrray is split into chunks of specified size.

// Approach
// create an empty array to hold the chunkSize .set a starting index to keep track of where we are in the array.loop through the array until it meets the end.
// extract a chunk of deisred size from the original array
// add the extracted array to the 'chunked' array
// Move the index forward by the chunk size to get to the next chunk
// return the final arrray of results
const chunk = (array, size) => {
  let index = 0;
  let chunked = [];
  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    console.log("------chunk", chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
