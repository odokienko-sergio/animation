document.getElementById('logo').addEventListener('click', function() {
    const menu = document.getElementById('mobile-nav');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-nav').classList.add('hidden');
});

/*  Carousel  */
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const newTranslateValue = -110 * currentIndex + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTranslateValue})`;
}

/*  Cursor  */
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursorTwo.style.left = `${e.clientX}px`;
    cursorTwo.style.top = `${e.clientY}px`;
});

document.querySelectorAll('.hover-target').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.classList.add('custom-cursor__hover');
        cursorTwo.classList.add('custom-cursor__innerhover');
    });
    elem.addEventListener('mouseleave', () => {
        cursor.classList.remove('custom-cursor__hover');
        cursorTwo.classList.remove('custom-cursor__innerhover');
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        const rect = item.getBoundingClientRect();
        const mouseY = event.clientY - rect.top;

        if (mouseY < rect.height / 2) {
            // Mouse entered from the top
            item.style.transform = 'translateY(3px)';
        } else {
            // Mouse entered from the bottom
            item.style.transform = 'translateY(-3px)';
        }
    });

    item.addEventListener('mouseleave', () => {
        // Reset the position when the mouse leaves
        item.style.transform = 'translateY(0)';
    });
});


