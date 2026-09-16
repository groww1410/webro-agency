const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`WEBRO project enquiry from ${form.get('name')}`);
  const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nBusiness: ${form.get('business')}\n\n${form.get('message')}`);
  document.querySelector('#form-note').textContent = 'Opening your email app with your project details…';
  window.location.href = `mailto:hello@yourwebro.com?subject=${subject}&body=${body}`;
});
