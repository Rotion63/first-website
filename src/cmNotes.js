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
export default loadCmNotes;