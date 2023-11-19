document.addEventListener('DOMContentLoaded', function(){
    getData().formAddBook.onsubmit = (e) =>{
        e.preventDefault();
  console.log(getData().isLike);

    }
})