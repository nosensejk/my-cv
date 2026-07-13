document.addEventListener("DOMContentLoaded", () => {
  // Ультра-плавная физическая анимация проявления Bento-сетки
  anime({
    targets: ".bento-wrapper .bento-item",
    opacity: [0, 1],
    translateY: [25, 0],
    delay: anime.stagger(80, { start: 100 }), // Каскад элементов сетки
    duration: 1100,
    easing: "cubicBezier(0.16, 1, 0.3, 1)", // Плавное замедление премиум-класса
  });

  // Каскадное проявление AlbumCard внутри сетки релизов
  anime({
    targets: ".album-card",
    opacity: [0, 1],
    scale: [0.97, 1],
    delay: anime.stagger(50, { start: 450 }),
    duration: 800,
    easing: "easeOutQuad",
  });
});
