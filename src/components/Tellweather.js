import React, { useEffect, useState } from "react";
import "./css/style.css";


const Tellweather = () => {
    const [city, setCity] = useState("Mumbai");
    const [search, setSearch] = useState("Mumbai")
    const apikey = ""  //Enter your API key from open weather here
    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main)
        }
        fetchApi();
    },[search])

    return (
      <>
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              className="inputField"
              onChange={(text) => {
                setSearch(text.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="errorMsg">No Data Found</p>
          ) : (
            <>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view"></i>
                  {search}
                </h2>

                <h1 className="temp">{city.temp}°C</h1>
                <h3 className="tempmin_max">
                  Min : {city.temp_min}°C | Max : {city.temp_max}°C
                </h3>
              </div>

              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
            </>
          )}
        </div>
        <div className="end">Made with ❤️ by Himanshu Rawat</div>
      </>
    );
}

export default Tellweather;

//  b441e17bdcacd4f3085fa3748f9e272a;
