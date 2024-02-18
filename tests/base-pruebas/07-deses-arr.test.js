import {retornaArreglo} from "../../src/base-pruebas/base-pruebas/07-deses-arr.js";

describe('Tests 07 file', () => {
    it('should get deses arr', () => {
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
    });
});