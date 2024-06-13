/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//menuTwo container\nconst menuTwo = document.getElementById('menuTwo')\nmenuTwo.classList.add('menuTwo');\n\n//Github Icon\nconst githubIcon = document.createElement('img');\ngithubIcon.classList.add('githubIcon');\ngithubIcon.src = 'src/img/githubIcon.png'\n\n//Linkedin Icon\n\nconst linkedinIcon = document.createElement('img');\nlinkedinIcon.classList.add('linkedinIcon');\nlinkedinIcon.src = 'src/img/linkedinIcon.png'\n\n//Image Links\ngithubIcon.onclick = function() {\n    window.open(\"https://github.com/tptheautis\");\n};\n\n// Add icons to page\nmenuTwo.append(githubIcon);\nmenuTwo.append(linkedinIcon);\n\n//# sourceURL=webpack://tptheautis.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;