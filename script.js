document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('.balloon').forEach(balloon => {
      if (balloon.classList.contains('active')) return;

      balloon.classList.add('active');
      setTimeout(() => {
        balloon.classList.remove('active');
      }, 1000);
    });
  });
});
