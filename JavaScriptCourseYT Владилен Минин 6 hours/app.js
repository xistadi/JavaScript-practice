// -----------------------------------------------------------------------

// DOM
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('class')[0]
const heading2 = document.querySelector('.class')


function addStylesTo(node) {
	node.textContent = 'Changed from JS!'
	node.style.color = 'red'
	node.style.padding = '2em'
}

// -----------------------------------------------------------------------