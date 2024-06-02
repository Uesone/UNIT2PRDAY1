window.addEventListener("scroll", function () {
  let topBar = document.querySelector(".topBar");
  let button = document.querySelector(".btNav");
  let headerContent = document.querySelector(".headerContent");
  let headerContentHeight = headerContent.offsetHeight;
  let headerContentTop = headerContent.offsetTop;

  if (window.scrollY > headerContentTop + headerContentHeight) {
    topBar.classList.add("scrolled");
    button.classList.add("scrolled");
  } else {
    topBar.classList.remove("scrolled");
    button.classList.remove("scrolled");
  }
});
