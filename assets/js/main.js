const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Demo submitted. Connect this form to the live quote or CRM workflow before launch.";
    }
  });
});
