function makeBook(books) {
  const inner = document.createElement("div");
  inner.classList.add("inner");

  //TOPAREA
  const topArea = document.createElement("div");
  topArea.classList.add("top-area");

  const leftArea = document.createElement("div");
  leftArea.classList.add("left-area");

  const title = document.createElement("p");
  title.innerText = `Title : ${books.title}`;

  const author = document.createElement("p");
  author.innerText = `Author : ${books.author}`;

  const year = document.createElement("p");
  year.innerText = `Year : ${books.year}`;

  const rightArea = document.createElement("div");
  rightArea.classList.add("right-area");

  //BOTTOMAREA

  const bottomArea = document.createElement("div");
  bottomArea.classList.add("bottom-area");

  const status = document.createElement("p");
  status.innerText = `Status : ${bookStatus(books.id)}`;
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-regular");
  likeIcon.classList.add("fa-thumbs-up");
  const dislikeIcon = document.createElement("i");
  dislikeIcon.classList.add("fa-regular");
  dislikeIcon.classList.add("fa-thumbs-down");

  const likeDislike = document.createElement("span");

  if (books.isCompleted) {
    // TOP AREA
    const undoIcon = document.createElement("i");
    undoIcon.classList.add("fa-solid");
    undoIcon.classList.add("fa-rotate-left");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-x");

    const undoButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    undoButton.append(undoIcon);
    deleteButton.append(deleteIcon);

    undoButton.onclick = () =>{
      undoBook(books.id);
    }

    deleteButton.onclick = () =>{
      deleteBook(books.id);
    }

    rightArea.append(undoButton, deleteButton)

    // BUTTOM AREA
    
    if (books.isLiked) {
      likeDislike.append(likeIcon);
    } else {
      likeDislike.append(dislikeIcon);
    }
  } else {
    // TOP AREA
    const ongoingIcon = document.createElement("i");
    ongoingIcon.classList.add("fa-brands");
    ongoingIcon.classList.add("fa-readme");
    const completeIcon = document.createElement("i");
    completeIcon.classList.add("fa-solid");
    completeIcon.classList.add("fa-check");

    const ongoingButton = document.createElement('button');
    ongoingButton.setAttribute('type', 'button')
    ongoingButton.append(ongoingIcon);
    const completeButton = document.createElement('button');
    completeButton.setAttribute('type', 'button')
    completeButton.append(completeIcon);

    ongoingButton.onclick = () =>{
      ongoingBook(books.id);
      if(!books.isRead){
        ongoingIcon.style.color = 'rgb(237, 125, 49';
      }else{
        ongoingIcon.style.color = "white";
      }
    }

    completeButton.onclick = () => {
      completeBook(books.id);
    }

    rightArea.append(ongoingButton, completeButton);
    
    // BOTTOM AREA
    const likeInnerButton = document.createElement("button");
    likeInnerButton.setAttribute('id', 'like-inner');
    likeInnerButton.append(likeIcon);
    
    const dislikeInnerButton = document.createElement("button");
    dislikeInnerButton.setAttribute('id', 'dislike-inner');
    dislikeInnerButton.append(dislikeIcon);

    likeDislike.append(likeInnerButton, dislikeInnerButton);
  }

  //TOP AREA
  leftArea.append(title, author, year);
  topArea.append(leftArea, rightArea);

  //BOTTOM AREA
  bottomArea.append(status, likeDislike);

  //ALL MARGE
  inner.append(topArea, bottomArea);

  return inner;
}
