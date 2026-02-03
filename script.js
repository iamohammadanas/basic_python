const revealTargets = document.querySelectorAll("section, .hero-content, .contact, .progress");

const revealElement = (element) => {
  element.classList.add("in-view");
  if (element.classList.contains("progress")) {
    const value = element.dataset.progress;
    const bar = element.querySelector(".bar");
    if (bar) {
      bar.style.width = `${value}%`;
    }
  }
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
} else {
  revealTargets.forEach((el) => {
    el.classList.add("reveal", "in-view");
    revealElement(el);
  });
}
