
const btnEmail = $element('.btn-email');
const inputEmail = $element('.email-input');
const inputKod = $element('.input-kod');
const passwordEmail = $element('.email-password');
const footerEmail = $element('.email-footer');
const emailKod = $element('.email-kod');
const fieldsKod = $element('.input-kod .fields-kod');
const inputPassword = $element('.email-password-input');

emailKod.addEventListener('input', checkCodeActivate);

let checkKey = true;

function checkCodeActivate(e){
    if(e.target.value.length === 9){
        btnEmail.classList.add('loading')
        btnEmail.style.background = '#DFE2E6';
        setTimeout(() =>{
            btnEmail.classList.remove('loading')
            btnEmail.style.background = '#00C58A';
            inputKod.classList.remove(active)
            passwordEmail.classList.add(active)
        }, 2000)

    }
}

inputEmail.addEventListener('keyup', function (e){
    document.getElementById('email-alert').classList.add(none);
    if(e.key === 'Enter'){
        startValidation()
    }
})
inputPassword.addEventListener('keyup', function (e){
    if(e.key === 'Enter'){
        startValidation()
    }
})

btnEmail.addEventListener('click', startValidation)

function startValidation(){
    if(checkKey){
        if(validateEmail(inputEmail.value)){
            checkKey = false;
            document.getElementById('email-alert').classList.add(none);
            inputKod.classList.add(active)
            footerEmail.style.display = 'none';
            inputEmail.setAttribute('disabled', 'true');
            inputEmail.parentElement.classList.add('disabled')
        } else {
            document.getElementById('email-alert').classList.remove(none);
        }
    } else {
        btnEmail.classList.add('loading')
        btnEmail.style.background = '#DFE2E6';
        setTimeout(() =>{
            btnEmail.classList.remove('loading')
            btnEmail.style.background = '#00C58A';
        }, 2000)
    }
}

$element('#def-fields-icon-edit-email').addEventListener('click', function (){
    $element('.input-kod').classList.remove(active);
    checkKey = true;
})

