// -----------------------------------------------------------------------

// Function

// Function Declaration
// function greet(name){
// 	console.log(`Hi ${name}`)
// }

// // Function Expression - не можем использовать перед ее написанием
// const greet2 = function greet2(name){
// 	console.log(`Hi2 ${name}`)
// }

// greet('Oleg')

// -----------------------------------------------------------------------

// Стрелочные функции
// function greet(name){
// 	console.log(`Hi ${name}`)
// }

// const arrow = (name) => {
// 	console.log(`Hi ${name}`)
// }

// const arrow2 = name => console.log(`Hi ${name}`)

// -----------------------------------------------------------------------

// function sumAll(...all) {
//  let result = 0
//  for (let num of all) {
//  	result += num
//  }
//  return result
// }

// console.log(sumAll(1, 2, 3, 4, 5, 66, 2))

// -----------------------------------------------------------------------

// Замыкания
// function createMember(name) {
// 	return function(lastName) {
// 		console.log(name + lastName)
// 	}
// }

// const logWithLastName = createMember('Kek')
// console.log(logWithLastName('Kek2'))
// console.log(logWithLastName('Kek3'))

// -----------------------------------------------------------------------