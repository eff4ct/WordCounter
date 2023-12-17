# Word Counter

Welcome to my Word Counter project ! This simple web application, allows you to count the number of words in a given text. Below are the details to get started:

## Project Structure

The project is organized with the following structure:
```
word-counter/
│
├── index.html
├── src/
│   ├── style.css
│   └── script.js
└── README.md
```

## Getting Started

1. Clone or download the repository to your local machine:

```
git clone https://github.com/your-username/word-counter.git
```
## Usage

1. Write or paste your text into the textarea provided.
2. Click the "Count Words" button to calculate the number of words.
3. The result will be displayed below the button.

## Word Counting Logic

The JavaScript file (`script.js`) contains the logic for counting words in the entered text. The function `wd_count` utilizes an array of separators (such as space, period, question mark, comma, and semicolon) to identify the beginning of each word. The `number` function is responsible for retrieving the text, calling `wd_count`, and updating the result on the webpage.

## Project Details

- **Author**: effect
- **Date**: 17/12/2023