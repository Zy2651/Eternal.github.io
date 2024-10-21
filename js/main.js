document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("pop-out");
  });
  link.addEventListener("mouseout", () => {
    link.classList.remove("pop-out");
  });
});

window.addEventListener("load", () => {
  const bannerImage = document.getElementById("banner-image");
  bannerImage.style.opacity = 0;
  bannerImage.style.transition = "opacity 2s";
  bannerImage.style.opacity = 1;
});
