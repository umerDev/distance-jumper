import {CalcDistance,CalcSpeed,FilterResults} from './Helper/Helper.js';

let data = []; 


export const PrintResults = () => {
    for (let i = 0; i < data.length; i++) {
        let x = data[i].x;
        let y = data[i].y;
        let xa = data[i].xa;
        let ya = data[i].ya
        let speed = data[i].speed;
        let message = '';
        if (speed != 0)
            message = `Best network station for point ${x},${y} is ${xa},${ya} 
        with speed ${speed}`
        else
            message = `No network station within reach for point ${x},${y}`;
        console.log(message);
    }
}

export const NetworkStationSpeed = (networkStations,otherStations) => {
    if (networkStations?.length < 1 || networkStations == (null))
        throw new Error('Check input');

    for (let i = 0; i < networkStations.length; i++) {
        let x = networkStations[i].x;
        let y = networkStations[i].y;
        let reach = networkStations[i].reach;
        let xa = otherStations[i].x;
        let ya = otherStations[i].y

        let distanceBetweenPoints = CalcDistance(x,y,xa,ya)
        let finalDistance = Math.sqrt(distanceBetweenPoints);

        if(finalDistance > reach)
            data.push({'x':x,'y':y,'xa':xa,'ya':ya,'speed':0,'distance':finalDistance})
        else
            data.push({'x':x,'y':y,'xa':xa,'ya':ya,'speed':CalcSpeed(reach,finalDistance),'distance':finalDistance});
    }
    return FilterResults(data);
}

