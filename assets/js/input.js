function getData() {
  const titleInput = document.getElementById("titleInput");
  const authorInput = document.getElementById("authorInput");
  const yearInput = document.getElementById("yearInput");
  const statusInput = document.getElementById("statusInput");
  const likeButton = document.getElementById("like");
  const dislikeButton = document.getElementById("dislike");
  const likeInnerButton = document.getElementById("like-inner");
  const dislikeInnerButton = document.getElementById("dislike-inner");

  const formAddBook = document.getElementById("addBook");

  const likeIcon = document.getElementById("like-inner-icon");
  const dislikeIcon = document.getElementById("dislike-inner-icon");

  let isLike = null;
  let isCompleted = false;

  return {
    titleInput,
    authorInput,
    yearInput,
    statusInput,
    likeButton,
    dislikeButton,
    formAddBook,
    likeInnerButton,
    dislikeInnerButton,
    isLike,
    likeIcon,
    dislikeIcon,
  };
}

getData().likeButton.onclick = () => {
  getData().likeButton.classList.add("click");
  getData().dislikeButton.classList.remove("click");
  getData().isLike = true;
};

getData().dislikeButton.onclick = () => {
  getData().dislikeButton.classList.add("click");
  getData().likeButton.classList.remove("click");
  getData().isLike = false;
};

getData().likeInnerButton.onclick = () => {
  if (getData().likeIcon.classList.contains("fa-regular")) {
    getData().likeIcon.classList.remove("fa-regular");
    getData().likeIcon.classList.add("fa-solid");
    getData().dislikeIcon.classList.remove("fa-solid");
    getData().dislikeIcon.classList.add("fa-regular");
    getData().isLike = true;
  }
};

getData().dislikeInnerButton.onclick = () => {
  if (getData().dislikeIcon.classList.contains("fa-regular")) {
    getData().dislikeIcon.classList.remove("fa-regular");
    getData().dislikeIcon.classList.add("fa-solid");
    getData().likeIcon.classList.remove("fa-solid");
    getData().likeIcon.classList.add("fa-regular");
    getData().isLike = false;
  }
};

function isCompleted() {
    const status = getData().statusInput;
    if(status.value === 'Complete'){
      return true;
    } else {
      return false;
    }
  }
  