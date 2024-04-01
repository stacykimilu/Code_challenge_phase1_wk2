function swapCase(str) {
    // Initialize a output string
    let output = '';
  
    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // If the current character is uppercase, convert it to lowercase and add it to the result string
      if (str[i] === str[i].toUpperCase()) {
        output += str[i].toLowerCase();
      }
      // If the current character is lowercase, convert it to uppercase and add it to the result string
      else {
        output += str[i].toUpperCase();
      }
    }
  
    // Return the output string
    return output;
  }
  
  // Test the output
  console.log(swapCase('The Quick Brown Fox')); //the output is 'tHE qUICK bROWN fOX'