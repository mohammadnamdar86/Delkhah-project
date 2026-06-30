async function loadPartials() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) {
    const headerRes = await fetch("partials/header.html");
    const headerHtml = await headerRes.text();
    headerEl.innerHTML = headerHtml;
  }

  if (footerEl) {
    const footerRes = await fetch("partials/footer.html");
    const footerHtml = await footerRes.text();
    footerEl.innerHTML = footerHtml;
  }

  setActiveNav();
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  let currentPage = "index";

  if (path.includes("index")) currentPage = "index";
  else if (path.includes("about")) currentPage = "about";
  else if (path.includes("contact")) currentPage = "contact";
  else if (path.includes("order")) currentPage = "order";
  else if (path.includes("gallery")) currentPage = "gallery";
  else if (path.includes("tarhim-services")) currentPage = "services";

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const page = link.getAttribute("data-page");
    if (page === currentPage) {
      if (page === "order") {
        link.classList.add("ring-2", "ring-[#d4af37]/40");
      } else {
        link.classList.remove("text-gray-300", "border-transparent");
        link.classList.add("text-white", "border-[#d4af37]");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", loadPartials);