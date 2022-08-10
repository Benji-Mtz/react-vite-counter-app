import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el <CounterApp />", () => {

    const initialValue = 10;

    test('should be match with the snapshot', () => { 
        
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();

    });
    
    test("debe de mostrar el valor inicial de 100 <CounterApp value={ 100 } />", () => {
        render(<CounterApp value={ 100 } />);
        // expect( screen.getByText( 100 ) ).toBeTruthy();
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' );        
    });

    test("debe de incrementar con el boton +1", () => {        
        render(<CounterApp value={ initialValue } />);

        // Para Simular eventos usamor el fireEvent
        fireEvent.click( screen.getByText('+1') );
        // screen.debug();
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test("debe decrementar con el boton -1", () => {        
        render(<CounterApp value={ initialValue } />);

        // Para Simular eventos usamor el fireEvent
        fireEvent.click( screen.getByText('-1') );
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test("debe de funcionar el botón de reset", () => {
        render(<CounterApp value={ 666 } />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText(/reset/i) );

        // expect( screen.getByText( 666 ) ).toBeTruthy();

        // screen.getByRole('button', { name: 'hola' });
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText( 666 ) ).toBeTruthy();
    });

});