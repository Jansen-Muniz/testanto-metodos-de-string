const upperCaseButton = document.querySelector('[data-js="upperCaseButton"]')
const lowerCaseButton = document.querySelector('[data-js="lowerCaseButton"]')
const firstLetterInUppercase = document.querySelector('[data-js="firstLetterUppercase"]')
const eachWordUppercase = document.querySelector('[data-js="eachWordUppercase"]')
const alternateUppercaseLowercase = document.querySelector('[data-js="alternateUppercaseLowerCase"]')
const textArea = document.querySelector('[data-js="textArea"]')
const outputText = document.querySelector('[data-js="outputText"]')
const outputTextAlternate = document.querySelector('[data-js="output-text"]')

const getTextAreaContent = e => {
  const inputValue = e.target.value.trim()
  return inputValue
}

upperCaseButton.addEventListener('click', () => {
  outputTextAlternate.textContent = ''
  outputText.textContent = textArea.value.toUpperCase()
})

lowerCaseButton.addEventListener('click', () => {
  outputTextAlternate.textContent = ''
  outputText.textContent = textArea.value.toLowerCase()
})

const handleFirstLetterInUppercase = () => {
  const inputValue = textArea.value

  outputTextAlternate.textContent = ''
  outputText.textContent = inputValue
    .slice(0, 1)
    .toUpperCase()
    .concat(inputValue.slice(1))
}

const handleEachWordUppercase = () => {
  const inputValue = textArea.value
  const message = inputValue.split(' ')

  outputTextAlternate.textContent = ''

  const handleText = (acc, word) => {
    acc += word
      .slice(0, 1)
      .toUpperCase()
      .concat(word.slice(1))

    outputText.textContent = acc

    return `${acc} `
  }

  message.reduce(handleText, '')
}

textArea.addEventListener('input', getTextAreaContent)
firstLetterInUppercase.addEventListener('click', handleFirstLetterInUppercase)
eachWordUppercase.addEventListener('click', handleEachWordUppercase)

alternateUppercaseLowercase.addEventListener('click', () => {
  const inputValue = textArea.value

  outputTextAlternate.textContent = inputValue
  outputText.textContent = ''

  outputTextAlternate.classList.toggle('lowercase')
})
