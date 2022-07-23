import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', () => { 
        
        const id = 1;
        // Busca heroes en un arreglo de objetos
        const hero = getHeroeById( id );
        // console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined si no existe', () => { 
        
        const id = 100;
        // Busca heroes en un arreglo de objetos
        const hero = getHeroeById( id );
        // console.log(hero);

        // Si queremos recibir null undefined o false
        expect( hero ).toBeFalsy();
     });

    //  TODO: getHeroesByOwner
    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        
        const owner = 'DC';

        // Busca heroes en un arreglo de objetos
        const heros = getHeroesByOwner( owner );
        // console.log(heroes);

        expect( heros.length ).toBe( 3 );

        expect( heros ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

        expect( heros ).toEqual( heroes.filter( heroe => heroe.owner === owner ) );
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 
        
        const owner = 'Marvel';

        // Busca heroes en un arreglo de objetos
        const heros = getHeroesByOwner( owner );
        // console.log(heroes);

        expect( heros.length ).toBe( 2 );

        expect( heros ).toEqual( heroes.filter( heroe => heroe.owner === owner ) );
    });
 })