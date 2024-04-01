function capitalizedWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(" ");

    // Capitalize the first letter of each word alternately
    let capitalizedWords = words.map((word, index) => {
        // Check if the index is even or odd to alternate capitalization
        if (index % 2 === 0) {
            return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    // Join the words back into a sentence
    return capitalizedWords.join(" ");
}

// test of the solution
let sentence = "the quick brown fox";
console.log(capitalizeWords(sentence)); // Output: "tHE qUICK bROWN fOX"
