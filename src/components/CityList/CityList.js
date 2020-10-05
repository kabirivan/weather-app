import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo/CityInfo'
import Weather from './../Weather/Weather'


const renderCityAndCountry = (cityAndCountry) => {
    const {city, country} = cityAndCountry

    return(
        <li key={city}>
            <CityInfo city={city} country={country}/>
            <Weather temperature={10} state="sunny"/>

        </li>
        
    )

}

const CityList = ({cities}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.string.isRequired

}

export default CityList
