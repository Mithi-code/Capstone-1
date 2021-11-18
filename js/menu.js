const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.hamburger');

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
});

loginBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  document.querySelector('body').style.overflow = 'unset';
});

document.querySelectorAll('.modal a').forEach((a) => {
  a.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  });
});
