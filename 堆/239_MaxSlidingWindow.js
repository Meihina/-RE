// leetcode 239. 滑动窗口最大值  难度困难

// 滑动窗口最大值
// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。 返回滑动窗口最大值

function maxSlidingWindow(arr,k){
    let windows = []
    let result = []
    //windows[0]是当前最大值下标,其余为最大值下标候补
    for (let i = 0;i < arr.length;i++){
        if(i - windows[0] > k - 1){  //判断当前最大值是否在窗口外,若是,删除之
            windows.shift()
        }

        let len = windows.length - 1 
        while(len >= 0 && arr[windows[len]] <= arr[i]){  //新进数若大于当前最大值或候补最大值，将后者下标删除
            len -= 1
            windows.pop()
        }

        windows.push(i)  //插入新进值下标
        if(i >= k - 1){
            result.push(arr[windows[0]])  //当窗口形成时，插入当前最大值
        }
    }
    return result
}