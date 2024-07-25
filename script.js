let sentence = 'The quick brown fox jumps over the lazy dog/n'

//change to uppercase
sentence = sentence.toUpperCase()

//change to lowercase
sentence = sentence.toLowerCase()
console.log(sentence)

//let length of the str
let strLength = sentence.length
console.log(strLength)

//the first character
let firstChar = sentence[0]
console.log(firstChar)

//the first character
let tenthChar = sentence[9]
console.log(tenthChar)

//the character at 22
let char22 = sentence.charAt(22)
console.log(char22)


//add cat to the str
let cat = ' and cat'
let catStr = sentence.concat(cat)
console.log(catStr)

//replace dog with goat
sentence = sentence.replace('dog', 'goat')
console.log(sentence)

//replace all 'the' with 'that'
console.log(sentence.replaceAll('the', 'that'))

//repeat 5x
console.log(sentence.repeat(5))

//cut out some str
console.log(sentence.slice(sentence.indexOf('jump'), sentence.))

