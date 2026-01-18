const socialContainer = document.querySelector('.social-container');
const socialMediaIconsContainer = [];

function SocialIcon(image, link, description, alt, ariaLabel) {
  this.image = image,
  this.link = link,
  this.description = description,
  this.alt = alt,
  this.ariaLabel = ariaLabel,
  socialMediaIconsContainer.push(this)
};

new SocialIcon ('./icons/github.webp', 'https://github.com/SgnCycles', 'Find my codes here', 'Github button', 'Visit my GitHub profile');
new SocialIcon ('./icons/linkedin.webp', 'https://www.linkedin.com/in/signebekere/', 'Let\'s connect here', 'Linkedin button', 'Visit my Linkedin profile');
new SocialIcon ('./icons/follow_up.webp', 'mailto:signe.bekere@gmail.com', 'Email me here', 'Email button', 'Contact me via email');

socialMediaIconsContainer.forEach(icon => {
  const card = document.createElement('div');
  const link = document.createElement('a');
  const image = document.createElement('img');
  const description = document.createElement('p');

  card.classList.add('social-media');
  link.classList.add('social-link');
  image.classList.add('social-image');
  description.classList.add('social-description');

  image.src = icon.image;
  image.alt = icon.alt;
  image.width = 40;
  image.height = 40;
  link.href = icon.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', icon.ariaLabel);
  description.textContent = icon.description;

  link.appendChild(image);
  card.appendChild(link);
  link.appendChild(description);
  socialContainer.appendChild(card);
})