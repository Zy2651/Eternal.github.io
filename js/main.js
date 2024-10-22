// main.js
// Navigation hover effects
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("pop-out");
  });
  link.addEventListener("mouseout", () => {
    link.classList.remove("pop-out");
  });
});

// Banner image fade in
window.addEventListener("load", () => {
  const bannerImage = document.getElementById("banner-image");
  if (bannerImage) {
    bannerImage.style.opacity = 0;
    bannerImage.style.transition = "opacity 2s";
    bannerImage.style.opacity = 1;
  }
});

// Past events loading function
async function loadPastEvents() {
  const pastEventsContainer = document.getElementById("past-events-container");
  if (!pastEventsContainer) {
    console.error("Past events container not found");
    return;
  }

  console.log("Starting to load past events...");

  try {
    // Try to load images from the past events directory
            const pastEventFiles = [
            'FinalPoster2.webp',
            'Final.webp',
            'Eternal.webp',
            'AnnouncementPoster.webp',
            '800x450.jpeg',
            '800x450-3.jpeg',
            '800x450-2.jpeg'
        ];

    // Clear existing content
    pastEventsContainer.innerHTML = "";

    // Create and add image elements
    pastEventFiles.forEach((filename) => {
      const img = document.createElement("img");
      img.src = `./past events/${filename}`;
      img.width = 250;
      img.height = 125;
      img.style.margin = "10px";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
      img.style.transition = "transform 0.3s ease-in-out";

      // Add loading error handler
      img.onerror = () => {
        console.error(`Failed to load image: ${filename}`);
        img.style.border = "2px solid red";
        img.style.padding = "10px";
      };

      img.onload = () => {
        console.log(`Successfully loaded: ${filename}`);
      };

      // Add hover effects
      img.onmouseover = () => (img.style.transform = "scale(1.1)");
      img.onmouseout = () => (img.style.transform = "scale(1)");

      pastEventsContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error in loadPastEvents:", error);
    pastEventsContainer.innerHTML = `
          <div style="color: red; padding: 20px;">
              <p>Error loading past events: ${error.message}</p>
              <p>Please check the console for more details.</p>
          </div>
      `;
  }
}

// Call the function when the page loads
window.addEventListener("load", loadPastEvents);
