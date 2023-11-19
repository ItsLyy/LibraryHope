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
    likeIcon,
    dislikeIcon,
  };
}

let isLiked = false;

getData().likeButton.onclick = () => {
  getData().likeButton.classList.add("click");
  getData().dislikeButton.classList.remove("click");
  isLiked = true;
};

getData().dislikeButton.onclick = () => {
  getData().dislikeButton.classList.add("click");
  getData().likeButton.classList.remove("click");
  isLiked = false;
};

getData().statusInput.oninput = () => {
  const status = getData().statusInput;

  if (status.value === "Complete") {
    getData().likeButton.removeAttribute("disabled");
    getData().dislikeButton.removeAttribute("disabled");
  } else {
    getData().likeButton.setAttribute("disabled", "");
    getData().dislikeButton.setAttribute("disabled", "");
  }
};

function isCompleted() {
  const status = getData().statusInput;
  if (status.value === "Complete") {
    return true;
  } else {
    return false;
  }
}

function saveData(){
  if(storageExist()){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookArr));
  }
}

function loadData(){
  const bookItems = localStorage.getItem(STORAGE_KEY);
  const bookValue = JSON.parse(bookItems);

  if(bookValue !== null){
    for(const item of bookValue){
      bookArr.push(item);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function storageExist(){
  if(typeof Storage === undefined){
    alert('You dont have Local or Session Storage feature');
    return false;
  }
  return true;
}

