import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
    test("debe retornar un string y un numero", () => {
        
        const [ letter, number ] = retornaArreglo();
        // console.log(retorno);

        expect( letter ).toBe( 'ABC' );
        expect( number ).toBe( 123 );
        // o
        expect( typeof letter ).toBe( 'string' );
        expect( typeof number ).toBe( 'number' );
        // o
        expect( letter ).toEqual( expect.any(String) );
        expect( number ).toEqual( expect.any(Number) );
    });
 });