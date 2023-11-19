const RENDER_EVENT = "render-event";
const STORAGE_KEY = "storage-key";

document.addEventListener("DOMContentLoaded", function () {
  if (storageExist()) {
    loadData();
  }
  getData().formAddBook.onsubmit = (e) => {
    addBook();
    e.preventDefault();
  };
  getData().statusInput.value = "Complete";
});

document.addEventListener(RENDER_EVENT, function () {
  const completedContainer = document.getElementById("completed");
  const incompletedContainer = document.getElementById("incompleted");
  const totalBooks = document.getElementById("total-books");
  totalBooks.innerText = bookArr.length;

  completedContainer.innerHTML = "";
  incompletedContainer.innerHTML = "";

  for (const booksValue of bookArr) {
    if (!booksValue.isCompleted) {
      incompletedContainer.append(makeBook(booksValue));
    } else {
      completedContainer.append(makeBook(booksValue));
    }
  }

  

  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-btn");
  const allInner = document.querySelectorAll(".inner");

  searchButton.onclick = () => {
    for (const booksValueIndex in bookArr) {
      allInner[booksValueIndex].classList.add("hidden");
      if (searchInput.value === bookArr[booksValueIndex].title) {
        allInner[booksValueIndex].classList.remove("hidden");
      } else if (searchInput.value === "") {
        allInner[booksValueIndex].classList.remove("hidden");
      }
    }
  };
});
