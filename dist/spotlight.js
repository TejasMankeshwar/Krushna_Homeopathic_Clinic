document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-spotlight');
  
  cards.forEach(card => {
    // Read spotlight color from attribute or default to theme's secondary blue
    const spotlightColor = card.getAttribute('data-spotlight-color') || 'rgba(50, 103, 137, 0.25)';
    
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--spotlight-color', spotlightColor);
    });
  });
});
