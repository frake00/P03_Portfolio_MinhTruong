
// Add this JavaScript to toggle the 'clicked' class on click
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('clicked');
    });
  });
  