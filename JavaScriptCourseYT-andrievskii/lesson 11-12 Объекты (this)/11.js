var chevy = {
	make: "Chevy",
	model: "Aveo",
	year: 1955,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 8000,
	started: false,
	light: function(){  // это не функциБ а метод!!!
		console.log('Включен ближний свет');
		},
	start: function() {
		this.started = true;  //свойство этого объекта
		},
	stop: function(){
		this.started = false;
		},
	drive: function(){
		if (this.started) {
		alert("Едем");
		} else {
		alert("Надо завести двигатель.");
		}
	}
	};
chevy.drive();
chevy.start();
chevy.drive();
chevy.stop();

console.log(chevy);



/*function check (car){
	if(car.mileage > 10000){
		return false;
	} else if(car.year > 1960){
		return false;
	}
	car.bay = true;
}

var car = check(cadi);

chevy.light(); //вызыаем метод объекта!*/