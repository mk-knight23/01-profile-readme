// vNext: Keyboard navigation
const sections = Array.from(document.querySelectorAll('section[id]'));
let currentSectionIndex = 0;

document.addEventListener('keydown', (e) => {
    // Only handle arrow keys when not focusing on inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Update current section index based on scroll position
    const scrollY = window.pageYOffset;
    sections.forEach((section, index) => {
        if (scrollY >= section.offsetTop - 150 && scrollY < section.offsetTop + section.offsetHeight) {
            currentSectionIndex = index;
        }
    });
});

// vNext: Keyboard shortcuts modal
const shortcutsModal = document.getElementById('shortcuts-modal');
const shortcutsOverlay = document.getElementById('shortcuts-overlay');
const shortcutsClose = document.getElementById('shortcuts-close');

function toggleShortcutsModal(show) {
    if (show) {
        shortcutsModal.classList.add('active');
        shortcutsModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    } else {
        shortcutsModal.classList.remove('active');
        shortcutsModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    // Toggle shortcuts modal with ? key
    if (e.key === '?' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        toggleShortcutsModal(!shortcutsModal.classList.contains('active'));
    }

    // Close modal with Escape
    if (e.key === 'Escape' && shortcutsModal.classList.contains('active')) {
        toggleShortcutsModal(false);
    }
});

shortcutsOverlay?.addEventListener('click', () => toggleShortcutsModal(false));
shortcutsClose?.addEventListener('click', () => toggleShortcutsModal(false));

// vNext: Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update current section index
            const index = sections.indexOf(target);
            if (index !== -1) currentSectionIndex = index;
        }
    });
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

// Active nav highlighting
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// vNext: Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            const tech = card.getAttribute('data-tech') || '';

            if (filter === 'all' ||
                category.toLowerCase().includes(filter) ||
                tech.toLowerCase().includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
