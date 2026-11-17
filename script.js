const header = document.getElementById('header');
const scrollBtn = document.getElementById('scrollTopBtn');
const menuBtn = document.getElementById('menu-btn');
const navigation = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.navigation a');
const reveals = document.querySelectorAll('.reveal');
const progressBars = document.querySelectorAll('.progress');
const whatsappForm = document.getElementById('whatsappForm');
let skillsAnimated = false;

if (header && scrollBtn) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 50);
        scrollBtn.classList.toggle('active', window.scrollY > 500);
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (menuBtn && navigation) {
    menuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navigation) {
            navigation.classList.remove('active');
        }

        const icon = menuBtn ? menuBtn.querySelector('i') : null;
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

function handleScrollAnimations() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });

    const skillsSection = document.getElementById('skills-bars');
    if (skillsSection && !skillsAnimated) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        if (skillsTop < windowHeight - 80) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
            skillsAnimated = true;
        }
    }
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

if (whatsappForm) {
    const nameInput = document.getElementById('waName');
    const serviceInput = document.getElementById('waService');
    const messageInput = document.getElementById('waMessage');

    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!nameInput || !serviceInput || !messageInput) {
            return;
        }

        const name = nameInput.value.trim();
        const service = serviceInput.value.trim();
        const message = messageInput.value.trim();

        const phoneNumber = "9647710270711";
        const fullText = `مرحباً مهندس أبو كيان، أنا ${name}%0Aنوع المشروع: ${service}%0Aالرسالة: ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullText}`;

        window.open(whatsappURL, '_blank');
        whatsappForm.reset();
    });
}
