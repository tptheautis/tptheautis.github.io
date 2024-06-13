//menuOne container
const menuOne = document.getElementById('menuOne')

//menuTwo container
const menuTwo = document.createElementById('div')
menuTwo.classList.add('menuTwo');

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
menuOne.append(menuTwo)
menuTwo.append(githubIcon);
menuTwo.append(linkedinIcon);