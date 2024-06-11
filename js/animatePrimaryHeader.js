document.addEventListener('DOMContentLoaded', function() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    const initialPositions = [
        {element: img1, x: img1.offsetLeft, y: img1.offsetTop, speed: 0.3},
        {element: img2, x: img2.offsetLeft, y: img2.offsetTop, speed: 1}
    ];

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        initialPositions.forEach(pos => {
            const dx = mouseX - (pos.x + 25);
            const dy = mouseY - (pos.y + 25);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 10) {
                gsap.to(pos.element, {duration: pos.speed, x: mouseX - 25 - pos.x, y: mouseY - 25 - pos.y});
            } else {
                const angle = Math.atan2(dy, dx);
                const limitX = pos.x + 25 + 10 * Math.cos(angle);
                const limitY = pos.y + 25 + 10 * Math.sin(angle);
                gsap.to(pos.element, {duration: pos.speed, x: limitX - 25 - pos.x, y: limitY - 25 - pos.y});
            }
        });
    });
});
