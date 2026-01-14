const skillsSection = document.querySelector('.skills-card-container');

const listOfSkills = ['HTML', 'CSS', 'Sass', 'Javascript', 'Version Control', 'Git', 'GitHub', 'Responsive Design', 'jQuery', 'Tailwind', 'APIs'];


listOfSkills.forEach(skill => {
  const card = document.createElement('div');
  card.classList.add('skill-card');
  card.textContent = skill;

  skillsSection.appendChild(card);
})