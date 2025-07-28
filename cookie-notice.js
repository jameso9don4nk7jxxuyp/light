document.addEventListener('DOMContentLoaded', () => {
    const cookieNotice = document.getElementById('cookieNotice');
    const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
        cookieNotice.style.display = 'block';
    }

    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieNotice.style.display = 'none';
        });
    }
}); 