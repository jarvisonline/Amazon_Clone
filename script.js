const imgs = document.querySelectorAll(".hero-section ul img");
const prev_btn = document.querySelector(".control_previous");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

function nextSlide() {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
}

function prevSlide() {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
}

// Change slide every 10 seconds
const interval = setInterval(nextSlide, 10000);

prev_btn.addEventListener("click", (e) => {
  prevSlide();
  clearInterval(interval); // Stop automatic scrolling
});

next_btn.addEventListener("click", (e) => {
  nextSlide();
  clearInterval(interval); // Stop automatic scrolling
});
