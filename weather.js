class Weather {
  constructor(city, state) {
    this.apiKey = API_KEY;
    this.city = city;
    this.state = state;
  }

  // Fetch weather form API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${this.city}&units=imperial&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.list[0];
  }

  changeLocation(city) {
    this.city = city;
  }
}