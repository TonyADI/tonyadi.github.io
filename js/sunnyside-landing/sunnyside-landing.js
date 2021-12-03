const mobileMenu = document.getElementById('mobile-menu');
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
    const newDisplay = mobileMenu.style.display === 'block' ? 'none' : 'block';
    const newOpacity = burger.style.opacity === '0.5' ? '1' : '0.5';
    mobileMenu.style.display = newDisplay;
    burger.style.opacity = newOpacity;
});