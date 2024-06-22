/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   homeContainer: () => (/* binding */ homeContainer)\n/* harmony export */ });\nconst body = document.getElementById('body');\nconst homeContainer = document.createElement('div');\nhomeContainer.classList.add('homeContainer');\n\nconst homeTitleContainer = document.createElement('div')\nhomeTitleContainer.classList.add('homeTitleContainer');\n\nconst toolsContainer = document.createElement('div');\ntoolsContainer.classList.add('toolsContainer');\n\nconst theautisPersonsContainer = document.createElement('div');\ntheautisPersonsContainer.classList.add('theautisPersonsContainer')\nconst theautisPersons = document.createTextNode('THEAUTIS PERSONS')\n\nconst fullstackDeveloperContainer = document.createElement('div');\nfullstackDeveloperContainer.classList.add('fullstackDeveloperContainer');\nconst fullstackDeveloper = document.createTextNode('FULL STACK DEVELOPER');\n\n//Images\nconst javascriptIcon = document.createElement('img');\njavascriptIcon.classList.add('toolIcons');\njavascriptIcon.src = 'src/img/JavaScript.png';\n\nconst htmlIcon = document.createElement('img');\nhtmlIcon.classList.add('toolIcons');\nhtmlIcon.src = 'src/img/HTML5.png';\n\nconst cssIcon = document.createElement('img');\ncssIcon.classList.add('toolIcons');\ncssIcon.src = 'src/img/CSS3.png';\n\nconst nodejsIcon = document.createElement('img');\nnodejsIcon.classList.add('toolIcons');\nnodejsIcon.src = 'src/img/Node.js.png';\n\nconst webpackIcon = document.createElement('img');\nwebpackIcon.classList.add('toolIcons');\nwebpackIcon.src = 'src/img/Webpack.png';\n\nconst postgresIcon = document.createElement('img');\npostgresIcon.classList.add('toolIcons');\npostgresIcon.src = 'src/img/PostgresSQL.png';\n\nconst awsIcon = document.createElement('img');\nawsIcon.classList.add('toolIcons');\nawsIcon.src = 'src/img/aws.png';\n\nconst gitIcon = document.createElement('img');\ngitIcon.classList.add('toolIcons');\ngitIcon.src = 'src/img/Git.png';\n\nconst npmIcon = document.createElement('img');\nnpmIcon.classList.add('toolIcons');\nnpmIcon.src = 'src/img/NPM.png';\n\nhomeContainer.append(homeTitleContainer);\nhomeContainer.append(toolsContainer);\ntoolsContainer.append(javascriptIcon, htmlIcon, cssIcon, nodejsIcon, webpackIcon, awsIcon, postgresIcon, gitIcon, npmIcon);\nhomeTitleContainer.append(theautisPersonsContainer);\ntheautisPersonsContainer.append(theautisPersons);\nhomeTitleContainer.append(fullstackDeveloperContainer);\nfullstackDeveloperContainer.append(fullstackDeveloper);\n\nfunction homePage() {\n    body.append(homeContainer);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://tptheautis.github.io/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n \n\n//Variables\nconst homeButton = document.getElementById('homeButton');\nconst projectButton = document.getElementById('projectButton');\nconst contactButton = document.getElementById('contactButton');\nconst body = document.getElementById('body');\n\n//menuTwo container\nconst menuTwo = document.getElementById('menuTwo')\nmenuTwo.classList.add('menuTwo');\n\n//Github Icon\nconst githubIcon = document.createElement('img');\ngithubIcon.classList.add('githubIcon');\ngithubIcon.src = 'src/img/githubIcon.png'\n\n//Linkedin Icon\n\nconst linkedinIcon = document.createElement('img');\nlinkedinIcon.classList.add('linkedinIcon');\nlinkedinIcon.src = 'src/img/linkedinIcon.png'\n\n//Image Links\ngithubIcon.onclick = function() {\n    window.open(\"https://github.com/tptheautis\");\n};\n\nconst contactCard = document.createElement('img')\ncontactCard.classList.add('contactCard');\ncontactCard.src = 'src/img/image.png';\n\n// Add icons to page\nmenuTwo.append(githubIcon);\nmenuTwo.append(linkedinIcon);\n\n//Functions\nhomeButton.addEventListener('click', function() {\n    body.removeChild(contactCard);\n    console.log('home');\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\nprojectButton.addEventListener('click', function() {\n    console.log('project')\n    body.remove(_home__WEBPACK_IMPORTED_MODULE_0__.homeContainer);\n})\n\ncontactButton.addEventListener('click', function() {\n    body.removeChild(_home__WEBPACK_IMPORTED_MODULE_0__.homeContainer)\n    body.append(contactCard);\n    console.log('contact');\n})\n\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://tptheautis.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;