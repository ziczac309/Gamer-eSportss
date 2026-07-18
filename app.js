import { db } from "./Firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 3000);
}

showSlides();

async function loadTournaments() {

  const tournamentList = document.getElementById("tournament-list");
  tournamentList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "tournaments"));

  querySnapshot.forEach((doc) => {

    const t = doc.data();

    tournamentList.innerHTML += `
      <div class="tournament-card">

        <img src="${t.image}" class="game-banner">

        <div class="card-content">

          <h3>${t.title}</h3>

          <div class="details">
            <span>💰 Entry: ₹${t.entry}</span>
            <span>🏆 Prize: ₹${t.prize}</span>
          </div>

          <div class="details">
            <span>👥 Slots: ${t.slots}</span>
            <span>⏰ ${t.time}</span>
          </div>

          <button class="join-btn">JOIN NOW</button>

        </div>

      </div>
    `;

  });

  const buttons = document.querySelectorAll(".join-btn");

  buttons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

      const tournament = querySnapshot.docs[index].data();

      localStorage.setItem(
        "selectedTournament",
        JSON.stringify(tournament)
      );

      window.location.href = "tournament.html";

    });

  });

}

}

loadTournaments();
