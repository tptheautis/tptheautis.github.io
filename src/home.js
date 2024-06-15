const body = document.getElementById('body');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('homeContainer');

function homePage() {

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

    //Images
    const javascriptIcon = document.createElement('img');
    javascriptIcon.classList.add('toolIcons');
    javascriptIcon.src = 'src/img/JavaScript.png';

    const htmlIcon = document.createElement('img');
    htmlIcon.classList.add('toolIcons');
    htmlIcon.src = 'src/img/HTML5.png';

    const cssIcon = document.createElement('img');
    cssIcon.classList.add('toolIcons');
    cssIcon.src = 'src/img/CSS3.png';

    const nodejsIcon = document.createElement('img');
    nodejsIcon.classList.add('toolIcons');
    nodejsIcon.src = 'src/img/Node.js.png';

    const webpackIcon = document.createElement('img');
    webpackIcon.classList.add('toolIcons');
    webpackIcon.src = 'src/img/Webpack.png';
    
    const postgresIcon = document.createElement('img');
    postgresIcon.classList.add('toolIcons');
    postgresIcon.src = 'src/img/PostgresSQL.png';

    const awsIcon = document.createElement('img');
    awsIcon.classList.add('toolIcons');
    awsIcon.src = 'src/img/aws.png';

    const gitIcon = document.createElement('img');
    gitIcon.classList.add('toolIcons');
    gitIcon.src = 'src/img/Git.png';

    const npmIcon = document.createElement('img');
    npmIcon.classList.add('toolIcons');
    npmIcon.src = 'src/img/NPM.png';

    body.append(homeContainer);
    homeContainer.append(homeTitleContainer);
    homeContainer.append(toolsContainer);
    toolsContainer.append(javascriptIcon, htmlIcon, cssIcon, nodejsIcon, webpackIcon, awsIcon, postgresIcon, gitIcon, npmIcon);
    homeTitleContainer.append(theautisPersonsContainer);
    theautisPersonsContainer.append(theautisPersons);
    homeTitleContainer.append(fullstackDeveloperContainer);
    fullstackDeveloperContainer.append(fullstackDeveloper);
    const homeButton = document.getElementById('homeButton');
}

export { homeContainer };

export default homePage;