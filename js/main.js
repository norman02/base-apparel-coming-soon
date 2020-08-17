const icon = document.getElementById('icon')
const message = document.getElementById('message')
const submit = document.getElementById('submit')

const isEmail = (email)=> {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = ()=> {
    const input = document.getElementById('email').value
    if(!isEmail(input)) {
        icon.classList.add('error')
        message.classList.add('error')
    } else {
        icon.classList.remove('error')
        message.classList.remove('error')
        alert('Thank you for your submission')
    }
}

submit.addEventListener('click', e => {
    e.preventDefault()
    validate()
})