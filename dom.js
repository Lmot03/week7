document.body.style.background = "blue"

const  tittle = document.querySelector('h1')

tittle.textContent = 'DOM manipulation'

const sec = document.getElementById('second')

const idSec = document.querySelector('#second')

const fifth = document.querySelector('ul>:nth-child(5)')

const lists = document.querySelectorAll('ui li')

const seconds = document.getElementsByClassName('second')


lists[0].textContent = 'clara'
lists[7].textContent = 'yomi'
fifth.textContent = 'kayode ajala'
sec.textContent = 'first id'
idSec.textContent = 'id second'
seconds[0].textContent = 'paul'
seconds[1].textContent = 'samuel'

idSec.style.backgroundColor = 'acqua'
idSec.style.paddingBlock = '2em'
idSec.style.textTransform = 'uppercase'