import homePage from './home';
import { homeContainer } from './home'; 

//Variables
const homeButton = document.getElementById('homeButton');
const projectButton = document.getElementById('projectButton');
const contactButton = document.getElementById('contactButton');
const body = document.getElementById('body');

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
githubIcon.addEventListener('click', function() {
    window.open("https://github.com/tptheautis");
});

linkedinIcon.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/theautis-persons-9670a21a1/");
})



const contactCard = document.createElement('img')
contactCard.classList.add('contactCard');
contactCard.src = 'src/img/contactCard.png';

// Add icons to page
menuTwo.append(githubIcon);
menuTwo.append(linkedinIcon);

//Functions
homeButton.addEventListener('click', function() {
    body.removeChild(contactCard);
    console.log('home');
    homePage();
})

projectButton.addEventListener('click', function() {

})

contactButton.addEventListener('click', function() {
    body.removeChild(homeContainer)
    body.append(contactCard);
    console.log('contact');
})

homePage();