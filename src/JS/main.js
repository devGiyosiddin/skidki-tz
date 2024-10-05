document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menu-button');
    const menu = document.querySelector('.sitenav');

    // Открытие/закрытие меню по клику на бургер
    burger.addEventListener('click', () => {
        menu.classList.toggle('sitenav--active');
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger) {
            menu.classList.remove('sitenav--active');
        }
    });
});
