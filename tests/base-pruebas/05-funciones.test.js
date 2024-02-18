import {getUser, getUsuarioActivo} from "../../src/base-pruebas/base-pruebas/05-funciones.js";

describe('tests for 05 file', () => {

    it('should getUser', () => {
        const userInfo = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userInfo);
    });

    it('should getUserActive', () => {
        const name = 'pablo';
        const userVerify = {
            uid: 'ABC567',
            username: 'pablo',
        }
        const user = getUsuarioActivo(name);
        expect(user).toEqual(userVerify);
    });
});