import {NetworkStationSpeed,PrintResults} from './NetworkSpeed.js';

//#region Variables

let networkStationData = [
    {x:0,y:0,reach:9},
    {x:20,y:20,reach:6},
    {x:10,y:0,reach:12},
    {x:5,y:5,reach:13},
    {x:99,y:25,reach:2},
];

let otherStationData = [
    {x:0,y:0},
    {x:100,y:100},
    {x:15,y:10},
    {x:18,y:18},
    {x:13,y:13},
    {x:25,y:99},
];
//#endregion
NetworkStationSpeed(networkStationData,otherStationData);

PrintResults();