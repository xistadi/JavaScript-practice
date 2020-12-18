var chevy = {
	make: "Chevy",
	model: "Aveo",
	year: 2011,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 1021
	};

var cadi = {
	make: "Cadillac",
	model: "GM",
	year: 1955,
	color: "yellow",
	passengers: 2,
	convertible: true,
	mileage: 12821
};

var newObj = {};

delete cadi.passengers;

cadi.state = "normal";
console.log(cadi);

console.log(cadi.passengers);