// -----------------------------------------------------------------------

// Объекты

const person = {
	name: 'Oleg',
	age: 23,
	greet: function() {
		console.log('Hello')
	},
	greet2() {
		console.log('Hello2')
	},
	'complex key': 'Complex Value',
	['key_' + (1 + 3)]: 'Computed key',
	info() {
		console.log(`Info about ${this.name} or ${person.name}`)
	}
}

// // delete person.name

// console.log(person['complex key'])
// console.log(person)
// cost {name, age, greet} = person
// console.log(name, age, greet)


// const keys = Object.keys(person)
// console.log(keys)

// -----------------------------------------------------------------------

// context

person.info()

// -----------------------------------------------------------------------