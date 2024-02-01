const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputOption = document.getElementById('input-option');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function () {
    let nama = inputName.value;
    let email = inputEmail.value;

    if (nama) {
        const nameError = document.getElementById('name-error')
        nameError.classList.add('Error-message');

        nameError.innerText = "";
    }
    if (!nama) {
        const nameError = document.getElementById('name-error')
        nameError.classList.add('Error-message');

        nameError.innerText = "Nama Harus diisi!";
    }
    if (!email) {
        const emailError = document.getElementById('email-error')
        emailError.classList.add('Error-message');

        emailError.innerText = "Email Harus diisi!";
    } else {if (!email.match(mailformat)){
        const emailError = document.getElementById('email-error')
        emailError.classList.add('Error-message');

        emailError.innerText = "Format Email Harus benar!";
    } else if (email) {
        const emailError = document.getElementById('email-error')
        emailError.classList.add('Error-message');

        emailError.innerText = "";
    }
          
    }
    if (inputOption) {
        const optionError = document.getElementById('option-error')
        optionError.classList.add('Error-message');

        optionError.innerText = "";
    }
    if (!inputOption) {
        const optionError = document.getElementById('option-error')
        optionError.classList.add('Error-message');

        optionError.innerText = "Harus memilih!";
    }
    
});

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();

}
function updateSlide() {
    slideContainer.style.transform= 'translateX(${-currentIndex * slideWidth}px)'
}

setInterval(nextSlide, 50);