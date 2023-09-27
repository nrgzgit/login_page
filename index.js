// Toggle between Sign In & Sign Up Pages
function showPage(pageId) {
    // Hide all pages
    let pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    // Show the selected page
    let selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}
