const myform = document.querySelector('form');
myform.addEventListener('submit', validateForm);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener("invalid", () => {
        input.classList.add('error');
    });
    input.addEventListener("focus", () => {
        if (input.checkValidity && (input.value > 1)){
            //nope
            input.classList.remove('error');
        }
    })
})

function checkInput(t){
    if (t.checkValidity){
        t.classList.remove('error');
    }
}

function validateForm(e){
    const errors = document.querySelectorAll('.error');
    errors.forEach(err => {
        if (err.checkValidity){
            err.classList.remove('error');
        }
    })

    console.log('hello');
    const form = e.target;
    if (form.checkValidity()){
        console.log('true');
    } else {
        console.log('false');
        e.preventDefault();
    }
}

// function that checks value of password and confirm password so they match