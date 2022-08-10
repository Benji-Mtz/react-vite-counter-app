import { getAllByText, getByTestId, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    
    /* test("debe de hacer match con el snapshot", () => {
        
        // Funcion para renderizar en memoria componentes
        const title = 'Hola, Soy el titutlo react';

        const { container } = render( <FirstApp title={ title } /> )

        // console.log(container);
        expect( container ).toMatchSnapshot();

    }); */

    test("debe de mostrar el titulo en h1", () => {
        const title = "Hola, Soy el titulo react";
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();


        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // ToBe considera que el texto entre el h1 sea exactamente igual, hasta con espacios
        // expect(h1.innerHTML).toBe( title );
        // toContain solo asegura si se contiene el texto tenga espacios o no
        // expect(h1.innerHTML).toContain( title );

        // expect( getByTestId('test-title').innerHTML ).toBe(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

    test("debe de mostrar el subtitulo enviado por props", () => {
        const title = "Hola, Soy el titulo react";
        const subTitle = 'Soy un subtitulo';

        const { getByText, getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        // getByText solo regresa un elemento
        // expect( getByText(subTitle) ).toBeTruthy();

        // getAllByText regresa un arreglo de elementos html
        expect( getAllByText(subTitle).length ).toBe(2);


    });

 });