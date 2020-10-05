import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'


export default{
    title: 'CityList',
    component: CityList
}

const cities = [{city:"Buenos Aires", country: "Argentina"},
                {city:"Bogota", country: "Colombia"},
                {city:"Quito", country: "Ecuador"},
                {city:"Lima", country: "Peru"}]

export const CityListExample = () => {

    return(
        
        <CityList cities={cities}>
        

        </CityList>


    )
}

