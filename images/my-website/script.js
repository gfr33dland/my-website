// Smooth scroll to sections when buttons are clicked
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}
