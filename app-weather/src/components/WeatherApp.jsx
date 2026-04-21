import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import Loading from './Loading';

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);


    async function loadInfo(city = 'london') {
        try {
            setLoading(true);

            // console.log(`${process.env.REACT_APP_URL}&key=93f0a891749b47b198d193221261704&q=${city}
            // `);

            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=93f0a891749b47b198d193221261704&q=${city}
            `);
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
        <div>
            <WeatherForm  onChangeCity={handleChangeCity} />
            {
                loading
                ? <Loading />
                : <WeatherMainInfo weather={weather} /> 
            }
        </div>
    )
}
