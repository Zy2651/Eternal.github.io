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

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".our-clubs img");

images.forEach(function (image) {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

async function loadPastEvents() {
  const pastEventsContainer = document.getElementById("past-events-container");

  // Create an index.json file in your past-events folder that lists all images
  try {
    const response = await fetch("/past-events/index.json");
    const imagePaths = await response.json();

    // Clear existing content
    pastEventsContainer.innerHTML = "";

    // Sort images by date (assuming filenames contain dates or are in order)
    imagePaths.sort().reverse();

    // Create and add image elements
    imagePaths.forEach((imageName) => {
      const img = document.createElement("img");
      img.src = `/past-events/${imageName}`;
      img.width = 250;
      img.height = 125;
      img.style.margin = "10px";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
      img.style.transition = "transform 0.3s ease-in-out";

      // Add hover effects
      img.onmouseover = () => (img.style.transform = "scale(1.1)");
      img.onmouseout = () => (img.style.transform = "scale(1)");

      pastEventsContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error loading past events:", error);
    pastEventsContainer.innerHTML = "<p>Error loading past events</p>";
  }
}

// Call the function when the page loads
window.addEventListener("load", loadPastEvents);
