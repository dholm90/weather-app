import { format } from 'date-fns';
import CALC from './Calc';

async function callApi(city) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a03c1924663e0d086bd00e31a46bab4`, {
    mode: 'cors',
  });
  const responseData = await response.json();

  const weatherData = {
    weather: 'asdf',
    location: '',
    date: '',
    time: '',
    tempC: '',
    tempF: '',
    feelsLikeC: '',
    feelsLikeF: '',
    humidity: '',
    windKmH: '',
    windMH: '',
  };

  // console.log(response);
  weatherData.weather = responseData.weather[0].description;
  weatherData.location = responseData.name;
  weatherData.date = format(new Date(), 'EEEE, dd MMMM yyyy');
  weatherData.time = format(new Date(), 'h:mm a');
  weatherData.tempC = CALC.kToC(responseData.main.temp);
  weatherData.tempF = CALC.kToF(responseData.main.temp);
  weatherData.feelsLikeC = CALC.kToC(responseData.main.feels_like);
  weatherData.feelsLikeF = CALC.kToF(responseData.main.feels_like);
  weatherData.humidity = responseData.main.humidity;
  weatherData.windKmH = CALC.msToKmH(responseData.wind.speed);
  weatherData.windMH = CALC.msToMH(responseData.wind.speed);

  return weatherData;
}

export { callApi };
