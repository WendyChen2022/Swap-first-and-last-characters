
document.addEventListener("DOMContentLoaded", function (event) {
    // [1] Ask user to enter 3 words and display them in an unordered list
    let wordsArray = [];
    let wordList = document.getElementById('wordList');

    for (let i = 0; i < 3; i++) {
        let word = prompt(`Enter word ${i + 1}:`);
        wordsArray.push(word);
        let listItem = document.createElement('li');
        listItem.textContent = word;
        wordList.appendChild(listItem);
    }

    // [2] Show the transform button after entering 3 words
    document.getElementById('transformButton').style.display = 'block';
    document.getElementById("transformButton").addEventListener("click", transformWords);

    // Function to transform words and display on the second page
function transformWords() {
    // Create a new array with swapped first and last letters using array.map
    let transformedArray = wordsArray.map(word => {
        return word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
    });

    // Display transformed words in the second page
    let transformedList = document.getElementById('transformedList');
    transformedList.innerHTML = ''; // Clear previous content

    transformedArray.forEach(transformedWord => {
        let listItem = document.createElement('li');
        listItem.textContent = transformedWord;
        transformedList.appendChild(listItem);
    });

    // Show the second page and hide the first page
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';

    // Additional logic or actions you want to perform after transformation
    console.log("Words transformed successfully!");
}

    
});
