const burgerButton = document.querySelector('.burger-nav')
const links = document.querySelector('.links-nav-wrapper')
const regForm = document.querySelector('.reg-form-wrapper')
const personalDataButton = document.querySelector('.personal-data')

burgerButton.addEventListener('click', () => {
  links.classList.toggle('links-nav-wrapper-open')
})

personalDataButton.addEventListener('click', () => {
  regForm.classList.toggle('reg-form-wrapper-open')
  document.querySelector('body').classList.toggle('modal-open')
  window.scrollTo(0, 0);
})
