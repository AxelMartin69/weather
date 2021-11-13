class Weather{
	constructor(city){
		this.key = '09c55a9a2af84d1398ebb65835dd5b72';
		this.city = city;
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
}