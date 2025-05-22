// --- 1. DARK MODE TOGGLE ---
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌓 Toggle Theme";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.background = "#334155";
toggleBtn.style.color = "#f8fafc";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

let darkMode = true;

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  darkMode = !darkMode;
  toggleBtn.innerText = darkMode ? "🌓 Toggle Theme" : "🌞 Toggle Theme";
});

// --- 2. TYPEWRITER EFFECT ---
const header = document.querySelector("header h1");
const originalText = "Hey, I'm Tanish 👋";
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    header.innerHTML += originalText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

header.innerHTML = ""; // Clear before typing
typeWriter();

// --- 3. SCROLL TO TOP BUTTON ---
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆️";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "80px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.background = "#475569";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
