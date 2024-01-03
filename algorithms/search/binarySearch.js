// Binary Search is O(logN)

const binarySearch = (arr, n) => {
    let low = 0
    let high = arr.length

    do{
        let mid = Math.floor(low + ((high - low )/ 2))
        let value = arr[mid]

        if(value === n){
            return true
        }else if(value > n){
            high = mid
        }else{
            low = mid + 1
        }
    }while(low < high)

    return false;
}

module.exports = binarySearch