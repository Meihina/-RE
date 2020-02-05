// 剑指Offer

// 二分查找算法

function binarySearch(SearchNum,array,first,last){
    if (first > last) {
        return false
    }
    let Mid = Math.floor((first + last)/2)
    if (array[Mid] == SearchNum) {
        return Mid
    }else if(SearchNum < array[Mid]){
        binarySearch(SearchNum,array,first,Mid - 1)
    }else{
        binarySearch(SearchNum,array,Mid + 1,last)
    }
}

// var arr = [1,2,3,4,5,6,7,11,14,18,27,33,36,37,37,37,38,38,45,46,48,76,77,86,89,90,90,90,90,100]
// console.log(binarySearch(33,arr,0,arr.length - 1))