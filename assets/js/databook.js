const bookArr = [];
let isRead = false;

function addBook() {
  const titleInput = getData().titleInput.value;
  const authorInput = getData().authorInput.value;
  const yearInput = parseInt(getData().yearInput.value);
  const statusInput = getData().statusInput.value;
  const completed = isCompleted();
  const islikes = isLiked;
  const isreads = isRead;

  const genereteID = genereteId();
  const bookObject = addBookObject(
    genereteID,
    titleInput,
    authorInput,
    yearInput,
    statusInput,
    completed,
    islikes,
    isreads
  );

  bookArr.push(bookObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function genereteId() {
  return +new Date();
}

function addBookObject(
  id,
  title,
  author,
  year,
  status,
  isCompleted,
  isLiked,
  isRead
) {
  return {
    id,
    title,
    author,
    year,
    status,
    isCompleted,
    isLiked,
    isRead,
  };
}

function completeBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function ongoingBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  if (!theBook.isRead) {
    theBook.isRead = true;
  } else {
    theBook.isRead = false;
  }
  console.log("wee");
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function deleteBook(id) {
  const theBookIndex = findBookIndex(id);

  if (theBookIndex === -1) return null;

  bookArr.splice(theBookIndex, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function likeBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isLiked = true;
  saveData();
}

function dislikeBook(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  theBook.isLiked = false;
  saveData();
}

function bookStatus(id) {
  const theBook = findBook(id);

  if (theBook === null) return;

  if (theBook.isCompleted) {
    return "Completed";
  } else if (theBook.isRead) {
    return "Ongoing";
  } else if (!theBook.isCompleted) {
    return "Incompleted";
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
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
