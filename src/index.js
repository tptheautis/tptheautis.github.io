import contactPage from './contact';

//Page Rendering

//menuTwo container
const menuTwo = document.getElementById('menuTwo')
menuTwo.classList.add('menuTwo');

//Github Icon
const githubIcon = document.createElement('img');
githubIcon.classList.add('githubIcon');
githubIcon.src = 'src/img/githubIcon.png'

//Linkedin Icon

const linkedinIcon = document.createElement('img');
linkedinIcon.classList.add('linkedinIcon');
linkedinIcon.src = 'src/img/linkedinIcon.png'

//Image Links
githubIcon.onclick = function() {
    window.open("https://github.com/tptheautis");
};

// Add icons to page
menuTwo.append(githubIcon);
menuTwo.append(linkedinIcon);

contactPage();