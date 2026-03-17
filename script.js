(() => {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".slide"));
  const dots = Array.from(slider.querySelectorAll(".slider-dot"));
  const prev = slider.querySelector(".slider-prev");
  const next = slider.querySelector(".slider-next");

  if (!slides.length) return;

  let index = 0;
  let timer = null;

  const render = () => {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  };

  const go = (i) => {
    index = (i + slides.length) % slides.length;
    render();
  };

  const autoStart = () => {
    autoStop();
    timer = setInterval(() => go(index + 1), 5000); // 5秒間隔に更新
  };

  const autoStop = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  prev?.addEventListener("click", () => { go(index - 1); autoStart(); });
  next?.addEventListener("click", () => { go(index + 1); autoStart(); });
  dots.forEach((d, i) => d.addEventListener("click", () => { go(i); autoStart(); }));

  // ホバー中は自動切替を停止
  slider.addEventListener("mouseenter", autoStop);
  slider.addEventListener("mouseleave", autoStart);

  render();
  autoStart();
})();
