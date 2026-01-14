const projectContainer = document.querySelector('.projects-card-container');
const projects = [];

function MyProject(image, title, link, icon, alt, ariaLabel) {
  this.image = image,
  this.title = title,
  this.link = link,
  this.icon = icon,
  this.alt = alt,
  this.ariaLabel = ariaLabel,
  projects.push(this)
};

// testing
new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

new MyProject ('./images/project_test.webp', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.webp', 'Project image thumbnail', 'Visit my project');

projects.forEach(project => {
  const card = document.createElement('div');
  const cardImage = document.createElement('div');
  const image = document.createElement('img');
  const cardTitle = document.createElement('div');
  const title = document.createElement('p');
  const cardLink = document.createElement('div');
  const link = document.createElement('a');
  const icon = document.createElement('img');

  card.classList.add('project-card');
  cardImage.classList.add('project-card-image');
  image.classList.add('project-image');
  cardTitle.classList.add('project-card-title');
  title.classList.add('project-title');
  cardLink.classList.add('project-card-link');
  link.classList.add('project-link');
  icon.classList.add('card-icon');

  image.src = project.image;
  image.alt = project.alt;
  image.width = 100;
  image.height = 100;
  link.href = project.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', project.ariaLabel);
  title.textContent = project.title;
  icon.src = project.icon;
  icon.alt = "github button";

  projectContainer.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardLink);

  cardImage.appendChild(image);
  cardTitle.appendChild(title);
  cardLink.appendChild(link);
  link.appendChild(icon);
})