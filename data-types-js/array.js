let arr=[12,"banana","cat",65.5,34];
console.log(arr);
//array concat 

let arr_1=["dog",24,"bat"];
let concat=arr+","+arr_1;
console.log(concat);
console.log(arr+=","+arr_1);

//// Add Elements
arr.push("rat");
////  Remove Elements
console.log(arr);
arr.pop();
console.log(arr);

// Add Elements with unshift add in first

arr.unshift("cow");
console.log(arr);

////  Remove Elements with shift first

arr.shift("cow");
console.log(arr);

