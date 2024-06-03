'use strict';

function fish_cutting(user_num,fish){
    return `each ${fish}: ${user_num} pieces`
}

function call_function(fish){
    let user=prompt("how many pieces cutting");
    let user_num=Number(user)
    let call_another_function=fish_cutting(user_num,fish);
    return call_another_function;
}


let fish=call_function("fish");
console.log(fish)
