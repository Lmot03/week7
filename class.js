document.body.style.background = "grey"

const first = document.getElementById('nike')

const second = document.querySelector('ol > li')

const nine = document.querySelector('ol>:nth-child(8)+li')

const OT = document.querySelectorAll('ol li')

const united = document.getElementsByClassName('adidas')

const four = document.getElementsByTagName('li')










first.textContent = 'Gucci'
second.textContent = 'New balance'
nine.textContent = 'Chanel'
OT[9].style.background = 'linear-gradient(90deg, red, white)'
united[2].style.backgroundColor = 'red'
united[3].style.backgroundColor = 'blue'
four[3].textContent = 'Hermès'
