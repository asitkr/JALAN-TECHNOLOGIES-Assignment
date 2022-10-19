let arr = [2, 4, 6, 8, 10];
// 10, 2, 8, 4, 6

let n = arr.length;

function rearrange(arr, n) {
    
    if(n === 0) {
        return;
    }

    let nums = new Array(n);
    let max = n-1;
    let min = 0;
    
    let i = 0;
    while(i < n) {
        if(i % 2 === 0) {
            nums[i] = arr[max--];
        }
        else {
            nums[i] = arr[min++];
        }
        i++;
    }
    
    for (let j = 0; j < n; j++)
        arr[j] = nums[j];
    
}

// Print Original Array
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

// Function for rearranging
rearrange(arr, n);

// Print Modified Array
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}