const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.querySelector('button[type="button"]');

console.log(username)

function validateForm(){
    if (username.value == '' || password.value == '') {
        alert('fill all input fields!');
    }
}

submitBtn.addEventListener('click', validateForm);

// function Validat678768eform(){
//     if (rex == ""){
//         alert ("Password not Entered");
//         return false;
//     }
// }
// function displayDate(){
//     document.getElementsByClassName("date").innerHTML = Date();
// }
// document.getElementsByClassName("btn").onclick = displayDate;