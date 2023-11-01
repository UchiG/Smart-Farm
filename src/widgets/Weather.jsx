
import WeatherWidget from "../lib/components/WeatherWidget";

const Weather = () => {
    return (
        <WeatherWidget
            provider='openWeather'
            apiKey='4ede61be01813f6aeb42f2372a463092'
            location='Palapye'
            tempUnit="C"
            windSpeedUnit="mps"
            lang="en"
        />
      );
}

export default Weather
