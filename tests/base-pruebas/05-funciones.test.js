import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        // Variable que contiene el objeto de la funcion
        const user = getUser();
        // console.log(user);

        // Los objetos se comparan a su ubicacion en memoria y no se puede con toBe
        // expect( testUser ).toBe( user );

        // En su lugar se debe usar toEqual o toStrictEqual
        expect( testUser ).toEqual( user );
    });

    test("getUsuarioActivo debe retornar un objeto", () => {
        
        const name = "Benji";

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo( name );

        // toEqual o toStrictEqual para verificar OBJETOS
        expect( user ).toStrictEqual( testUser );
    });

 });