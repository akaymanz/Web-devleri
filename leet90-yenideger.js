var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const dfs = (nums, i, arr) => {
        if(i === nums.length) {
            res.push(arr);
            return;
        }
        dfs(nums, i+1, arr);
        let newarr = arr.concat(nums[i]);
        dfs(nums, i+1, newarr);
    };
    dfs(nums, 0, []);
    return Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
};