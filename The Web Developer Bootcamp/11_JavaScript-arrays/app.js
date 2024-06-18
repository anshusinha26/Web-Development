// an array 'colors' to store different color names
let colors = ["red", "green", "blue"];

console.log(colors);
console.log(colors[1]);

colors[3] = "blue";
console.log(colors);

colors[1] = "purple";
console.log(colors);

colors[10] = "yellow";
console.log(colors);

// pushing an element in an array
colors.push("indigo");
console.log(colors);

// popping an element from an array (the popped element is returned)
poppedColor = colors.pop();
console.log(colors);
console.log(`Popped color was ${poppedColor}`);

// shifting (removing) an element from an array (the shifted element is returned)
shiftedColor = colors.shift();
console.log(colors);
console.log(`Shifted color was ${shiftedColor}`);

// unshifting (adding) an element to in an array
colors.unshift("red");
console.log(colors);

// 'concat()' method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// 'includes()' method
console.log(arr1.includes(1));

// 'indexOf()' method
console.log(arr2.indexOf(5));

// slicing an array
console.log(arr1.slice(0, 2));

// splicing an array
arr2.splice(1, 0, 10); // (insert at idx 1, remove 0 elements, 10 was inserted at idx 1)
console.log(arr2);

const nums = [1, 2, 3];
console.log(nums);

nums[0] = 4;
console.log(nums);

// num = [1, 2, 5];    // error

// Multi-dimensional arrays
const nums2D = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(nums2D[0]);
console.log(nums2D[1]);
console.log(nums2D);
