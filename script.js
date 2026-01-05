// Basic JS only

// --- Active nav link on click + smooth scroll ---
var navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active from all
    navLinks.forEach(function (l) {
      l.classList.remove("active");
    });
    // Set current as active
    this.classList.add("active");

    // Smooth scroll to section
    var targetId = this.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// --- Project filters (very simple tag match) ---
var filterButtons = document.querySelectorAll(".filter-btn");
var projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Update active button
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    this.classList.add("active");

    var filter = this.getAttribute("data-filter");

    projectCards.forEach(function (card) {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        var tags = card.getAttribute("data-tags");
        if (tags && tags.indexOf(filter) !== -1) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// --- Light / dark theme toggle (basic) ---
var themeToggle = document.getElementById("theme-toggle");
var body = document.body;

// Load saved theme
var savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", function () {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeToggle.textContent = "☀";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☾";
    localStorage.setItem("theme", "dark");
  }
});

