document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');

    if (!carousel || !carouselContainer) return; // Safety check

    // Remove any existing clones to avoid duplication
    carousel.querySelectorAll(".clone").forEach(clone => clone.remove());

    // Clone all original cards
    const originalCards = Array.from(carousel.children);
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add("clone"); // Mark clones
        carousel.appendChild(clone);
    });

    // Scrolling variables
    let scrollAmount = 0;
    let speed = 1.2; // Adjust speed for smoothness

    function animateScroll() {
        scrollAmount -= speed;
        if (scrollAmount <= -carousel.scrollWidth / 2) {
            scrollAmount = 0; // Reset when half of the carousel scrolls
        }
        carousel.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(animateScroll);
    }

    animateScroll(); // Start animation loop

    // Pause scrolling on hover
    carouselContainer.addEventListener('mouseenter', () => { speed = 0; });
    carouselContainer.addEventListener('mouseleave', () => { speed = 1.2; });

    // Reset position on window resize
    window.addEventListener('resize', () => { scrollAmount = 0; });
});
