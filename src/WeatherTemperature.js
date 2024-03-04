import React, { useState } from "react";

function WeatherTemperature(props){
    const [unit, setUnit] = useState('celsius');

    function convertToFarenheit(event){
        event.preventDefault();
        setUnit("farenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }


    if(unit === 'celsius') {
        return(
            <div className="WeatherTemperature">
                <span className="temperature"> {Math.round(props.celsius)} </span>
                <span className="unit">ºC | {" "} <a href="/" onClick={convertToFarenheit}>ºF</a> </span>
            </div>
        );
    } else {
        let farenheitValue = (props.celsius * 9/5) + 32;
        return(
            <div className="WeatherTemperature">
                <span className="temperature"> {Math.round(farenheitValue)} </span>
                <span className="unit"><a href="/" onClick={convertToCelsius}>ºC</a> {" "} |  ºF </span>
            </div>
        );
    }
}

export default WeatherTemperature;