const upperCaseButton = document.querySelector('[data-js="upperCaseButton"]')
const lowerCaseButton = document.querySelector('[data-js="lowerCaseButton"]')
const firstLetterInUppercase = document.querySelector('[data-js="firstLetterUppercase"]')
const textArea = document.querySelector('#textArea')
const outputText = document.querySelector('[data-js="outputText"]')

const getText = text => text

textArea.addEventListener('input', e => {
  const inputValue = getText(e.target.value).trim()
  return inputValue
})

upperCaseButton.addEventListener('click', () => {
  outputText.textContent = getText(textArea.value).toUpperCase()
})

lowerCaseButton.addEventListener('click', () => {
  outputText.textContent = getText(textArea.value).toLowerCase()
})

firstLetterInUppercase.addEventListener('click', () => {
  const inputValue = getText(textArea.value)

  outputText.textContent = inputValue
    .slice(0, 1)
    .toUpperCase()
    .concat(inputValue.slice(1))
})
