/**
 * 01-profile-readme | Main JavaScript
 * Handles theme toggling, accessibility, and interactions
 */

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

const THEME_KEY = 'profile-theme';
const DARK_MODE = 'dark-mode';
const LIGHT_MODE = 'light-mode';

/**
 * Get the current theme from localStorage or system preference
 */
function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT_MODE : DARK_MODE;
}

/**
 * Apply theme to the document
 */
function applyTheme(theme) {
    document.body.classList.remove(DARK_MODE, LIGHT_MODE);
    document.body.classList.add(theme);

    if (themeIcon) {
        themeIcon.textContent = theme === DARK_MODE ? '🌙' : '☀️';
    }

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', theme === DARK_MODE ? '#0f172a' : '#f1f5f9');
    }

    localStorage.setItem(THEME_KEY, theme);
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
    const currentTheme = document.body.classList.contains(LIGHT_MODE) ? LIGHT_MODE : DARK_MODE;
    const newTheme = currentTheme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
    applyTheme(newTheme);
}

// Initialize theme
applyTheme(getPreferredTheme());

// Theme toggle event listener
themeToggle?.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? LIGHT_MODE : DARK_MODE);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Set focus for accessibility
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
        }
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Alt + T to toggle theme
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTheme();
    }
});

// Intersection Observer for lazy animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements after initial load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        fadeInObserver.observe(el);
    });
});
