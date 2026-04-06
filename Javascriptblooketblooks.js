   // Accordion: only one open at a time
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.open = false;
            }
          });
        }
      });
    });
      const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.innerText = "🔇 Pause Music";
    } else {
      music.pause();
      toggleBtn.innerText = "🎵 Play Music";
    }
  });
      const allDetails = document.querySelectorAll('.top-menu details');
    allDetails.forEach((targetDetail) => {
      targetDetail.addEventListener('toggle', () => {
        if (targetDetail.open) {
          allDetails.forEach((detail) => {
            if (detail !== targetDetail) detail.removeAttribute('open');
          });
        }
      });
    });


    function calculate() {
      const dropRate = parseFloat(document.getElementById('dropRate').value);
      const packsOpened = parseFloat(document.getElementById('packsOpened').value);
      const resultDiv = document.getElementById('result');
      if (isNaN(dropRate) || isNaN(packsOpened) || dropRate <= 0 || packsOpened <= 0) {
        resultDiv.textContent = "⚠️ Please enter valid numbers!";
        return;
      }
      const p = dropRate / 100;
      const chance = 1 - Math.pow((1 - p), packsOpened);
      resultDiv.textContent = `Chance of getting at least one: ${(chance * 100).toFixed(4)}%`;
    }


    const display = document.getElementById('display');
    function append(value) {
      if (display.innerText === '0') display.innerText = value;
      else display.innerText += value;
    }
    function clearDisplay() {
      display.innerText = '0';
    }
    function deleteLast() {
      display.innerText = display.innerText.slice(0, -1) || '0';
    }
    function calculateMath() {
      try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
      } catch {
        display.innerText = 'Error';
      }
    }