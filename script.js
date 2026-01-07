document.addEventListener('DOMContentLoaded', () => {
    const parallaxWrappers = document.querySelectorAll('[data-parallax-speed]');
    
    // Mouse Parallax Logic
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate center relative mouse position (-1 to 1)
        const xRelative = (x - windowWidth / 2) / windowWidth;
        const yRelative = (y - windowHeight / 2) / windowHeight;

        parallaxWrappers.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 1;
            
            // Move opposite to mouse direction
            const xMove = xRelative * 20 * speed * -1; 
            const yMove = yRelative * 20 * speed * -1;

            el.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
});
