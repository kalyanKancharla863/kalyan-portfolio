// Scroll top button
window.addEventListener('scroll', () => {
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

// Mobile menu
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// Typing effect
const roles = [
    'Java Developer',
    'Spring Boot Engineer',
    'Full Stack Developer',
    'DSA Enthusiast',
    'CS Undergraduate 2027'
];
let ri = 0, ci = 0, deleting = false;
function type() {
    const el = document.getElementById('typedText');
    const word = roles[ri];
    const cursor = '<span class="cursor">|</span>';
    if (deleting) {
        el.innerHTML = word.substring(0, ci--) + cursor;
        if (ci < 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 400); return; }
    } else {
        el.innerHTML = word.substring(0, ci++) + cursor;
        if (ci > word.length) { deleting = true; setTimeout(type, 1800); return; }
    }
    setTimeout(type, deleting ? 55 : 100);
}
type();

// Scroll animations + skill bars
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.fill').forEach(f => {
                f.style.width = f.getAttribute('data-w') + '%';
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .proj-card, .ach-card, .skill-card, .edu-item').forEach(el => {
    el.classList.add('fade-up');
    obs.observe(el);
});

// Active nav highlight
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? '#f47c20' : '';
    });
});

// Contact form
function sendMsg(e) {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = '✅ Message sent! Kalyan will get back to you soon.';
    e.target.reset();
    setTimeout(() => msg.textContent = '', 4000);
}
