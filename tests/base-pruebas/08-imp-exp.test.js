import {getHeroeById} from "../../src/base-pruebas/base-pruebas/08-imp-exp.js";

describe('Test imp exp', () => {
    it('should getHeroById', () => {
        const id= 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
});