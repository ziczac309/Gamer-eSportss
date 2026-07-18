// Gamer eSports App
import { db } from "./Firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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

const tournaments = [];

async function loadTournaments() {
  const querySnapshot = await getDocs(collection(db, "tournaments"));

    querySnapshot.forEach((doc) => {
        tournaments.push(doc.data());
          });

            console.log(tournaments);
            }

            loadTournaments();

document.querySelectorAll(".join-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
alert(
  "Tournament" +
  "\nEntry: ₹" + tournaments[index].Entry +
  "\nPrize: ₹" + tournaments[index].Prize +
  "\nTime: " + tournaments[index].Time +
  "\nSlots: " + tournaments[index].Slots
);
  });
});
