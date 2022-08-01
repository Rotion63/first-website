import loadCivilEngg from "./civilEngineering";
import loadCmNotes from "./cmNotes";
import loadSoftwares from "./softwares";
import loadVideos from "./videos";

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
    loadCivilEngg();
  })


  const cmNotesButton = document.createElement('button');
  cmNotesButton.classList.add('navButton');
  cmNotesButton.textContent = 'CM Notes';

  cmNotesButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(cmNotesButton);
    loadCmNotes();
  })


  const loadSoftwaresButton = document.createElement('button');
  loadSoftwaresButton.classList.add('navButton');
  loadSoftwaresButton.textContent = 'Softwares';

  loadSoftwaresButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(loadSoftwaresButton);
    loadSoftwares();
  })

  const videosButton = document.createElement('button');
  videosButton.classList.add('navButton');
  videosButton.textContent = 'Videos';

  videosButton.addEventListener('click',(e) => {
    if(e.target.classList.contains('active')) return;
    setActiveButton(videosButton);
    loadVideos();
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
  loadCivilEngg();
}

export default initialPageLoad;