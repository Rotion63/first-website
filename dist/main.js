/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/civilEngineering.js":
/*!*********************************!*\
  !*** ./src/civilEngineering.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createCivilEngg(){
    const civilEngg = document.createElement('div');
    civilEngg.classList.add('civilEngg');
    civilEngg.textContent = "This is civil engineering section."

    return civilEngg;
}
function loadCivilEngg(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createCivilEngg());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCivilEngg);

/***/ }),

/***/ "./src/cmNotes.js":
/*!************************!*\
  !*** ./src/cmNotes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createCmNotes(){
    const cmNotes = document.createElement('div');
    cmNotes.classList.add('cmNotes');
    const noteHead = document.createElement('p');
    noteHead.classList.add('noteHead');
    noteHead.textContent = 'Construction Management Notes';
    cmNotes.appendChild(noteHead);

    cmNotes.appendChild(secondSemester());
    return cmNotes;
}

function secondSemester(){
    const secondSem = document.createElement('div');
    secondSem.classList.add('secondSem');
    secondSem.textContent = 'Second Semester'

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('noteContainer');
    secondSem.appendChild(noteContainer);

    let chapterName1 = 'chapter-1'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName1,'34'));

    let chapterName2 = 'chapter-2'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName2,'46'));

    let chapterName3 = 'chapter-3'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName3,'24'));

    let chapterName4 = 'chapter-4'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName4,'9'));

    let chapterName5 = 'chapter-5'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName5,'57'));

    let chapterName6 = 'chapter-6'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName6,'61'));

    let chapterName7 = 'chapter-7'
    noteContainer.appendChild(createNotesThumbnail('cpm',chapterName7,'52'));
    return secondSem;
}
function createNotesThumbnail(book,chapter,pages){
    const books = document.createElement('div');
    books.classList.add('books');

    const image = document.createElement('img');
    image.src = `./images/${book}.jpg`;
    image.width = 100;
    image.height = 100;
    image.classList.add('image');
    image.alt =`${book} was here.`

    const bookName= document.createElement('p');
    bookName.classList.add('bookName');
    bookName.textContent = book;

    const bookChapter= document.createElement('p');
    bookChapter.classList.add('bookChapter');
    bookChapter.textContent = chapter;
    var pdf =`./notes/constructionProjectManagement/${chapter}.pdf`;
    bookChapter.addEventListener('click',()=>{
        window.open(pdf);
    })

    const notePages = document.createElement('p');
    notePages.classList.add('pages');
    notePages.textContent = pages;

    books.appendChild(image);
    books.appendChild(bookName);
    books.appendChild(bookChapter);
    books.appendChild(notePages);

return books;
}

function loadCmNotes(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createCmNotes());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCmNotes);

/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _civilEngineering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./civilEngineering */ "./src/civilEngineering.js");
/* harmony import */ var _cmNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmNotes */ "./src/cmNotes.js");
/* harmony import */ var _softwares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./softwares */ "./src/softwares.js");
/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos */ "./src/videos.js");





function header(){
  const header = document.createElement('div');
  header.classList.add('header');

  header.appendChild(navMenu());
  return header;
}

function navMenu(){
  const navMenu = document.createElement('div');
  navMenu.classList.add('navMenu');

  const civilEnggButton = document.createElement('button');
  civilEnggButton.classList.add('navButton');
  civilEnggButton.textContent = 'Civil Engineering';

  civilEnggButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(civilEnggButton);
    (0,_civilEngineering__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })


  const cmNotesButton = document.createElement('button');
  cmNotesButton.classList.add('navButton');
  cmNotesButton.textContent = 'CM Notes';

  cmNotesButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(cmNotesButton);
    (0,_cmNotes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  })


  const loadSoftwaresButton = document.createElement('button');
  loadSoftwaresButton.classList.add('navButton');
  loadSoftwaresButton.textContent = 'Softwares';

  loadSoftwaresButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(loadSoftwaresButton);
    (0,_softwares__WEBPACK_IMPORTED_MODULE_2__["default"])();
  })

  const videosButton = document.createElement('button');
  videosButton.classList.add('navButton');
  videosButton.textContent = 'Videos';

  videosButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(videosButton);
    (0,_videos__WEBPACK_IMPORTED_MODULE_3__["default"])();
  })

  navMenu.appendChild(civilEnggButton);
  navMenu.appendChild(cmNotesButton);
  navMenu.appendChild(loadSoftwaresButton);
  navMenu.appendChild(videosButton);
  return navMenu;
}

