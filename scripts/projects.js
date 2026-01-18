const userName = 'SgnCycles';
const githubApiUrl = `https://api.github.com/users/${userName}/repos`;
const projectContainer = document.querySelector('.projects-card-container');
const projects = [];

const callGithubApi = async () => {
  try {
    const response = await fetch(githubApiUrl);

    if (!response.ok) {
      throw new Error(`Failed to give response: ${response.status}`);
    }

    const data = await response.json();
    const filteredProjects = data.filter(repository => repository.topics?.includes('portfolio') && repository.visibility === 'public');

    const newRepoId = filteredProjects.map(repository => repository.id);

    for (let i = projects.length -1; i >= 0; i--) {
      if(!newRepoId.includes(projects[i].id)) {
        projects.splice(i, 1);
      }
    }

    filteredProjects.forEach(repository => {
      if (!projects.some(project =>project.id === repository.id)) {
        projects.push(repository);
      }
    });

    createProjectCards();

  } catch (error) {
    console.error("Error fetching API", error)
  }
};

const createProjectCards = () => {
projects.forEach(project => {
  const card = document.createElement('div');
  const cardImage = document.createElement('div');
  const image = document.createElement('img');
  const cardTitle = document.createElement('div');
  const title = document.createElement('p');
  const cardLink = document.createElement('div');
  const cardImageLink = document.createElement('a');
  const link = document.createElement('a');
  const icon = document.createElement('img');

  card.classList.add('project-card');
  cardImage.classList.add('project-card-image');
  cardImageLink.classList.add('project-image-link');
  image.classList.add('project-image');
  cardTitle.classList.add('project-card-title');
  title.classList.add('project-title');
  cardLink.classList.add('project-card-link');
  link.classList.add('project-link');
  icon.classList.add('card-icon');

  image.src = `https://api.microlink.io/?url=${project.homepage}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1920&viewport.height=1080`;
  image.onerror = () => {image.src = '../images/project_fallback.webp'};
  image.alt = `${project.description} image`;
  image.width = 100;
  image.height = 100;
  link.href = project.html_url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', project.description);
  cardImageLink.href = project.homepage;
  cardImageLink.target = '_blank';
  cardImageLink.rel = 'noopener noreferrer';
  cardImageLink.setAttribute('aria-label', project.description);
  title.textContent = project.description;
  icon.src = '../icons/github.webp';
  icon.alt = "github button";

  projectContainer.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardLink);

  cardImage.appendChild(cardImageLink);
  cardImageLink.appendChild(image);
  cardTitle.appendChild(title);
  cardLink.appendChild(link);
  link.appendChild(icon);
})
}

callGithubApi();