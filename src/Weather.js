import React from 'react';
import './Weather.css';

function Weather() {
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
            <h1>Barcelona</h1>
            <ul>
                <li>Wednesday</li>
                <li>Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="#" alt="sunny" />
                    <span className="temperature">6</span>
                    <span className="units">ºC</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation</li>
                        <li>Humidity</li>
                        <li>Wind</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Weather;