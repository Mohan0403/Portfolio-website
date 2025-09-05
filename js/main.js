

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  /* ========== FOOTER YEAR ========== */
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* ========== TYPING EFFECT ========== */
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const texts = [
      "Web Developer",
      "UI/UX Enthusiast",
      "Open Source Contributor",
      "Tech Explorer"
    ];
    let i = 0;  // index of text
    let j = 0;  // index of character
    let isDeleting = false;

    function typeEffect() {
      const current = texts[i];

      if (!isDeleting) {
        // typing forward
        typingElement.textContent = current.substring(0, j + 1);
        j++;
        if (j === current.length) {
          // pause when full word is typed
          isDeleting = true;
          setTimeout(typeEffect, 1200);
          return;
        }
      } else {
        // deleting backward
        typingElement.textContent = current.substring(0, j - 1);
        j--;
        if (j === 0) {
          // move to next word
          isDeleting = false;
          i = (i + 1) % texts.length;
        }
      }

      // speed: faster delete, slower type
      setTimeout(typeEffect, isDeleting ? 60 : 120);
    }

    typeEffect();
  }

  /* ========== BACKGROUND TOGGLE ========== */
  const btn = document.getElementById("toggleBg");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("alt-bg");
    });
  }
});