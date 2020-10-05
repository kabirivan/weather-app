import React from 'react'
import {render} from '@testing-library/react'
import CityList from './CityList'

const cities = [{city:"Buenos Aires", country: "Argentina"},
                {city:"Bogota", country: "Colombia"},
                {city:"Quito", country: "Ecuador"},
                {city:"Lima", country: "Peru"}]


test("CityList Render", async () => {

      //AAA
    //Arrange
    //Act
    //Assert

    //Render: Renderiza el componente y retorna una serie de funciones de utilidad
    // Vamos a analizar su estado en el assert
    const { findAllByRole } = render(<CityList cities={cities}/>)

    //Assert
    //findAllByRoll nos va a buscar todos los componentes que sean heading
    const items = await findAllByRole("listitem")

    //Cuando el test es correcto

    expect(items).toHaveLength(4)



})