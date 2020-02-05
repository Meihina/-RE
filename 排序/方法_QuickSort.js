//快排
function QuickSortM1(arr){
    if (arr.length < 1) {
        return arr
    }

    let now = arr[0]
    let left = []
    let right = []
    for(let i = 1;i < arr.length ;i++){
        if (arr[i] < now) {
            left.push(arr[i])
        }else if (arr[i] > now) {
            right.push(arr[i])
        }
    }

    return QuickSortM1(left).concat([now],QuickSortM1(right))
}