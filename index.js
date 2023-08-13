const burgerButton = document.querySelector('.burger-nav')
const links = document.querySelector('.links-nav-wrapper')

const regForm = document.querySelector('.reg-form-wrapper')
const personalDataButton = document.querySelector('.personal-data')
const regFormButton = regForm.querySelector('button')
const regPass = document.getElementById('password')
const regPassRepeat = document.getElementById('passwordRepeat')
const regFormInputs = regForm.querySelectorAll('input')
const regFormCloseButton = document.querySelector('.close-form button')
const successSubmitModal = document.querySelector('.success-submit')

const showPassButton = document.querySelector('.showPassword svg')
const showPassRepeatButton = document.querySelector('.showPasswordRepeat svg')

const phoneInputs = document.querySelectorAll('[data-phone-pattern]');

const toTopFooter = document.querySelector('.to-top')

const successSubmit = () => {
  successSubmitModal.classList.toggle('success-submit-open')
  setTimeout(() => {
    successSubmitModal.classList.toggle('success-submit-open')
  }, 1000)
}

burgerButton.addEventListener('click', () => {
  links.classList.toggle('links-nav-wrapper-open')
})

personalDataButton.addEventListener('click', () => {
  regForm.classList.toggle('reg-form-wrapper-open')
  document.querySelector('body').classList.toggle('modal-open')
  window.scrollTo({top: 0, left: 0});
})

toTopFooter.addEventListener('click', (evt) => {
  evt.preventDefault()
  window.scrollTo({top: 0, behavior: 'smooth'});
})

regFormButton.addEventListener('click', (evt) => {
  if (regPass.value === regPassRepeat.value) {
    regPassRepeat.setCustomValidity('')
    document.querySelector('body').classList.toggle('modal-open')
    regForm.classList.toggle('reg-form-wrapper-open')
    successSubmit()
  } else {
    regPassRepeat.setCustomValidity('Пароли не совпадают')
  }
})

regFormCloseButton.addEventListener('click', () => {
  regForm.classList.toggle('reg-form-wrapper-open')
  document.querySelector('body').classList.toggle('modal-open')
  regFormInputs.forEach((el) => {
    el.value = ''
  })
})

showPassButton.addEventListener('click', () => {
  regPass.getAttribute('type') === 'password'
  ? regPass.setAttribute('type', 'text')
  : regPass.setAttribute('type', 'password')
})

showPassRepeatButton.addEventListener('click', () => {
  regPassRepeat.getAttribute('type') === 'password'
    ? regPassRepeat.setAttribute('type', 'text')
    : regPassRepeat.setAttribute('type', 'password')
})

regForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
})

const phoneMask = function (evt) {
  let el = evt.target,
    pattern = el.dataset.phonePattern,
    matrix_def = '+7(___) ___-__-__',
    matrix = pattern ? pattern : matrix_def,
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = evt.target.value.replace(/\D/g, '');
  el.value.length <= 17 ? el.setCustomValidity('Номер телефона не может быть таким коротким') : el.setCustomValidity('')

  if (def.length >= val.length) val = def;
  evt.target.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};

for (let elem of phoneInputs) {
  for (let ev of ['input', 'blur', 'focus']) {
    elem.addEventListener(ev, phoneMask);
  }
}
