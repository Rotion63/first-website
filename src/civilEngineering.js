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
export default loadCivilEngg;