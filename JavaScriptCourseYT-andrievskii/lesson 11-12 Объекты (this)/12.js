var chevy = {
	make: "Chevy",
	model: "Aveo",
	year: 1955,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 8000,
	started: false,
	fuel: 0,
	light: function(){  
		console.log('Включен ближний свет');
		},
	start: function() {
		if (this.fuel == 0) {
			alert("Бак пуст, заправьте авто!");
		} else {
			this.started = true;
			}
		},
	stop: function(){
		this.started = false;
		},
	drive: function(){
		if(this.started){
			if (this.fuel > 0) {
			alert(this.make + " " + this.model + " " + "поехали");
			this.fuel = this.fuel - 1;
			} else {
			alert("Нужно заправить автомобиль.");
			this.stop();
			}
		}else{
			alert("Нужно завести автомобиль");
		}
	},
	addFuel: function(amount){
		this.fuel = this.fuel + amount;
	}
};

/*for (var prop in chevy){
	console.log(prop + ": " + chevy[prop]);
}*/
//chevy.color равнозначно chevy['co' + 'lor']

/*chevy.start();
chevy.drive();*/
chevy.start();
chevy.drive();
chevy.addFuel(2);
chevy.start();
chevy.drive();
chevy.drive();
chevy.drive();
chevy.stop();
