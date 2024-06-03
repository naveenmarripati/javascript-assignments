//Logical Operators

let user_input=prompt("write your age")
let user_input_length=user_input.length

let age=Number(user_input)//Type Conversion string to number
if (typeof(age)==="number" && age<=100){
    if (age>=18){
        console.log("you are eligible for vote ")
    }
    else{
        console.log("your age is less than 18 years you are not eligible for vote")
    }
} else{
    if (typeof(age)==="number" && String(age)==="NaN"){
        console.log("Give a number not letters")
        console.log(typeof(age))
        console.log(age)
    }
    else{
        console.log("give the age below 100 or 100")
    }
}

