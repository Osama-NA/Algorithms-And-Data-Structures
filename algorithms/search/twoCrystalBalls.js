// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

const twoCrystalBalls = (breaks) => {
    // We need to keep jumping square root of n through the array 
    // until we find a breaking point, then go back square root of n
    // and move forward from there to the next breaking point
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jumpAmount

    for(i; i < breaks.length; i+=jumpAmount){
        if(breaks[i]){
            break
        }
    }

    i -= jumpAmount

    for(let j=0; j <= jumpAmount && i < breaks.length; j++, i++){
        if(breaks[i]){
            return i
        }
    }

    return -1
}

module.exports = twoCrystalBalls