import axios from 'axios';
import React, {useState, useEffect} from 'react';
import WeatherInfo from './WeatherInfo';
import useAxios from '../hooks/useAxios';

function WeatherSearch() {

    const [setUrl, data, loading, isLoading, error] = useAxios();

    const[cityName, setCityName] = useState("New York City");
    const [cityData, setCityData] = useState();

    useEffect(
        () => {
            const API_KEY = process.env.REACT_APP_API_KEY;
            let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + API_KEY;

            console.log('name:' + cityName + ', url:' + url);
            setUrl(url);
            isLoading(true);
        },
        [cityName]
    );

    async function handleSubmit(e) {
        e.preventDefault();

        let cityName = e.target.cityName.value;
        setCityName(cityName);

        // const API_KEY = process.env.REACT_APP_API_KEY;

        // // let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + 'e01de64fa03c2f2d61d922c1baa119b1';
        // let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + API_KEY;

        // console.log('name:' + cityName + ', url:' + url);
        // let result = null;

        // try{

        //     let result = await axios.get(url);

        //     console.log("Result: " + JSON.stringify(result));

        // }
        // catch(error) {
        //     console.log('error' + e);
        //     alert("Error, could not fetch data:" + error);
        // }
        
    }

    return (
        <>
        <br />
        <br />
        <div className="container">
            <main role="main" className="inner cover">
            
            <br />

            <h1 className="cover-heading">Weather Info</h1>

            <br />

            <p className="lead">Please enter the name of a city</p>

            <form className='form-group' onSubmit={handleSubmit}>

                <input type='text' name='cityName' placeholder='Name of City'/>
                <br />
                <br />
                <button className="searchbtn">Get Weather Data</button>

            </form>

            <br />
            <br />

            {(!loading && data)
            ?
            <WeatherInfo data={data}/>
            :
            <h1>...Loading...</h1>
            }

        </main>
    </div>
    </>
    );
}

export default WeatherSearch;