import React from 'react'
import Weather from './Weather'
import  {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'



test("Weather render sunny", async () => {

    //AAA
    //Arrange
    //Act
    //Assert

    //Render: Renderiza el componente y retorna una serie de funciones de utilidad
    // Vamos a analizar su estado en el assert
    const { findByRole } = render(<Weather temperature={10} state={"sunny"}/>)

    //Assert
    //findAllByRoll nos va a buscar todos los componentes que sean heading
    const temp = await findByRole("heading")

    //Cuando el test es correcto

    expect(temp).toHaveTextContent("10")
    


})