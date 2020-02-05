// leetcode 56. 合并区间  难度中等

// 给出一个区间的集合，请合并所有重叠的区间。

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0;i < intervals.length - 1;i++){
        if(intervals[i][1] >= intervals[i+1][0] && intervals[i][1] <= intervals[i+1][1]){
            intervals.splice(i,2,[intervals[i][0],intervals[i+1][1]])
            i--
        }else if(intervals[i][1] >= intervals[i+1][0] && intervals[i][1] > intervals[i+1][1]){
            intervals.splice(i,2,intervals[i])
            i--
        }
    }
    return intervals
};