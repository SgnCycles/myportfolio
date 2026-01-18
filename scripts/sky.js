const skillsContainer = document.querySelector('.skills-container');
const bubblesCount = 200;

for (let i = 0; i < bubblesCount; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const bubbleSize = Math.floor(Math.random() * 5);
  bubble.style.width = `${bubbleSize}px`;
  bubble.style.height = `${bubbleSize}px`;

  const positionX = Math.floor(Math.random() * 100);
  const positionY = Math.floor(Math.random() * 100);
  bubble.style.left = `${positionX}%`;
  bubble.style.top = `${positionY}%`;

  bubble.style.backgroundColor = `rgba(188, 220, 255, ${Math.random() * 0.6 + 0.2}`;
  const opacity = Math.random() * 0.6 + 0.2;
  bubble.style.boxShadow =
  `0 0 6px rgba(188, 220, 255, ${opacity}),
  0 0 12px rgba(188, 220, 255, ${opacity * 0.6}),
  0 0 18px rgba(188, 220, 255, ${opacity * 0.3})`;

bubble.animate(
  [
    {transform: 'scale(1)', opacity: opacity},
    {transform: 'scale(1.3)', opacity: 1},
    {transform: 'scale(1)', opacity: opacity},
  ],
  {
    duration: Math.random() * 2000 + 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
  }
)
  skillsContainer.appendChild(bubble);
}