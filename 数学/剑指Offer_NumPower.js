// 剑指Offer

// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function NumPower(base , exponent){
    if(exponent == 0 && base == 0){
        return undefined  // 没意义
    }else if(exponent == 0){
        return 1
    }else if(base == 0){
        return 0
    }

    let result = 1
    if(exponent > 0){
        for (let i = 0 ;i < exponent;i++){
            result *= base
        }
        return result
    }else if( exponent < 0){
        for(let i = 0;i < Math.abs(exponent);i++){
            result *= base
        }
        return 1/result
    }
}