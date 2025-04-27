let isScrolling = false;

function scrollToSection(direction) {
    if (isScrolling) return;
    isScrolling = true;

    const sectionHeight = window.innerHeight;
    const currentScroll = window.scrollY;

    const targetPosition = currentScroll + direction * sectionHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    setTimeout(() => isScrolling = false, 800);
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollToSection(1);
    } else {
        scrollToSection(-1);
    }
});

let startY = 0;
window.addEventListener('touchstart', (event) => {
    startY = event.touches[0].pageY;
});
window.addEventListener('touchend', (event) => {
    const endY = event.changedTouches[0].pageY; 
    if (startY > endY) {
        scrollToSection(1);
    } else {
        scrollToSection(-1);
    }
});
