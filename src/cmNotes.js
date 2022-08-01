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
export default loadCmNotes;