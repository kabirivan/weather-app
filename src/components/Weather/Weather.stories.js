import React from 'react'
import 'typeface-roboto'
import Weather from './Weather'


export default{
    title: 'Weather',
    component: Weather
}

export const WeatherCloud = () => {

    return(
        
        <Weather temperature={10} state={"cloud"}>

        </Weather>


    )
}

export const WeatherFog = () => {

    return(
        
        <Weather temperature={10} state={"fog"}>

        </Weather>


    )
}