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


    let book1 = 'constructionProjectManagement';//it is 1 book.
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-1','34'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-2','46'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-3','24'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-4','9'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-5','57'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-6','61'));
    noteContainer.appendChild(createNotesThumbnail(book1,'cpm','chapter-7','52'));

    let book2 = 'constructionPoliciesEnvironmentAndLaws';//it is book 2
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-1','8'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-2','4'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-3','14'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-4','23'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-5','0'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-6','5'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-7','17'));
    noteContainer.appendChild(createNotesThumbnail(book2,'policy','chapter-8','11'));

    return secondSem;
}
function createNotesThumbnail(course,book,chapter,pages){
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
    var pdf =`./notes/${course}/${chapter}.pdf`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1o1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sR0FBRyxRQUFRO0FBQzFDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GcUI7QUFDWDtBQUNJO0FBQ047O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWE7QUFDakIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBVTtBQUNkLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQsRUFBRSw2REFBYTtBQUNmOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDeEc5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNaNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7OztVQ1p6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQzVDLHdEQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC13ZWJzaXRlLy4vc3JjL2NpdmlsRW5naW5lZXJpbmcuanMiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS8uL3NyYy9jbU5vdGVzLmpzIiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvLi9zcmMvaW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS8uL3NyYy9zb2Z0d2FyZXMuanMiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS8uL3NyYy92aWRlb3MuanMiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXJzdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXJzdC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlyc3Qtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpcnN0LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ2l2aWxFbmdnKCl7XG4gICAgY29uc3QgY2l2aWxFbmdnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2l2aWxFbmdnLmNsYXNzTGlzdC5hZGQoJ2NpdmlsRW5nZycpO1xuICAgIGNpdmlsRW5nZy50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBjaXZpbCBlbmdpbmVlcmluZyBzZWN0aW9uLlwiXG5cbiAgICByZXR1cm4gY2l2aWxFbmdnO1xufVxuZnVuY3Rpb24gbG9hZENpdmlsRW5nZygpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJzsvL3RoaXMgbGluZSB3aWxsIHJlbW92ZSB0aGUgY29udGVudCBvZiBvdGhlcnMgdGFiLlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ2l2aWxFbmdnKCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZENpdmlsRW5nZzsiLCJmdW5jdGlvbiBjcmVhdGVDbU5vdGVzKCl7XG4gICAgY29uc3QgY21Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNtTm90ZXMuY2xhc3NMaXN0LmFkZCgnY21Ob3RlcycpO1xuICAgIGNvbnN0IG5vdGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vdGVIZWFkLmNsYXNzTGlzdC5hZGQoJ25vdGVIZWFkJyk7XG4gICAgbm90ZUhlYWQudGV4dENvbnRlbnQgPSAnQ29uc3RydWN0aW9uIE1hbmFnZW1lbnQgTm90ZXMnO1xuICAgIGNtTm90ZXMuYXBwZW5kQ2hpbGQobm90ZUhlYWQpO1xuXG4gICAgY21Ob3Rlcy5hcHBlbmRDaGlsZChzZWNvbmRTZW1lc3RlcigpKTtcbiAgICByZXR1cm4gY21Ob3Rlcztcbn1cblxuZnVuY3Rpb24gc2Vjb25kU2VtZXN0ZXIoKXtcbiAgICBjb25zdCBzZWNvbmRTZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRTZW0uY2xhc3NMaXN0LmFkZCgnc2Vjb25kU2VtJyk7XG4gICAgc2Vjb25kU2VtLnRleHRDb250ZW50ID0gJ1NlY29uZCBTZW1lc3RlcidcblxuICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vdGVDb250YWluZXInKTtcbiAgICBzZWNvbmRTZW0uYXBwZW5kQ2hpbGQobm90ZUNvbnRhaW5lcik7XG5cblxuICAgIGxldCBib29rMSA9ICdjb25zdHJ1Y3Rpb25Qcm9qZWN0TWFuYWdlbWVudCc7Ly9pdCBpcyAxIGJvb2suXG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMSwnY3BtJywnY2hhcHRlci0xJywnMzQnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMSwnY3BtJywnY2hhcHRlci0yJywnNDYnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMSwnY3BtJywnY2hhcHRlci0zJywnMjQnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMSwnY3BtJywnY2hhcHRlci00JywnOScpKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2sxLCdjcG0nLCdjaGFwdGVyLTUnLCc1NycpKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2sxLCdjcG0nLCdjaGFwdGVyLTYnLCc2MScpKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2sxLCdjcG0nLCdjaGFwdGVyLTcnLCc1MicpKTtcblxuICAgIGxldCBib29rMiA9ICdjb25zdHJ1Y3Rpb25Qb2xpY2llc0Vudmlyb25tZW50QW5kTGF3cyc7Ly9pdCBpcyBib29rIDJcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2syLCdwb2xpY3knLCdjaGFwdGVyLTEnLCc4JykpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZXNUaHVtYm5haWwoYm9vazIsJ3BvbGljeScsJ2NoYXB0ZXItMicsJzQnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMiwncG9saWN5JywnY2hhcHRlci0zJywnMTQnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMiwncG9saWN5JywnY2hhcHRlci00JywnMjMnKSk7XG4gICAgbm90ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb3Rlc1RodW1ibmFpbChib29rMiwncG9saWN5JywnY2hhcHRlci01JywnMCcpKTtcbiAgICBub3RlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGJvb2syLCdwb2xpY3knLCdjaGFwdGVyLTYnLCc1JykpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZXNUaHVtYm5haWwoYm9vazIsJ3BvbGljeScsJ2NoYXB0ZXItNycsJzE3JykpO1xuICAgIG5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZXNUaHVtYm5haWwoYm9vazIsJ3BvbGljeScsJ2NoYXB0ZXItOCcsJzExJykpO1xuXG4gICAgcmV0dXJuIHNlY29uZFNlbTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVzVGh1bWJuYWlsKGNvdXJzZSxib29rLGNoYXB0ZXIscGFnZXMpe1xuICAgIGNvbnN0IGJvb2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9va3MuY2xhc3NMaXN0LmFkZCgnYm9va3MnKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gYC4vaW1hZ2VzLyR7Ym9va30uanBnYDtcbiAgICBpbWFnZS53aWR0aCA9IDEwMDtcbiAgICBpbWFnZS5oZWlnaHQgPSAxMDA7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKTtcbiAgICBpbWFnZS5hbHQgPWAke2Jvb2t9IHdhcyBoZXJlLmBcblxuICAgIGNvbnN0IGJvb2tOYW1lPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYm9va05hbWUuY2xhc3NMaXN0LmFkZCgnYm9va05hbWUnKTtcbiAgICBib29rTmFtZS50ZXh0Q29udGVudCA9IGJvb2s7XG5cbiAgICBjb25zdCBib29rQ2hhcHRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJvb2tDaGFwdGVyLmNsYXNzTGlzdC5hZGQoJ2Jvb2tDaGFwdGVyJyk7XG4gICAgYm9va0NoYXB0ZXIudGV4dENvbnRlbnQgPSBjaGFwdGVyO1xuICAgIHZhciBwZGYgPWAuL25vdGVzLyR7Y291cnNlfS8ke2NoYXB0ZXJ9LnBkZmA7XG4gICAgYm9va0NoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHdpbmRvdy5vcGVuKHBkZik7XG4gICAgfSlcblxuICAgIGNvbnN0IG5vdGVQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBub3RlUGFnZXMuY2xhc3NMaXN0LmFkZCgncGFnZXMnKTtcbiAgICBub3RlUGFnZXMudGV4dENvbnRlbnQgPSBwYWdlcztcblxuICAgIGJvb2tzLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBib29rcy5hcHBlbmRDaGlsZChib29rTmFtZSk7XG4gICAgYm9va3MuYXBwZW5kQ2hpbGQoYm9va0NoYXB0ZXIpO1xuICAgIGJvb2tzLmFwcGVuZENoaWxkKG5vdGVQYWdlcyk7XG5cbnJldHVybiBib29rcztcbn1cblxuZnVuY3Rpb24gbG9hZENtTm90ZXMoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7Ly90aGlzIGxpbmUgd2lsbCByZW1vdmUgdGhlIGNvbnRlbnQgb2Ygb3RoZXJzIHRhYi5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNtTm90ZXMoKSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkQ21Ob3RlczsiLCJpbXBvcnQgbG9hZENpdmlsRW5nZyBmcm9tIFwiLi9jaXZpbEVuZ2luZWVyaW5nXCI7XG5pbXBvcnQgbG9hZENtTm90ZXMgZnJvbSBcIi4vY21Ob3Rlc1wiO1xuaW1wb3J0IGxvYWRTb2Z0d2FyZXMgZnJvbSBcIi4vc29mdHdhcmVzXCI7XG5pbXBvcnQgbG9hZFZpZGVvcyBmcm9tIFwiLi92aWRlb3NcIjtcblxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdk1lbnUoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIG5hdk1lbnUoKXtcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdk1lbnUnKTtcblxuICBjb25zdCBjaXZpbEVuZ2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2l2aWxFbmdnQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdkJ1dHRvbicpO1xuICBjaXZpbEVuZ2dCdXR0b24udGV4dENvbnRlbnQgPSAnQ2l2aWwgRW5naW5lZXJpbmcnO1xuXG4gIGNpdmlsRW5nZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGNpdmlsRW5nZ0J1dHRvbik7XG4gICAgbG9hZENpdmlsRW5nZygpO1xuICB9KVxuXG5cbiAgY29uc3QgY21Ob3Rlc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbU5vdGVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdkJ1dHRvbicpO1xuICBjbU5vdGVzQnV0dG9uLnRleHRDb250ZW50ID0gJ0NNIE5vdGVzJztcblxuICBjbU5vdGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oY21Ob3Rlc0J1dHRvbik7XG4gICAgbG9hZENtTm90ZXMoKTtcbiAgfSlcblxuXG4gIGNvbnN0IGxvYWRTb2Z0d2FyZXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG9hZFNvZnR3YXJlc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b24nKTtcbiAgbG9hZFNvZnR3YXJlc0J1dHRvbi50ZXh0Q29udGVudCA9ICdTb2Z0d2FyZXMnO1xuXG4gIGxvYWRTb2Z0d2FyZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihsb2FkU29mdHdhcmVzQnV0dG9uKTtcbiAgICBsb2FkU29mdHdhcmVzKCk7XG4gIH0pXG5cbiAgY29uc3QgdmlkZW9zQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZpZGVvc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b24nKTtcbiAgdmlkZW9zQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZpZGVvcyc7XG5cbiAgdmlkZW9zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24odmlkZW9zQnV0dG9uKTtcbiAgICBsb2FkVmlkZW9zKCk7XG4gIH0pXG5cbiAgbmF2TWVudS5hcHBlbmRDaGlsZChjaXZpbEVuZ2dCdXR0b24pO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKGNtTm90ZXNCdXR0b24pO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKGxvYWRTb2Z0d2FyZXNCdXR0b24pO1xuICBuYXZNZW51LmFwcGVuZENoaWxkKHZpZGVvc0J1dHRvbik7XG4gIHJldHVybiBuYXZNZW51O1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKXtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCdXR0b24nKTtcblxuICBuYXZMaXN0LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBpZihidXR0b24gIT09IHRoaXMpe1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpe1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly90aGlzIGlzIHRoZSBtYWluIGVsZW1lbnQgYWNjZXNlZCBmcm9tIGhvbWUsbWVudSBldGMuXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGZvb3Rlcigpe1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBCeSBNYWRoYXYgUHJhc2FkIEd1cmFnYWluJztcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKXtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCdXR0b24nKSk7Ly9pdCB3aWxsIHNlbGVjdCB0aGUgZmlyc3QgZWxlbWVudCB3aXRoIC5uYXZCdXR0b24gY2xhc3MgaS5lLiBjaXZpbEVuZ2dCdXR0b247XG4gIGxvYWRDaXZpbEVuZ2coKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkOyIsImZ1bmN0aW9uIGNyZWF0ZVNvZnR3YXJlcygpe1xuICAgIGNvbnN0IHNvZnR3YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvZnR3YXJlcy5jbGFzc0xpc3QuYWRkKCdTb2Z0d2FyZXMnKTtcbiAgICBzb2Z0d2FyZXMudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgU29mdHdhcmVzIFNlY3Rpb25cIjtcblxuICAgIHJldHVybiBzb2Z0d2FyZXM7XG59XG5mdW5jdGlvbiBsb2FkU29mdHdhcmVzKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnOy8vdGhpcyBsaW5lIHdpbGwgcmVtb3ZlIHRoZSBjb250ZW50IG9mIG90aGVycyB0YWIuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVTb2Z0d2FyZXMoKSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkU29mdHdhcmVzOyIsImZ1bmN0aW9uIGNyZWF0ZVZpZGVvcygpe1xuICAgIGNvbnN0IHZpZGVvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZGVvcy5jbGFzc0xpc3QuYWRkKCd2aWRlb3MnKTtcbiAgICB2aWRlb3MudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgVmlkZW9zIFNlY3Rpb25cIjtcblxuICAgIHJldHVybiB2aWRlb3M7XG59XG5mdW5jdGlvbiBsb2FkVmlkZW9zKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnOy8vdGhpcyBsaW5lIHdpbGwgcmVtb3ZlIHRoZSBjb250ZW50IG9mIG90aGVycyB0YWIuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVWaWRlb3MoKSk7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkVmlkZW9zOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9pbml0aWFsUGFnZVwiO1xuaW5pdGlhbFBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9