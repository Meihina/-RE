//插排
function insertSort(arr){
    for (let j = 1;j < arr.length ; j++){
        let index = j;  
        for (let i = j - 1;i >= 0;i--){ 
            if(arr[index] < arr[i]){ 
                [arr[i],arr[index]] = [arr[index],arr[i]];  
                index = i;  
            }
        }
    }
    return arr
}