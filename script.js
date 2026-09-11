// ================================
// OPEN WEBSITE
// ================================
function start() {
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");

  if (intro) {
    intro.classList.add("hidden");
  }

  if (app) {
    app.classList.remove("hidden");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  hearts(20);
}


// ================================
// SECRET SURPRISE
// ================================
function secret() {
  const modal = document.getElementById("modal");

  if (!modal) return;

  modal.classList.add("show");

  // Efek hati ketika hadiah dibuka
  hearts(45);
}


// ================================
// CLOSE MODAL
// ================================
function closeM() {
  const modal = document.getElementById("modal");

  if (!modal) return;

  modal.classList.remove("show");
}


// ================================
// CLOSE MODAL KETIKA KLIK DI LUAR
// ================================
document.addEventListener("click", function (event) {
  const modal = document.getElementById("modal");

  if (!modal) return;

  if (event.target === modal) {
    closeM();
  }
});


// ================================
// MUSIC
// ================================
function music() {
  toast(
    "Tombol musik siap ♫ Tambahkan file MP3 ke folder website jika ingin musik."
  );
}


// ================================
// TOAST NOTIFICATION
// ================================
function toast(message) {
  let toastElement = document.getElementById("toast");

  // Kalau elemen toast belum ada, buat otomatis
  if (!toastElement) {
    toastElement = document.createElement("div");
    toastElement.id = "toast";

    document.body.appendChild(toastElement);

    Object.assign(toastElement.style, {
      position: "fixed",
      bottom: "18px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#4f3c33",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "999px",
      fontSize: "11px",
      fontWeight: "700",
      zIndex: "9999",
      opacity: "0",
      transition: "opacity 0.3s ease",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      maxWidth: "90%",
      textAlign: "center",
    });
  }

  toastElement.textContent = message;
  toastElement.style.opacity = "1";

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toastElement.style.opacity = "0";
  }, 2200);
}


// ================================
// FLOATING HEARTS
// ================================
function hearts(amount = 20) {
  const symbols = ["♡", "♥", "✦", "✧"];
  const colors = ["#ff7180", "#e7b932", "#ffffff"];

  for (let j = 0; j < amount; j++) {
    const heart = document.createElement("span");

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    Object.assign(heart.style, {
      position: "fixed",
      left: Math.random() * 100 + "vw",
      bottom: "-30px",
      zIndex: "9998",
      pointerEvents: "none",
      userSelect: "none",
      fontSize: 14 + Math.random() * 20 + "px",
      color: colors[Math.floor(Math.random() * colors.length)],
      animation: `rise ${2 + Math.random() * 3}s linear forwards`,
    });

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5500);
  }
}


// ================================
// HEART ANIMATION
// ================================
const style = document.createElement("style");

style.textContent = `
  @keyframes rise {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translateY(-110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);
