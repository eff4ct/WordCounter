/* 

Author : effect   date: 17/12/2023

Project: Word Counter

"""
*/


// Function to count words in the text
function wd_count(text) {
    const ponctuation = [' ', '.', '?', ',', ';', ':', '!', '*'];
    let count = 0;
    let start = false;
  
    // Iterating through each character in the text
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        // Checking if the character is a separator
        if (ponctuation.includes(char)) {
            start = false;
        } else if (!start) {
            // Incrementing the counter if it's the beginning of a word
            count += 1;
            start = true;
        }
    }
  
    return count;
  }
  

  // Function called when clicking the "Count Words" button
  function number() {
    // Retrieving the text from the text area
    const text = document.getElementById('text').value;

    // Calling the counting function and getting the result
    const count = wd_count(text);

    // Retrieving the element where to display the result
    const res = document.getElementById('result');

    // Displaying the number of words in the result element
    res.innerHTML = `Number of words: ${count}`;
  }
