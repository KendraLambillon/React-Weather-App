import React, {useState} from 'react';
import axios from 'axios';
import FormattedDate from './FormattedDate';
import './Weather.css';


function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    /*Weather API - AJAX request*/
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            /*iconUrl: "#";*/
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }


    if (weatherData.ready) {
        return(
            <div className="weather">
                <form>
                    <div className="row mt-3">
                        <div className="col-9">
                            <input type="search" placeholder='Search for a city' className='form-control' autoFocus="on"/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className='btn btn-primary w-100'/>
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="units">ºC</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}</li>
                            <li>Wind: {weatherData.wind}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}

export default Weather;