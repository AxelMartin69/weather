class UI {
	constructor(){
		this.description = document.querySelector('#description')
		this.temp = document.querySelector('#temp')
		this.city = document.querySelector('#location')

		this.speed = document.querySelector('#speed')
		this.direction = document.querySelector('#direction')
		this.pressure = document.querySelector('#pressure')
		this.humidity = document.querySelector('#humidity')
	}

	drawWeather( data ) {
  		let celcius = Math.round(parseFloat(data.main.temp)-273.15); 
  		let description = data.weather[0].description;


  		let speed = data.wind.speed;
  		let direction = data.wind.deg;
  		let pressure = data.main.pressure;
  		let humidity = data.main.humidity;
  
  		this.description.innerHTML = description;
  		this.temp.innerHTML = celcius + '&deg;';
  		this.city.innerHTML = data.name;

  		this.speed.innerHTML = "kiirus: " + speed + "m/s";
  		this.direction.innerHTML = "tuulesuund: " + direction;
  		this.pressure.innerHTML = "õhurõhk: " + pressure;
  		this.humidity.innerHTML = "niiskus: " + humidity;
	}
}