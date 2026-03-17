document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let interval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('is-active'));
        dots.forEach(dot => dot.classList.remove('is-active'));

        slides[index].classList.add('is-active');
        dots[index].classList.add('is-active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Start autoplay
    startAutoPlay();
});
