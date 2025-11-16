/**
 * script.js
 * Handles the active state for the fixed "System Status Indicator" navigation.
 * Uses IntersectionObserver for high-performance scroll tracking.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Select all the sections we want to track
    const sections = document.querySelectorAll('.canvas-section');
    
    // Select all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) {
        console.warn('Portfolio sections or nav links not found. Navigation highlighting will not work.');
        return;
    }

    // This "line" is an invisible horizontal line 40% from the top of the viewport.
    // When a section crosses this line, it becomes the active one.
    // '-40% 0px -60% 0px' means the observation "root" is shrunk to a 1px line
    // at 40% from the top. This prevents multiple sections from being "active" at once.
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0 // triggers as soon as the line is crossed
    };

    /**
     * The callback function for the IntersectionObserver.
     * @param {IntersectionObserverEntry[]} entries - A list of entries being observed.
     */
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            // Get the ID of the section that just crossed our "line"
            const id = entry.target.getAttribute('id');
            
            // Find the corresponding navigation link that has an href matching the section's ID
            const currentNavLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                // 1. Remove 'active' class from ALL nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // 2. Add 'active' class to the CURRENT nav link
                if (currentNavLink) {
                    currentNavLink.classList.add('active');
                }
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer to watch each of the sections
    sections.forEach(section => {
        observer.observe(section);
    });

});