import React, {useState} from 'react';
import axios from 'axios';

import WeatherInfo from './WeatherInfo';
import './Weather.css';


function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
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

    function search(){
        const apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);

    }

    function handleCityChange(event){
        //update the city
        setCity(event.target.value);
    }


    if (weatherData.ready) {
        return(
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row mt-3">
                        <div className="col-9">
                            <input type="search" placeholder='Search for a city' className='form-control' autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className='btn btn-primary w-100'/>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
            </div>
        );
    } else {
        search();

        return "Loading...";
    }
}

export default Weather;