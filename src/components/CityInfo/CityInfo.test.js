import React from 'react'
import  {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing (objeto de testeo)


test("CityInfo render", async () => {
    const city = "Quito"
    const country = "Ecuador"

    //AAA
    //Arrange
    //Act
    //Assert

    //Render: Renderiza el componente y retorna una serie de funciones de utilidad
    // Vamos a analizar su estado en el assert
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)


    //Assert
    //findAllByRoll nos va a buscar todos los componentes que sean heading
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test es correcto

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)


})