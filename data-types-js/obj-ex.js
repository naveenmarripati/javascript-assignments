let die=Math.trunc(Math.random()*6)+1 
let em=""
console.log(die)
while (die!==1){
    em+=die
    console.log("while-loop"+die)
    die=Math.trunc(Math.random()*6)+1
    if (die===6){
        console.log("if"+die)
    }
    console.log("while-loop-G"+die)
}
