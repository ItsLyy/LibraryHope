const bookArr = [];

function addBook() {
  const titleInput = getData().titleInput.value;
  const authorInput = getData().authorInput.value;
  const yearInput = getData().yearInput.value;
  const statusInput = getData().statusInput.value;
  const completed = isCompleted();
  const islikes = isLiked;

  const genereteID = genereteId();
  const bookObject = addBookObject(
    genereteID,
    titleInput,
    authorInput,
    yearInput,
    statusInput,
    completed,
    islikes
  );

  bookArr.push(bookObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function genereteId() {
  return +new Date();
}

function addBookObject(id, title, author, year, status, isCompleted, isLiked) {
  return {
    id,
    title,
    author,
    year,
    status,
    isCompleted,
  };
}

function completeBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function ongoingBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  let isRead = true;
  const readMe = document.querySelector('.fa-readme');

  if (isRead) {
    theBook.status = "Ongoing";
    readMe.style.color = 'white';
    isRead = false;
} else {
    readMe.style.color = 'grey';
    theBook.status = 'Incomplete';
    isRead = true;
  }
}

function undoBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function deleteBook(id) {
  const theBookIndex = findBookIndex(id);

  if (theBookIndex === -1) return null;

  bookArr.splice(theBookIndex, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findBook(id) {
  for (const bookItems of bookArr) {
    if (bookItems.id === id) {
      return bookItems;
    }
  }
  return null;
}

function findBookIndex(id) {
  for (const bookIndex in bookArr) {
    if (bookArr[bookIndex].id === id) {
      return bookIndex;
    }
  }
  return -1;
}
