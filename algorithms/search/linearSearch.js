// Linear Search is O(N)

const linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return true;
        }
    }

    return false;
}

module.exports = linearSearch