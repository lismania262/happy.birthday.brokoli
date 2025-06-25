<script>
    const fullLetter = `happy birthday to u pichooll! 🥦 

thank u telah membuatt settiiapp momen lebih cerah dengan adanya pichol, anjayy🤘

semoga di tahun ini, hari hari pichol penuh dengan kebahagiaan, tawa, dan uang, AAMIIN PALING KENCENG!

happy 20th year pichol, cheer up.

niaaa,
𝜗𝜚 ur prettiest fren >⩊<`;

    function goToPage(pageNum) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(p => p.classList.remove('active'));
      const next = document.getElementById(`page${pageNum}`);
      next.classList.add('active');

      if (pageNum === 3) {
        const music = document.getElementById("bg-music");
        music.muted = false;
        music.play().catch(e => console.log("Autoplay blocked:", e));

        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        typeText(fullLetter, document.getElementById('letterText'), 25);
        startFallingSymbols();
      }
    }

    function typeText(text, element, speed) {
      element.innerHTML = '';
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }

    function startFallingSymbols() {
      setInterval(() => {
        const el = document.createElement('div');
        el.classList.add('falling');
        const isHeart = Math.random() < 0.5;
        el.innerText = isHeart ? '🥦' : '⭐';
        el.classList.add(isHeart ? 'broccoli' : 'yellow-star');
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (3 + Math.random() * 2) + 's';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 6000);
      }, 300);
    }
  </script>