function scrollSlider(direction) {
        const track = document.getElementById("sliderTrack");
        if (!track) return;
        const card = track.querySelector(".project-card");
        if (!card) return;
        const step = card.offsetWidth + 24; // Ширина карточки + gap (24px)
        track.scrollBy({ left: step * direction, behavior: "smooth" });
      }

      // Прогресс-бар слайдера
      const track = document.getElementById("sliderTrack");
      const sliderBar = document.getElementById("sliderProgressBar");
      if (track && sliderBar) {
        track.addEventListener("scroll", () => {
          const maxScroll = track.scrollWidth - track.clientWidth;
          const percentage = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
          sliderBar.style.transform = `scaleX(${percentage})`;
        });
      }

      // Прогресс-бар страницы
      const pageBar = document.getElementById("pageProgressBar");
      window.addEventListener("scroll", () => {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pagePercentage =
          totalHeight > 0 ? window.scrollY / totalHeight : 0;
        pageBar.style.transform = `scaleX(${pagePercentage})`;
      });

      // Эффект Spotlight
      const glow = document.getElementById("cursorGlow");
      if (window.matchMedia("(pointer: fine)").matches && glow) {
        window.addEventListener("mousemove", (e) => {
          glow.style.setProperty("--x", `${e.clientX}px`);
          glow.style.setProperty("--y", `${e.clientY}px`);
        });
      }

      // Intersection Observer для плавного появления блоков при скролле
      const revealCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Перестаем наблюдать за элементом после того, как он один раз красиво появился
            observer.unobserve(entry.target);
          }
        });
      };

      const revealObserver = new IntersectionObserver(revealCallback, {
        root: null, // следим относительно viewport
        threshold: 0.15, // запускать, когда 15% блока показалось на экране
        rootMargin: "0px 0px -50px 0px", // небольшая задержка снизу для естественности
      });

      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));