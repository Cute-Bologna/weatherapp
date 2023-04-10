import React from "react";
import axios from "axios";


export default function Weather () {
    function handleResponse(response) {
        alert(`The weather in New York is ${response.data.main.temp}&degC`);

    }
    let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=New_York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2> Hello From Weather</h2>
}