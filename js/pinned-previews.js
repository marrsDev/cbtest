// Add this script to your existing JavaScript file or in a <script> tag in the HTML

document.addEventListener("DOMContentLoaded", function () {
    const rightSection = document.querySelector(".right-section");
    const heroContent = document.querySelector(".hero-content");
    const leftSection = document.querySelector(".left-section");

    // Function to check scroll position
    function handleScroll() {
        const heroContentHeight = heroContent.offsetHeight;
        const scrollPosition = window.scrollY;

        // Calculate 70% of the hero content height
        const scrollThreshold = heroContentHeight * 0.4;

        if (scrollPosition < scrollThreshold) {
            // Pin the right section at the top
            rightSection.classList.add("pinned");
        } else {
            // Revert to normal position
            rightSection.classList.remove("pinned");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});