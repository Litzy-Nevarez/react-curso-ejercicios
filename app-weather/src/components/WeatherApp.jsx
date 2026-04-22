import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import Loading from './Loading';

import './../css/weatherapp.css';

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);


    async function loadInfo(city = 'london') {
        try {
            setLoading(true);

            // console.log(`${process.env.REACT_APP_URL}&key=93f0a891749b47b198d193221261704&q=${city}
            // `);

            const url = "https://api.weatherapi.com/v1/current.json?aqi=no";
            const key = "93f0a891749b47b198d193221261704"

            // const request = await fetch(
            //     `${process.env.REACT_APP_URL}&key=93f0a891749b47b198d193221261704&q=${city}
            // `);

            const request = await fetch(`${url}&key=${key}&q=${city}`);
            const json = await request.json();
            setWeather(json);

            setTimeout(() => {
                setWeather({ ... json});
                setLoading(false);
            }, 2000)

        }catch(error){
            console.error(error);
        }
    }


    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }


    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`;
    }, [weather]);

    useEffect(() => {
        loadInfo();
    }, []);

    return (
        <div className='weatherContainer'>
            <WeatherForm  onChangeCity={handleChangeCity} />
            {
                loading
                ? <Loading />
                : <WeatherMainInfo weather={weather} /> 
            }
        </div>
    )
}
