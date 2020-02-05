// leetcode 165. 比较版本号  难度中等

// 比较两个版本号 version1 和 version2。
// 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

var compareVersion = function(version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')
    let longer = []
    if(version1.length > version2.length){
        longer = version1
    }else{
        longer = version2
    }

    for(let i = 0;i < longer.length;i++){
        if(version2[i] && version1[i]){
            if(parseInt(version1[i]) > parseInt(version2[i])){
                return 1
            }else if(parseInt(version1[i]) < parseInt(version2[i])){
                return -1
            }
        }else{
            if(longer[i] == 0){
                continue
            }else{
                return longer == version1 ? 1 : -1
            }
        }
    }
    return 0
};