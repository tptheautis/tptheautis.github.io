//navbar
const navbar = document.getElementById('navbar');

//menu container
const menu = document.createElement('div');
menu.classList.add('menu');

//Github Icon
const githubIcon = document.createElement('img');
githubIcon.classList.add('githubIcon');
githubIcon.src = '/src/img/github.png'

//Linkedin Icon

const linkedinIcon = document.createElement('img');
linkedinIcon.classList.add('linkedinIcon');
linkedinIcon.src = '/src/img/linkedin.png'

// Add icons to page
navbar.append(menu)
menu.append(githubIcon);
menu.append(linkedinIcon);