const RENDER_EVENT = 'render-event';
const STORAGE_KEY = 'storage-key';

document.addEventListener('DOMContentLoaded', function(){
    getData().formAddBook.onsubmit = (e) =>{
        e.preventDefault();
        addBook();
        console.log(bookArr);
    }
});

document.addEventListener(RENDER_EVENT, function(){
    const completedContainer = document.getElementById('completed');
    const incompletedContainer = document.getElementById('incompleted');

    completedContainer.innerHTML = '';
    incompletedContainer.innerHTML = '';

    for(const booksValue of bookArr){
        if(!booksValue.isCompleted){
            incompletedContainer.append(makeBook(booksValue));
        } else {
            completedContainer.append(makeBook(booksValue));
        }
    }
});