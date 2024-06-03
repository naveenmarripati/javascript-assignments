//== 
let a=5; 
let b="5";
if (a==b){
    console.log(a+b)
}
else{
    console.log("Not Equal")
}
//output 55
//===

if (a===b){
    console.log(a+b)
}
else{
    console.log("Not Equal")
}
//output Not Equal


let num_1=5; 
let num_2=6;

if (num_1!=num_2){
    console.log("Not Equal");
}
else{
    console.log("Equal");
}

// grater than or equal

if (num_2>=num_1){
    console.log("num_2 is grater than or equal to num_1")
}
else{
    console.log("num_2 is not grater than or equal to num_1")
}

//less than or equal

if (num_1<=num_2){
    console.log("num_2 is less than or equal to num_1")
}
else{
    console.log("num_2 is not less than or equal to num_1")
}


// Strings and Template Literals

let hero="jack sparrow"
let movie_name="pirates of the caribbean"
let template_literal=`Hero name ${hero} and movie name ${movie_name}`

