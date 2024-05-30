// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Listen for the first scroll event
    window.addEventListener('scroll', function onFirstScroll() {
        // Once the user scrolls, remove the event listener
        window.removeEventListener('scroll', onFirstScroll);
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    }, { once: true }); // { once: true } ensures that the event listener is only triggered once
});
