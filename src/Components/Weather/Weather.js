import { React, useEffect, useState } from 'react'
import '../CSS/Stylesheet.css';


export const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9f6a6760c5a060441696a547f304cf33`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    }, [search]);


    return (
        <>
            <div className="box">
                <div className="input-data">
                    <input
                        type="text"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                        placeholder="enter city name"

                    />
                </div>
            </div>
            {!city ? (
                <p>No Data Found</p>
            ) : (
                <div className="info">
                    <h2 className="location">
                        {search}
                    </h2>
                    <h1 className="temp">
                    {city.temp} °Cel
                    </h1>
                    <h3 className="temp_min_max">Min: {city.temp_min} | Max : {city.temp_max}</h3>
                </div>
            )

            }

        </>
    )
}
