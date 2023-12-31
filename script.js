const myform = document.querySelector('form');
myform.addEventListener('submit', validateForm);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener("invalid", () => {
        input.classList.add('error');
    });
    input.addEventListener("blur", () => {
        if (input.checkValidity()){
            input.classList.remove('error');
        }
})
})

function validateForm(e){
    const errors = document.querySelectorAll('.error');
    errors.forEach(err => {
        if (err.checkValidity()){
            err.classList.remove('error');
        }
    })
    
    const form = e.target;
    if (form.checkValidity() && matchPwd()){
            console.log('true');
            e.preventDefault();
        } else {
            console.log('false');
            e.preventDefault();
        }
    }


function matchPwd(){
    const pwds = document.querySelectorAll('input[type="password"]');
    if (pwds[0].value === pwds[1].value){
        return true;
    } else {
        pwds.forEach(pwd => {
            pwd.classList.add('error');
        })
        return false;
    }
}