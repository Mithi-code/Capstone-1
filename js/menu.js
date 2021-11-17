const closeBtn =  document.querySelector('.close');
const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.hamburger');
const logo = document.querySelector('.logo-main')

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    loginBtn.style.display = 'block';
  });

  loginBtn.addEventListener('click', () => {
    loginBtn.style.display = 'none';
    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'none'
  });