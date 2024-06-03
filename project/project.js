
let myform=document.getElementById("myForm")
myform.addEventListener("submit" ,function(event){
    event.preventDefault();
})

let name_1=document.getElementById("name");
let name_error=document.getElementById("nameErrMsg")
name_1.addEventListener("blur",function(event){
    if(event.target.value===""){
        name_error.textContent="Required*"
        name_error.classList.add("error-message")
    }else{
        name_error.textContent=""
    }
})
let email=document.getElementById("email");
let emailErrMsg=document.getElementById("emailErrMsg")
email.addEventListener("blur",function(event){
    if(event.target.value===""){
        emailErrMsg.textContent="Required*"
        emailErrMsg.classList.add("error-message")
    }else{
        emailErrMsg.textContent=""
    }

})
let password=document.getElementById("password");
let passwordErrMsg=document.getElementById("passwordErrMsg")
password.addEventListener("blur",function(event){
    if(event.target.value===""){
        passwordErrMsg.textContent="Required*"
        passwordErrMsg.classList.add("error-message")
    }else{
        passwordErrMsg.textContent=""
    }
})

function login(){
    let a =document.getElementById("a");
    a.href="page-2.html";
    a.setAttribute("target","_blank");
}