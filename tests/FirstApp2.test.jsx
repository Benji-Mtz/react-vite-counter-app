import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    
    const title = 'Hola, Soy el titulo';
    const subTitle = 'Soy un subtitulo';
    
    test('debe de hacer match con el snapshot', () => {
               
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola, Soy el titulo"', () => { 
        // screen.debug(); => <Body />

        render( <FirstApp title={ title } /> );
        // expect( screen.getByText( title ) ).not.toBeTruthy();
        expect( screen.getByText( title ) ).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title={ title } /> )
        // getByRole son todas las etiquetas de HTML
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe mostrar el subtitulo enviado por props', () => { 
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        // expect( getAllByText(subTitle).length ).toBe(2);
        expect( screen.getAllByText( subTitle ).length ).toBe(2);

    });

 });