// template_yjj2txf
// service_b939bzk
// zwmj78c78DIVSZt8W

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

let IsModelOpen = false
function toggleModel() {
    if (IsModelOpen) {
        IsModelOpen = false
        return document.body.classList.remove("model--open")
    }
    IsModelOpen = true
    document.body.classList += " model--open"
}