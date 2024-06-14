

function homePage() {
    const body = document.getElementById('body');
    const homeTitleContainer = document.createElement('div')
    homeTitleContainer.classList.add('homeTitleContainer');

    const toolsContainer = document.createElement('div');
    toolsContainer.classList.add('toolsContainer');

    const theautisPersonsContainer = document.createElement('div');
    theautisPersonsContainer.classList.add('theautisPersonsContainer')
    const theautisPersons = document.createTextNode('THEAUTIS PERSONS')

    const fullstackDeveloperContainer = document.createElement('div');
    fullstackDeveloperContainer.classList.add('fullstackDeveloperContainer');
    const fullstackDeveloper = document.createTextNode('FULL STACK DEVELOPER');

    body.append(homeTitleContainer);
    homeTitleContainer.append(theautisPersonsContainer);
    theautisPersonsContainer.append(theautisPersons);
    homeTitleContainer.append(fullstackDeveloperContainer);
    fullstackDeveloperContainer.append(fullstackDeveloper);
    const home = document.getElementById('home');
    home.onclick = function() {
        body.remove();
    }
}

export default homePage;