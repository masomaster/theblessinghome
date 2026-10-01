(function () {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (!header) return;

  const root = header.dataset.root || "";
  const active = header.dataset.active || "";
  const pages = [
    ["Home", root + "index.html", "home"],
    ["Pray", root + "pray/", "pray"],
    ["Stories and Photos", root + "media/", "media"],
    ["Support", root + "donate/", "donate"],
    ["About Us", root + "about-us/", "about"],
  ];

  header.innerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="site-header">
      <a class="brand" href="${root}index.html">
        <img src="${root}assets/images/logo.png" alt="Blessing Home logo">
        <span class="brand-text">Blessing Home: A Children's Home / Orphanage in Bangalore India</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">☰</button>
      <nav class="site-nav" id="site-nav" aria-label="Primary">
        <ul>
          ${pages
            .map(
              ([label, href, id]) => `
            <li>
              <a href="${href}" ${id === active ? 'aria-current="page"' : ""}>${label}</a>
            </li>`
            )
            .join("")}
        </ul>
      </nav>
    </div>
    <div class="header-rule"></div>
  `;

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        The Blessing Home: No. 55, 1st Cross, BDS Gardens, Hennur Main Road, Kothanur Post, Bangalore 560-077 India
      </footer>
    `;
  }

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const items = [...document.querySelectorAll("[data-gallery] a")];
  const img = lightbox.querySelector("img");
  let index = 0;

  function show(i) {
    index = (i + items.length) % items.length;
    img.src = items[index].href;
    img.alt = items[index].querySelector("img")?.alt || "";
    lightbox.classList.add("open");
  }

  items.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
    });
  });

  lightbox.querySelector(".close").addEventListener("click", () => lightbox.classList.remove("open"));
  lightbox.querySelector(".prev").addEventListener("click", () => show(index - 1));
  lightbox.querySelector(".next").addEventListener("click", () => show(index + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") lightbox.classList.remove("open");
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
