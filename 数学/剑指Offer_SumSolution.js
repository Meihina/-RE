// 剑指Offer

// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）

// 递归方案
function Sumsolution_A(n){
    return n && (n + Sumsolution_A(n - 1))   //  && 短路原理，如果左边为true返回右值，如果左边为false返回左值
}

// 公式方案
function Sumsolution_B(n){
    return (Math.pow(n, 2) + n) >> 1;
}