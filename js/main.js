document.addEventListener('DOMContentLoaded', function() {

    // --- Project Gallery Filter ---
    const filterBar = document.querySelector('.filter-bar');

    if (filterBar) {
        const filterButtons = filterBar.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery .gallery-item');

        filterBar.addEventListener('click', (e) => {
            // Ensure a button was clicked
            if (!e.target.matches('.filter-btn')) return;

            // Remove active class from all buttons and add to the clicked one
            filterButtons.forEach(button => button.classList.remove('active'));
            e.target.classList.add('active');

            const filter = e.target.dataset.filter;

            galleryItems.forEach(item => {
                // Hide the item first
                item.style.display = 'none';

                // If the filter is 'all' or the item's category matches the filter, show it
                if (filter === 'all' || item.dataset.category === filter) {
                    // Use a more robust display property if you were using something other than 'block'
                    item.style.display = 'block';
                }
            });
        });
    }

    // You can add more general JavaScript functionality here if needed in the future.
    // For example, a mobile navigation toggle.

});
