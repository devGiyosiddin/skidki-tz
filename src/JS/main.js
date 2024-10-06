document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu-button');
    const menu = document.querySelector('.sitenav');

    burger.addEventListener('click', () => {
        menu.classList.toggle('sitenav--active');
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            menu.classList.remove('sitenav--active');
        }
    });

    const sliderDots = document.querySelectorAll('.toppromo-slider__dot');
    sliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            document.querySelectorAll('.toppromo-slider__dot').forEach(dot => {
                dot.classList.remove('toppromo-slider__dot--active');
            });
            this.classList.add('toppromo-slider__dot--active');
        });
    });


    const dots = document.querySelectorAll('.toppromo-slider__dot');
    const cardsContainer = document.querySelector('.toppromo-cards');

    function scrollToCard(index) {
        const cardWidth = document.querySelector('.toppromo-card').offsetWidth + 15;
        cardsContainer.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('toppromo-slider__dot--active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToCard(index);
        });
    });

    const leftButton = document.querySelector('.toppromo-left');
    const rightButton = document.querySelector('.toppromo-right');

    rightButton.addEventListener('click', () => {
        const currentIndex = Array.from(dots).findIndex(dot => dot.classList.contains('toppromo-slider__dot--active'));
        const nextIndex = (currentIndex + 1) % dots.length;
        scrollToCard(nextIndex);
    });

    leftButton.addEventListener('click', () => {
        const currentIndex = Array.from(dots).findIndex(dot => dot.classList.contains('toppromo-slider__dot--active'));
        const prevIndex = (currentIndex - 1 + dots.length) % dots.length;
        scrollToCard(prevIndex);
    });


});
