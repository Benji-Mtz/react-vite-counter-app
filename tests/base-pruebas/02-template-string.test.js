import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba de 02-template-string', () => { 
    test('getSaludo debe retornar "Hola Benji"', () => {
        const name = 'Benji';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    });
 })