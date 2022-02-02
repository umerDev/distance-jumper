import { expect } from '@jest/globals';
import {CalcDistance, CalcSpeed} from '../Helper/Helper.js';


describe('Helper  tests', () => {
    test('Distance success', ()=> {
        const distance = CalcDistance(1,1,2,2);
        expect(distance).toEqual(expect.any(Number))
    });
    test('Distance fail', ()=> {
        expect(() => {
            CalcDistance(null,1,2,2);
        }).toThrow('Check input');
    });
    test('Calc speed success', () => {
        const speed = CalcSpeed(3,3);
        expect(speed).toEqual(expect.any(Number));
    })
})