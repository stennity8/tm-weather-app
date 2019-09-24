class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
  }
}