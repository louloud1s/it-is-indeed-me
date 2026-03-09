let activeMetadata = null; // This stores the box we are currently hovering over

// 1. Find all your project links
const projectLinks = document.querySelectorAll('.artworks a');

projectLinks.forEach(link => {
    // When mouse enters a link, find the metadata INSIDE it
    link.addEventListener('mouseenter', () => {
        activeMetadata = link.querySelector('.metadata');
    });

    // When mouse leaves, stop tracking it
    link.addEventListener('mouseleave', () => {
        activeMetadata = null;
    });
});

// 2. Move ONLY the active box
window.addEventListener('mousemove', (e) => {
    if (activeMetadata) {
        activeMetadata.style.setProperty('--pointer-x', `${e.clientX}px`);
        activeMetadata.style.setProperty('--pointer-y', `${e.clientY}px`);
    }
});

