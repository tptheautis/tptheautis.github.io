
//menuTwo container
const menuTwo = document.getElementById('menuTwo')
menuTwo.classList.add('menuTwo');

//Github Icon
const githubIcon = document.createElement('img');
githubIcon.classList.add('githubIcon');
githubIcon.src = 'githubIcon.png'

//Linkedin Icon

const linkedinIcon = document.createElement('img');
linkedinIcon.classList.add('linkedinIcon');
linkedinIcon.src = 'linkedinIcon.png'

//Image Links
githubIcon.onclick = function() {
    window.open("https://github.com/tptheautis");
};

// Add icons to page
menuTwo.append(githubIcon);
menuTwo.append(linkedinIcon);