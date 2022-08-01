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
export default loadSoftwares;