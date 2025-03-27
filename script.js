const accordionItems = document.querySelectorAll(".accordion");

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", () => {
    const accordionContent = accordionItems[i].querySelector(".accordion-item");
    const accordionTitle = accordionItems[i].querySelector(".accordion-title");
    const openIcon = accordionItems[i].querySelector(".open-icon");
    const closeIcon = accordionItems[i].querySelector(".close-icon");

    // Toggle active class on the content
    accordionContent.classList.toggle("active");

    // Toggle active class on the title
    accordionTitle.classList.toggle("active");

    // Toggle icons
    if (accordionContent.classList.contains("active")) {
      openIcon.setAttribute("hidden", "");
      closeIcon.removeAttribute("hidden");
    } else {
      openIcon.removeAttribute("hidden");
      closeIcon.setAttribute("hidden", "");
    }
  });
}
