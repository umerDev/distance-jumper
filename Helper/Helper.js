export const CalcDistance = (x,y,xa,ya) => {
    if ([x,y,xa,ya].includes(undefined) || [x,y,xa,ya].includes(null))
        throw new Error('Check input');
    let distance = 0;
    let _x = Math.pow(x - xa,2);
    let _y = Math.pow(y - ya,2);
    distance = _x + _y
    return distance;
}

export const CalcSpeed = (reach, distance) => {
    let speed = 0;
    speed = Math.pow(reach - distance,2);
    return speed;
}

export const FilterResults = (data) => {
    return data.sort((a,b) => (b.speed - a.speed));
}