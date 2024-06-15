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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction contactPage() {\n  const contact = document.getElementById('contact')\n  const body = document.getElementById('body');\n  const mainContactBox = document.createElement('div');\n  mainContactBox.classList.add('mainContactBox');\n  const contactMeContainer = document.createElement('div')\n  contactMeContainer.classList.add('contactMeContainer')\n  const contactMeText = document.createTextNode('Contact Me')\n\n  const emailContainer = document.createElement('div');\n  emailContainer.classList.add('emailContainer');\n  const emailTextContainer = document.createElement('div'); \n  emailTextContainer.classList.add('emailTextContainer');\n  const emailText = document.createTextNode('tptheautis@gmail.com');\n  const emailIcon = document.createElement('img');\n  emailIcon.classList.add('emailIcon');\n  emailIcon.src = 'src/img/email.png';\n\n  const phoneContainer = document.createElement('div');\n  phoneContainer.classList.add('phoneContainer');\n  const phoneTextContainer = document.createElement('div');\n  phoneTextContainer.classList.add('phoneTextContainer');\n  const phoneText = document.createTextNode('707-334-0591');\n  const phoneIcon = document.createElement('img')\n  phoneIcon.classList.add('phoneIcon');\n  phoneIcon.src = 'src/img/phone.png';\n\n  mainContactBox.append(contactMeContainer);\n  contactMeContainer.append(contactMeText);\n  \n  mainContactBox.append(emailContainer);\n  emailContainer.append(emailIcon)\n  emailContainer.append(emailTextContainer);\n  emailTextContainer.append(emailText);\n\n  mainContactBox.append(phoneContainer);\n  phoneContainer.append(phoneIcon)\n  phoneContainer.append(phoneTextContainer);\n  phoneTextContainer.append(phoneText);\n\n  contact.onclick = function() {\n  _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove()\n  body.append(mainContactBox);\n  console.log('working')\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://tptheautis.github.io/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   homeContainer: () => (/* binding */ homeContainer)\n/* harmony export */ });\nconst body = document.getElementById('body');\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('homeContainer');\n\nfunction homePage() {\n    const homeTitleContainer = document.createElement('div')\n    homeTitleContainer.classList.add('homeTitleContainer');\n\n    const toolsContainer = document.createElement('div');\n    toolsContainer.classList.add('toolsContainer');\n\n    const theautisPersonsContainer = document.createElement('div');\n    theautisPersonsContainer.classList.add('theautisPersonsContainer')\n    const theautisPersons = document.createTextNode('THEAUTIS PERSONS')\n\n    const fullstackDeveloperContainer = document.createElement('div');\n    fullstackDeveloperContainer.classList.add('fullstackDeveloperContainer');\n    const fullstackDeveloper = document.createTextNode('FULL STACK DEVELOPER');\n\n    //Images\n    const javascriptIcon = document.createElement('img');\n    javascriptIcon.classList.add('toolIcons');\n    javascriptIcon.src = 'src/img/JavaScript.png';\n\n    const htmlIcon = document.createElement('img');\n    htmlIcon.classList.add('toolIcons');\n    htmlIcon.src = 'src/img/HTML5.png';\n\n    const cssIcon = document.createElement('img');\n    cssIcon.classList.add('toolIcons');\n    cssIcon.src = 'src/img/CSS3.png';\n\n    const nodejsIcon = document.createElement('img');\n    nodejsIcon.classList.add('toolIcons');\n    nodejsIcon.src = 'src/img/Node.js.png';\n\n    const webpackIcon = document.createElement('img');\n    webpackIcon.classList.add('toolIcons');\n    webpackIcon.src = 'src/img/Webpack.png';\n    \n    const postgresIcon = document.createElement('img');\n    postgresIcon.classList.add('toolIcons');\n    postgresIcon.src = 'src/img/PostgresSQL.png';\n\n    const awsIcon = document.createElement('img');\n    awsIcon.classList.add('toolIcons');\n    awsIcon.src = 'src/img/AWS.png';\n\n    const gitIcon = document.createElement('img');\n    gitIcon.classList.add('toolIcons');\n    gitIcon.src = 'src/img/Git.png';\n\n    const npmIcon = document.createElement('img');\n    npmIcon.classList.add('toolIcons');\n    npmIcon.src = 'src/img/NPM.png';\n\n    body.append(homeContainer);\n    homeContainer.append(homeTitleContainer);\n    homeContainer.append(toolsContainer);\n    toolsContainer.append(javascriptIcon, htmlIcon, cssIcon, nodejsIcon, webpackIcon, awsIcon, postgresIcon, gitIcon, npmIcon);\n    homeTitleContainer.append(theautisPersonsContainer);\n    theautisPersonsContainer.append(theautisPersons);\n    homeTitleContainer.append(fullstackDeveloperContainer);\n    fullstackDeveloperContainer.append(fullstackDeveloper);\n    const homeButton = document.getElementById('homeButton');\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://tptheautis.github.io/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n//Page Rendering\n\n//menuTwo container\nconst menuTwo = document.getElementById('menuTwo')\nmenuTwo.classList.add('menuTwo');\n\n//Github Icon\nconst githubIcon = document.createElement('img');\ngithubIcon.classList.add('githubIcon');\ngithubIcon.src = 'src/img/githubIcon.png'\n\n//Linkedin Icon\n\nconst linkedinIcon = document.createElement('img');\nlinkedinIcon.classList.add('linkedinIcon');\nlinkedinIcon.src = 'src/img/linkedinIcon.png'\n\n//Image Links\ngithubIcon.onclick = function() {\n    window.open(\"https://github.com/tptheautis\");\n};\n\n// Add icons to page\nmenuTwo.append(githubIcon);\nmenuTwo.append(linkedinIcon);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://tptheautis.github.io/./src/index.js?");

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