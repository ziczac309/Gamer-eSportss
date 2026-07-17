// Gamer eSports App

let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 3000);
}

showSlides();

const tournaments = [
  {
    title: "Free Fire Solo",
    entry: 20,
    prize: 500,
    slots: "48/50",
    time: "8:00 PM"
  },
  {
    title: "Free Fire Squad",
    entry: 50,
    prize: 2000,
    slots: "20/25",
    time: "9:00 PM"
  }
];

document.querySelectorAll(".join-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    alert(
      "Tournament: " + tournaments[index].title +
      "\nEntry: ₹" + tournaments[index].entry +
      "\nPrize: ₹" + tournaments[index].prize
    );
  });
});
