import { expect } from '@jest/globals';
import { array } from 'yargs';
import {NetworkStationSpeed} from '../NetworkSpeed.js';


describe('Network  tests', () => {
    let dummy = [{x:0,y:0,reach:9}];
    let dummy2 = [{x:30,y:20}];
    test('Network success', ()=> {
        const network = NetworkStationSpeed(dummy,dummy2);
        expect(network).toEqual(expect.any(Array));
        expect(network.length).toEqual(1);
    });
    test('N fail', ()=> {
        expect(() => {
            NetworkStationSpeed(null,null);
        }).toThrow('Check input');
    });
})