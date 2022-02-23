const mobilefilters = document.querySelector(".filters--mobile");
const sidebarBtn = document.querySelector(".filters__btn");
const mobilefiltersLinks = document.querySelectorAll(
  ".filters--mobile ul li a"
);

sidebarBtn.addEventListener("click", () => {
  if (mobilefilters.style.display == "none") {
    mobilefilters.style.display = "flex";
  } else {
    mobilefilters.style.display = "none";
  }
});

for (let mobLink = 0; mobLink < mobilefiltersLinks.length; mobLink++) {
  mobilefiltersLinks[mobLink].addEventListener("click", () => {
    mobilefilters.style.display = "none";
  });
}