function setActiveButton(button){
  const navList = document.querySelectorAll('.navButton');

  navList.forEach(button => {
    if(button !== this){
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function createMain(){
  const main = document.createElement('div');//this is the main element accesed from home,menu etc.
  main.classList.add('main');
  main.textContent = '';

  return main;
}

function footer(){
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created By Madhav Prasad Guragain';

  return footer;
}

function initialPageLoad(){
  const content = document.getElementById('content');

  content.appendChild(header());
  content.appendChild(createMain());
  content.appendChild(footer());

  setActiveButton(document.querySelector('.navButton'));//it will select the first element with .navButton class i.e. civilEnggButton;
  (0,_civilEngineering__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ }),

/***/ "./src/softwares.js":
/*!**************************!*\
  !*** ./src/softwares.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSoftwares(){
    const softwares = document.createElement('div');
    softwares.classList.add('Softwares');
    softwares.textContent = "This is Softwares Section";

    return softwares;
}
function loadSoftwares(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createSoftwares());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSoftwares);

/***/ }),

/***/ "./src/videos.js":
/*!***********************!*\
  !*** ./src/videos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createVideos(){
    const videos = document.createElement('div');
    videos.classList.add('videos');
    videos.textContent = "This is Videos Section";

    return videos;
}
function loadVideos(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createVideos());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadVideos);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPage */ "./src/initialPage.js");

(0,_initialPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1o1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRnFCO0FBQ1g7QUFDSTtBQUNOOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBYTtBQUNqQixHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVU7QUFDZCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdEO0FBQ3hELEVBQUUsNkRBQWE7QUFDZjs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ3hHOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDWjVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUNaekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QztBQUM1Qyx3REFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS8uL3NyYy9jaXZpbEVuZ2luZWVyaW5nLmpzIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvLi9zcmMvY21Ob3Rlcy5qcyIsIndlYnBhY2s6Ly9maXJzdC13ZWJzaXRlLy4vc3JjL2luaXRpYWxQYWdlLmpzIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvLi9zcmMvc29mdHdhcmVzLmpzIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvLi9zcmMvdmlkZW9zLmpzIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXJzdC13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNpdmlsRW5nZygpe1xuICAgIGNvbnN0IGNpdmlsRW5nZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdmlsRW5nZy5jbGFzc0xpc3QuYWRkKCdjaXZpbEVuZ2cnKTtcbiAgICBjaXZpbEVuZ2cudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgY2l2aWwgZW5naW5lZXJpbmcgc2VjdGlvbi5cIlxuXG4gICAgcmV0dXJuIGNpdmlsRW5nZztcbn1cbmZ1bmN0aW9uIGxvYWRDaXZpbEVuZ2coKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7Ly90aGlzIGxpbmUgd2lsbCByZW1vdmUgdGhlIGNvbnRlbnQgb2Ygb3RoZXJzIHRhYi5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNpdmlsRW5nZygpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRDaXZpbEVuZ2c7IiwiZnVuY3Rpb24gY3JlYXRlQ21Ob3Rlcygpe1xuICAgIGNvbnN0IGNtTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbU5vdGVzLmNsYXNzTGlzdC5hZGQoJ2NtTm90ZXMnKTtcbiAgICBjb25zdCBub3RlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3RlSGVhZC5jbGFzc0xpc3QuYWRkKCdub3RlSGVhZCcpO1xuICAgIG5vdGVIZWFkLnRleHRDb250ZW50ID0gJ0NvbnN0cnVjdGlvbiBNYW5hZ2VtZW50IE5vdGVzJztcbiAgICBjbU5vdGVzLmFwcGVuZENoaWxkKG5vdGVIZWFkKTtcblxuICAgIGNtTm90ZXMuYXBwZW5kQ2hpbGQoc2Vjb25kU2VtZXN0ZXIoKSk7XG4gICAgcmV0dXJuIGNtTm90ZXM7XG59XG5cbmZ1bmN0aW9uIHNlY29uZFNlbWVzdGVyKCl7XG4gICAgY29uc3Qgc2Vjb25kU2VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kU2VtLmNsYXNzTGlzdC5hZGQoJ3NlY29uZFNlbScpO1xuICAgIHNlY29uZFNlbS50ZXh0Q29udGVudCA9ICdTZWNvbmQgU2VtZXN0ZXInXG5cbiAgICBjb25zdCBub3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub3RlQ29udGFpbmVyJyk7XG4gICAgc2Vjb25kU2VtLmFwcGVuZENoaWxkKG5vdGVDb250YWluZXIpO1xuXG4gICAgbGV0IGNoYXB0ZXJOYW1lMSA9ICdjaGFwdGVyLTEnXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbCgnY3BtJyxjaGFwdGVyTmFtZTEsJzM0JykpO1xuXG4gICAgbGV0IGNoYXB0ZXJOYW1lMiA9ICdjaGFwdGVyLTInXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbCgnY3BtJyxjaGFwdGVyTmFtZTIsJzQ2JykpO1xuXG4gICAgbGV0IGNoYXB0ZXJOYW1lMyA9ICdjaGFwdGVyLTMnXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbCgnY3BtJyxjaGFwdGVyTmFtZTMsJzI0JykpO1xuXG4gICAgbGV0IGNoYXB0ZXJOYW1lNCA9ICdjaGFwdGVyLTQnXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbCgnY3BtJyxjaGFwdGVyTmFtZTQsJzknKSk7XG5cbiAgICBsZXQgY2hhcHRlck5hbWU1ID0gJ2NoYXB0ZXItNSdcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKCdjcG0nLGNoYXB0ZXJOYW1lNSwnNTcnKSk7XG5cbiAgICBsZXQgY2hhcHRlck5hbWU2ID0gJ2NoYXB0ZXItNidcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKCdjcG0nLGNoYXB0ZXJOYW1lNiwnNjEnKSk7XG5cbiAgICBsZXQgY2hhcHRlck5hbWU3ID0gJ2NoYXB0ZXItNydcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKCdjcG0nLGNoYXB0ZXJOYW1lNywnNTInKSk7XG4gICAgcmV0dXJuIHNlY29uZFNlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2ssY2hhcHRlcixwYWdlcyl7XG4gICAgY29uc3QgYm9va3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib29rcy5jbGFzc0xpc3QuYWRkKCdib29rcycpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBgLi9pbWFnZXMvJHtib29rfS5qcGdgO1xuICAgIGltYWdlLndpZHRoID0gMTAwO1xuICAgIGltYWdlLmhlaWdodCA9IDEwMDtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZScpO1xuICAgIGltYWdlLmFsdCA9YCR7Ym9va30gd2FzIGhlcmUuYFxuXG4gICAgY29uc3QgYm9va05hbWU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBib29rTmFtZS5jbGFzc0xpc3QuYWRkKCdib29rTmFtZScpO1xuICAgIGJvb2tOYW1lLnRleHRDb250ZW50ID0gYm9vaztcblxuICAgIGNvbnN0IGJvb2tDaGFwdGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYm9va0NoYXB0ZXIuY2xhc3NMaXN0LmFkZCgnYm9va0NoYXB0ZXInKTtcbiAgICBib29rQ2hhcHRlci50ZXh0Q29udGVudCA9IGNoYXB0ZXI7XG4gICAgdmFyIHBkZiA9YC4vbm90ZXMvY29uc3RydWN0aW9uUHJvamVjdE1hbmFnZW1lbnQvJHtjaGFwdGVyfS5wZGZgO1xuICAgIGJvb2tDaGFwdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB3aW5kb3cub3BlbihwZGYpO1xuICAgIH0pXG5cbiAgICBjb25zdCBub3RlUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbm90ZVBhZ2VzLmNsYXNzTGlzdC5hZGQoJ3BhZ2VzJyk7XG4gICAgbm90ZVBhZ2VzLnRleHRDb250ZW50ID0gcGFnZXM7XG5cbiAgICBib29rcy5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgYm9va3MuYXBwZW5kQ2hpbGQoYm9va05hbWUpO1xuICAgIGJvb2tzLmFwcGVuZENoaWxkKGJvb2tDaGFwdGVyKTtcbiAgICBib29rcy5hcHBlbmRDaGlsZChub3RlUGFnZXMpO1xuXG5yZXR1cm4gYm9va3M7XG59XG5cbmZ1bmN0aW9uIGxvYWRDbU5vdGVzKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnOy8vdGhpcyBsaW5lIHdpbGwgcmVtb3ZlIHRoZSBjb250ZW50IG9mIG90aGVycyB0YWIuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDbU5vdGVzKCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZENtTm90ZXM7IiwiaW1wb3J0IGxvYWRDaXZpbEVuZ2cgZnJvbSBcIi4vY2l2aWxFbmdpbmVlcmluZ1wiO1xuaW1wb3J0IGxvYWRDbU5vdGVzIGZyb20gXCIuL2NtTm90ZXNcIjtcbmltcG9ydCBsb2FkU29mdHdhcmVzIGZyb20gXCIuL3NvZnR3YXJlc1wiO1xuaW1wb3J0IGxvYWRWaWRlb3MgZnJvbSBcIi4vdmlkZW9zXCI7XG5cbmZ1bmN0aW9uIGhlYWRlcigpe1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZNZW51KCkpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBuYXZNZW51KCl7XG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKCduYXZNZW51Jyk7XG5cbiAgY29uc3QgY2l2aWxFbmdnQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNpdmlsRW5nZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b24nKTtcbiAgY2l2aWxFbmdnQnV0dG9uLnRleHRDb250ZW50ID0gJ0NpdmlsIEVuZ2luZWVyaW5nJztcblxuICBjaXZpbEVuZ2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjaXZpbEVuZ2dCdXR0b24pO1xuICAgIGxvYWRDaXZpbEVuZ2coKTtcbiAgfSlcblxuXG4gIGNvbnN0IGNtTm90ZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY21Ob3Rlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b24nKTtcbiAgY21Ob3Rlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdDTSBOb3Rlcyc7XG5cbiAgY21Ob3Rlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNtTm90ZXNCdXR0b24pO1xuICAgIGxvYWRDbU5vdGVzKCk7XG4gIH0pXG5cblxuICBjb25zdCBsb2FkU29mdHdhcmVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRTb2Z0d2FyZXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2QnV0dG9uJyk7XG4gIGxvYWRTb2Z0d2FyZXNCdXR0b24udGV4dENvbnRlbnQgPSAnU29mdHdhcmVzJztcblxuICBsb2FkU29mdHdhcmVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24obG9hZFNvZnR3YXJlc0J1dHRvbik7XG4gICAgbG9hZFNvZnR3YXJlcygpO1xuICB9KVxuXG4gIGNvbnN0IHZpZGVvc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2aWRlb3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2QnV0dG9uJyk7XG4gIHZpZGVvc0J1dHRvbi50ZXh0Q29udGVudCA9ICdWaWRlb3MnO1xuXG4gIHZpZGVvc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKHZpZGVvc0J1dHRvbik7XG4gICAgbG9hZFZpZGVvcygpO1xuICB9KVxuXG4gIG5hdk1lbnUuYXBwZW5kQ2hpbGQoY2l2aWxFbmdnQnV0dG9uKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChjbU5vdGVzQnV0dG9uKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZChsb2FkU29mdHdhcmVzQnV0dG9uKTtcbiAgbmF2TWVudS5hcHBlbmRDaGlsZCh2aWRlb3NCdXR0b24pO1xuICByZXR1cm4gbmF2TWVudTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbil7XG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2QnV0dG9uJyk7XG5cbiAgbmF2TGlzdC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgaWYoYnV0dG9uICE9PSB0aGlzKXtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vdGhpcyBpcyB0aGUgbWFpbiBlbGVtZW50IGFjY2VzZWQgZnJvbSBob21lLG1lbnUgZXRjLlxuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBmb290ZXIoKXtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnkgTWFkaGF2IFByYXNhZCBHdXJhZ2Fpbic7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCl7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QnV0dG9uJykpOy8vaXQgd2lsbCBzZWxlY3QgdGhlIGZpcnN0IGVsZW1lbnQgd2l0aCAubmF2QnV0dG9uIGNsYXNzIGkuZS4gY2l2aWxFbmdnQnV0dG9uO1xuICBsb2FkQ2l2aWxFbmdnKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDsiLCJmdW5jdGlvbiBjcmVhdGVTb2Z0d2FyZXMoKXtcbiAgICBjb25zdCBzb2Z0d2FyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb2Z0d2FyZXMuY2xhc3NMaXN0LmFkZCgnU29mdHdhcmVzJyk7XG4gICAgc29mdHdhcmVzLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIFNvZnR3YXJlcyBTZWN0aW9uXCI7XG5cbiAgICByZXR1cm4gc29mdHdhcmVzO1xufVxuZnVuY3Rpb24gbG9hZFNvZnR3YXJlcygpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJzsvL3RoaXMgbGluZSB3aWxsIHJlbW92ZSB0aGUgY29udGVudCBvZiBvdGhlcnMgdGFiLlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlU29mdHdhcmVzKCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZFNvZnR3YXJlczsiLCJmdW5jdGlvbiBjcmVhdGVWaWRlb3MoKXtcbiAgICBjb25zdCB2aWRlb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aWRlb3MuY2xhc3NMaXN0LmFkZCgndmlkZW9zJyk7XG4gICAgdmlkZW9zLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIFZpZGVvcyBTZWN0aW9uXCI7XG5cbiAgICByZXR1cm4gdmlkZW9zO1xufVxuZnVuY3Rpb24gbG9hZFZpZGVvcygpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJzsvL3RoaXMgbGluZSB3aWxsIHJlbW92ZSB0aGUgY29udGVudCBvZiBvdGhlcnMgdGFiLlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVmlkZW9zKCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZFZpZGVvczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbFBhZ2VcIjtcbmluaXRpYWxQYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==