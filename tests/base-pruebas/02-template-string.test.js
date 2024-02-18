import {getSaludo} from "../../src/base-pruebas/base-pruebas/02-template-string.js";

describe('', () => {
    it('Given a good information', () => {
        const name = 'test';
        const info = getSaludo(name);
        expect(info).toBe(`Hola ${name}`);
    });
});