// Define a function to generate a range of numbers from 'start' to 'end'
function gene_Range(start, end) {
    // Swap 'start' and 'end' if 'end' is smaller than 'start'
    if (end < start) {
      const temp = start;
      start = end;
      end = temp;
    }
    // Initialize an empty array to store the range of numbers
    const range = [];
  
    for (let i = start; i <= end; i++) {
   // Add each number to the 'range' array
      range.push(i);
    }
  // Return the generated range of numbers
    return range;
  }
  
  // Test the function
  //shows all the ouputs
  console.log(gene_Range(4, 7)); // [4, 5, 6, 7]
  console.log(gene_Range(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]