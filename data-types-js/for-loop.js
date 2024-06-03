
function call_user_value(change_type){
    let sum=0
    for(let i=0; i<=change_type; i++){
        sum+=i 
    }
    return sum
}



let user_input=prompt("user value");
let change_type=parseInt(user_input);

let call=call_user_value(change_type)
console.log(call);