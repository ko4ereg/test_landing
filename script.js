// Получаем элементы слайдера
const slider = document.querySelector('.steps-slider_container');
const prevButton = document.querySelector('.button-left');
const nextButton = document.querySelector('.button-right');
const slides = Array.from(slider.querySelectorAll('.steps-card'));
const slideCount = slides.length;
let slideIndex = 0;


// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });


    if (slideIndex === 0) {
        prevButton.style.backgroundColor = '#D6D6D6';
        prevButton.classList.add('disabled');
    } else {
        prevButton.style.backgroundColor = '';
        prevButton.classList.remove('disabled');
    }

    if (slideIndex === slideCount - 1) {
        nextButton.style.backgroundColor = '#D6D6D6';
        nextButton.classList.add('disabled');
    } else {
        nextButton.style.backgroundColor = '';
        nextButton.classList.remove('disabled');
    }

    const dots = Array.from(document.querySelectorAll('.dot'));
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[slideIndex].classList.add('active');
}


// Обработчик события для точек
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        slideIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
    });
});

// Инициализация слайдера
updateSlider();

if (window.innerWidth < 1366) {

    function memberSlider() {
        const sliderMembers = document.querySelector('.members-slider_container');
        const navCounter = document.querySelector('.members_nav-counter');
        const prevButton = document.querySelector('.memberbutton-left');
        const nextButton = document.querySelector('.memberbutton-right');
        const membersSlides = Array.from(sliderMembers.querySelectorAll('.member-card'));
        const totalSlides = membersSlides.length;
        let currentSlide = 0;
        let interval = setInterval(nextSlide, 4000);

        function showSlide(slideIndex) {
            membersSlides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.style.display = 'flex';
                    slide.classList.add('slide-animation');
                } else {
                    slide.style.display = 'none';
                    slide.classList.remove('slide-animation');
                }
            });
            navCounter.textContent = `${slideIndex + 1}/${totalSlides}`;
        }

        function nextSlide() {
            clearInterval(interval);
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
            interval = setInterval(nextSlide, 4000);
        }

        function prevSlide() {
            clearInterval(interval);
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
            interval = setInterval(nextSlide, 4000);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);


        showSlide(currentSlide);

    }

    memberSlider();
}
if (window.innerWidth >= 1366) {

    function memberSlider() {
        const leftButton = document.querySelector(".memberbutton-left");
        const rightButton = document.querySelector(".memberbutton-right");
        const memberCards = document.querySelectorAll(".member-card");
        memberCards[0].style.display = "flex";
        memberCards[1].style.display = "flex";
        memberCards[2].style.display = "flex";
        memberCards[3].style.display = "none";
        memberCards[4].style.display = "none";
        memberCards[5].style.display = "none";
        let currentSlide = 0;
        document.querySelector(".members_nav-counter").textContent = `3/6`;

        leftButton.addEventListener("click", function () {
            if (currentSlide === 0) {
                memberCards[0].style.display = "none";
                memberCards[1].style.display = "none";
                memberCards[2].style.display = "none";
                memberCards[3].style.display = "flex";
                memberCards[4].style.display = "flex";
                memberCards[5].style.display = "flex";
                document.querySelector(".members_nav-counter").textContent = `6/6`;
                currentSlide = 1;
            } else {
                currentSlide = 0;
                memberCards[0].style.display = "flex";
                memberCards[1].style.display = "flex";
                memberCards[2].style.display = "flex";
                memberCards[3].style.display = "none";
                memberCards[4].style.display = "none";
                memberCards[5].style.display = "none";
                document.querySelector(".members_nav-counter").textContent = `3/6`;
            }



        });

        rightButton.addEventListener("click", function () {
            if (currentSlide === 0) {
                memberCards[0].style.display = "none";
                memberCards[1].style.display = "none";
                memberCards[2].style.display = "none";
                memberCards[3].style.display = "flex";
                memberCards[4].style.display = "flex";
                memberCards[5].style.display = "flex";
                document.querySelector(".members_nav-counter").textContent = `6/6`;
                currentSlide = 1;
            } else {
                currentSlide = 0;
                memberCards[0].style.display = "flex";
                memberCards[1].style.display = "flex";
                memberCards[2].style.display = "flex";
                memberCards[3].style.display = "none";
                memberCards[4].style.display = "none";
                memberCards[5].style.display = "none";
                document.querySelector(".members_nav-counter").textContent = `3/6`;
            }

        });
    };

    memberSlider();
}

