import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test("getHeroeByIdAsync debe retornar un héroe", ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // Hace que espere hasta que el codigo asÍncrono termine
                done();
            });
    });

    test("getHeroeByIdAsync debe obtener un error si el heroe no existe", ( done ) => {
        
        const id = 100;

        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`);

                // Hace que espere hasta que el código asÍncrono termine
                done();
            })
    });
 });