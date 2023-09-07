// get html elements
const subscribe = document.querySelector("#subscribe")
const emailInput = document.querySelector('#email')
const errorEmailSpan = document.querySelector('.error__email')
const signUp = document.querySelector('.sign__up')
const success = document.querySelector('.success')
const holdEmail = document.querySelector('.hold_email')
const btnDismiss = document.querySelector('#btn_dismiss')

const form = document.getElementById("form")

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const handleSubscribe = (event) => {
  event.preventDefault()
  // Get the email input element
  const email = emailInput.value

  if(!validateEmail(email)){
    addWarning()
  }else{
    removeWarning()
    removeSignUpShowSuccess()
    holdEmail.textContent = email
  }
}


const addWarning = () => {
  emailInput.classList.add('error__email__input')
  errorEmailSpan.style.display = 'block'
}
const removeWarning = () => {
  emailInput.classList.remove('error__email__input')
  errorEmailSpan.style.display = 'none'
}

const removeSignUpShowSuccess = () => {
  signUp.style.display = 'none'
  success.style.display = 'block'
}

// attach event listener
form.addEventListener("submit", handleSubscribe)
btnDismiss.addEventListener("click", () => {
  location.reload()
})