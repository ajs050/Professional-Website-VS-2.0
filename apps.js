// template_yjj2txf
// service_b939bzk
// zwmj78c78DIVSZt8W
let IsModelOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape')
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor
  
  for(let i = 0; i< shapes.length; i++) {
    const isOdd = i % 2 !== 0
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = 'translate(' + x * boolInt+ 'px,' + y * boolInt + 'px)'
  }
}


function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark--theme"
    }
    else {
        document.body.classList.remove('dark--theme')
    }
}
 

function contact(event) {
    const loading = document.querySelector('.model__overlay--loading')
    const success = document.querySelector('.model__overlay--sucess')
    loading.classList += ' model__overlay--visible' 
    event.preventDefault();
    emailjs
      .sendForm(
        'service_b939bzk',
        'template_yjj2txf',
        event.target,
        'zwmj78c78DIVSZt8W'
      ).then(() => {
        loading.classList.remove('model__overlay--visible')
        success.classList += ' model__overlay--visible' 
      }).catch(() => {
        loading.classList.remove('model__overlay--visible')
        alert(
            "The email service is temporarily unavailable. Please contact me directly on Email: ajsantos050@gmail.com "
        )
      })
}


function toggleModel() {
    if (IsModelOpen) {
        IsModelOpen = false
        return document.body.classList.remove("model--open")
    }
    IsModelOpen = true
    document.body.classList += " model--open"
}