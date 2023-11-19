function makeBook(books) {
  const inner = document.createElement("div");
  inner.classList.add("inner");

  //TOPAREA
  const topArea = document.createElement("div");
  topArea.classList.add("top-area");

  const leftArea = document.createElement("div");
  leftArea.classList.add("left-area");

  const title = document.createElement("p");
  title.innerText = `Title &nbsp; &nbsp; &nbsp; : ${books.title}`;

  const author = document.createElement("p");
  author.innerText = `Author&nbsp; : ${books.author}`;

  const year = document.createElement("p");
  year.innerText = `Year &nbsp; &nbsp; &nbsp;: ${books.year}`;

  const rightArea = document.createElement("div");
  rightArea.classList.add("right-area");

  const button = document.createElement("button");

  //BOTTOMAREA

  const bottomArea = document.createElement("div");
  bottomArea.classList.add("bottom-area");

  const status = document.createElement("p");
  status.innerText = `Status : ${setStatus()}`;
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-regular fa-thumbs-up");
  const dislikeIcon = document.createElement("i");
  dislikeIcon.classList.add("fa-regular fa-thumbs-down");

  const likeDislike = document.createElement("span");

  if (books.isCompleted) {
    // TOP AREA
    const undoButton = document.createElement("i");
    undoButton.classList.add("fa-solid fa-rotate-left");
    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid fa-x");

    button.append(undoButton, deleteButton);

    // BUTTOM AREA
    const likeInnerButton = document.createElement("button");
    likeInnerButton.append(likeIcon);

    const dislikeInnerButton = document.createElement("button");
    dislikeInnerButton.append(dislikeIcon);

    likeDislike.append(likeInnerButton, dislikeInnerButton);
  } else {
    // TOP AREA
    const ongoingButton = document.createElement("i");
    ongoingButton.classList.add("fa-brands fa-readme");
    const completeButton = document.createElement("i");
    completeButton.classList.add("fa-regular fa-thumbs-up");

    button.append(ongoingButton, completeButton);
    // BOTTOM AREA
    if (books.isLiked) {
      likeDislike.append(likeIcon);
    } else {
      likeDislike.append(dislikeIcon);
    }
  }

  //TOP AREA
  leftArea.append(title, author, year);
  rightArea.append(button);
  topArea.append(leftArea, rightArea);

  //BOTTOM AREA
  bottomArea.append(status, likeDislike);

  //ALL MARGE
  inner.append(topArea, bottomArea);
}
