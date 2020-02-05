//选排
let target = null;
function SelectSort(arr){
    for(let i = 0; i<arr.length ;i++){
        target = i;
        for(let j =i + 1; j<arr.length; j++){
            if(arr[target] > arr[j]){
                [arr[target],arr[j]] = [arr[j],arr[target]]
            }
        }
    }
    return arr 
}