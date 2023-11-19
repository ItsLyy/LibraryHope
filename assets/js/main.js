const RENDER_EVENT = 'render-event';
const STORAGE_KEY = 'storage-key';

document.addEventListener('DOMContentLoaded', function(){
    getData().likeButton.setAttribute('disabled', '')
    getData().dislikeButton.setAttribute('disabled', '')
    getData().formAddBook.onsubmit = (e) =>{
        e.preventDefault();
        console.log(isLiked);
    }
});

document.addEventListener(RENDER_EVENT, function(){
    
});