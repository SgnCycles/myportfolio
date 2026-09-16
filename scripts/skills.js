const skillsSection = document.querySelector('.skills-card-container');

const listOfSkills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Version Control', 'Git', 'GitHub', 'React', "Nextjs", 'Tailwind', 'APIs', 'Testing', 'Jest'];


listOfSkills.forEach(skill => {
  const card = document.createElement('div');
  card.classList.add('skill-card');
  card.textContent = skill;

  skillsSection.appendChild(card);
})
