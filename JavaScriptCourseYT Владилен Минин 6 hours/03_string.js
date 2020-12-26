// -----------------------------------------------------------------------

// Конктатенация
// const name = 'KEk'
// const age = 25
// const output = `My Name : ${name}, age : ${age < 20 ? 'A' : 'B'}`
// console.log(output)

// -----------------------------------------------------------------------

// const name = 'Kekw'
// console.log(name.lenght)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ek'))
// console.log(name.startWith('Ke'))
// console.log(name.repeat(3))
// const pass = '           password     '
// console.log(pass.trim())


function logPerson(s, name, age){
	if (age < 0){
		age = 'Еще не родился'
	}
	return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const persoName = 'Kek'
const personAge = 23

const output = logPerson`Name: ${persoName}, age: ${personAge}`
console.log(output)

// -----------------------------------------------------------------------