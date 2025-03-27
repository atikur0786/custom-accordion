const accordionItems = document.querySelectorAll(".accordion");

accordionItems.forEach((item) => {
  const content = item.querySelector(".accordion-item");
  const title = item.querySelector(".accordion-title");
  const openIcon = item.querySelector(".open-icon");
  const closeIcon = item.querySelector(".close-icon");

  // Initialize with the plus icon visible and minus hidden
  closeIcon.setAttribute("hidden", "");

  // Add click event listener
  title.addEventListener("click", () => {
    // Toggle the active class for the content
    content.classList.toggle("active");
    title.classList.toggle("active");

    // Toggle icons visibility
    if (content.classList.contains("active")) {
      openIcon.setAttribute("hidden", ""); // Hide plus icon
      closeIcon.removeAttribute("hidden"); // Show minus icon
    } else {
      openIcon.removeAttribute("hidden"); // Show plus icon
      closeIcon.setAttribute("hidden", ""); // Hide minus icon
    }
  });
});
