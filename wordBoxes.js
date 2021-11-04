var allWords = [];
var currentWord = 0;

var wordsInput = document.getElementById('words-input')
// wordsInput.addEventListener('input', handleNewWordsEntered)
wordsInput.addEventListener('change', handleNewWordsEntered)

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value
  console.log("== Inside handleNewWordsEntered(), text:", text)
  // text.indexOf('fox')
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  console.log("  -- allWords:", allWords)
  currentWord = 0;
}

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function handleAddWordButtonClicked(event) {
  console.log("== An add word button was clicked")
  var word = allWords[currentWord]
  if (word) {
    console.log("  -- word:", word);

    var everyNthSelect = document.getElementById('every-nth-select')
    var everyN = Number.parseInt(everyNthSelect.value)
    console.log("  -- everyN:", everyN)

    var highlightColor = null
    if (!((currentWord + 1) % everyN)) {
      highlightColor = 'blue'
    }

    var wordElem = generateWordElem(word, highlightColor)
    var container = event.currentTarget.parentNode.parentNode
    var wordsContainer = container.getElementsByClassName('words-container')[0]
    wordsContainer.appendChild(wordElem)

    currentWord = (currentWord + 1) % allWords.length
  }
}

var buttons = document.getElementsByClassName('add-word-button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleAddWordButtonClicked)
}
