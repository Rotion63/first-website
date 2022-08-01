function createCmNotes(){
    const cmNotes = document.createElement('div');
    cmNotes.classList.add('cmNotes');
    cmNotes.textContent = "This is construction Manangement Section";

    return cmNotes;
}
function loadCmNotes(){
    const main = document.querySelector('.main');
    main.textContent = '';//this line will remove the content of others tab.
    main.appendChild(createCmNotes());
}
export default loadCmNotes;