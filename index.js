function largestSubarraySum(array){
    let len = array.length
    let sum = 0
    let count = 0 
    let finalArray = []
    let answer = []

    for (let a=0; a<len; a++) {
        let sum = 0

        for (let b=a; b<len; b++ ) {
            let tuple = []
            for (let c=a; c<=b; c++){
                count ++
                tuple.push(array[c])
            }
            finalArray.push(tuple)
        }
    }

    finalArray.forEach(arr => {
        let innerSum = 0
        arr.forEach(num => innerSum += num)
        if (innerSum > sum){
            sum = innerSum
            answer = arr
        }
    })
    console.log("The Answer Is...", answer, "And its sum is..", sum)
    return sum
}
