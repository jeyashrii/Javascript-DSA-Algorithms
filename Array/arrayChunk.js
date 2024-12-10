function chunkArray(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i + chunkSize) {
    result.push(arr.splice(i, i + chunkSize));
  }
  return result;
}

//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

// Approach
// create an empty array to hold the chunkSizeset a starting index to keep track of where we ar re in the arrayloop through the array until it meets the end
// extract a chunk of deisred size from the original array
// add the exrtracted array to the 'chunked' array
// Move the index forward by the chunk size to get to the next chunk
// retrun the final arrray of results
const chunk = (array, size) => {
  let index = 0;
  let chunked = [];
  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    console.log("------chunk", chunk);
    chunked.push(chunk);
    index += +size;
  }
  return chunked;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
