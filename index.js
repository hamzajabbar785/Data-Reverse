// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

const dataReverse = (data) => {
    let arr = []
    let result = []

    while(data.length){
        arr.push(data.splice(0,8))
    }

    let newArr = arr.reverse()

    for(let el of newArr){
        for(let num of el){
            result.push(num)
        }
    }

    return result
}

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])

//Solution 2

const dataReverse = (data) => {
    let result = []

    while(data.length){
        result.push(...data.splice(-8))
    }

    return result
}

//Solution 3 

const dataReverse = (data) => {
    let result = []

    for(let i = 0; i < data.length; i += 8){
        result.unshift(...data.slice(i, i+8))
    }

    return result
}