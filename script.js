//menu container
const menu = document.getElementById('menuTwo')

//Github Icon
const githubIcon = document.createElement('img');
githubIcon.classList.add('githubIcon');
githubIcon.src = 'github.png'

//Linkedin Icon

const linkedinIcon = document.createElement('img');
linkedinIcon.classList.add('linkedinIcon');
linkedinIcon.src = 'linkedin.png'

//Image Links
githubIcon.onclick = function() {
    window.open("https://github.com/tptheautis");
};

// Add icons to page
menu.append(githubIcon);
menu.append(linkedinIcon);