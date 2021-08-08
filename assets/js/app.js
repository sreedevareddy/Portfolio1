const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkaction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkaction))

// --------------------------Skills-------------------------
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
})

// --------------------------Qualification---------------------------
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// ----------------------------Services----------------------
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


document.querySelector(".contact_form").addEventListener("submit",SubmitForm);
function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);
    document.querySelector(".contact-form").reset();
    
    sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'sreedevareddy.3@gmail.com',
        Password: "terndgeaovtrsrmh",
        To: 'sreedevareddy.3@gmail.com',
        From: 'mypcsdkbr.3@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Mail sent successfully"))
}