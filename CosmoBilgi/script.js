
function bilgiGuncelle() {
  const secilen = document.getElementById("gezegenSec").value;

  const bilgiler = {
    mars: {
      baslik: "Mars",
      gorsel: "mars.jpg",
      aciklama: "Mars, kızıl gezegen olarak bilinir.",
      ses: "mars.mp3"
    },
    venus: {
      baslik: "Venüs",
      gorsel: "venus.jpg",
      aciklama: "Venüs, en sıcak gezegendir.",
      ses: "venus.mp3"
    },
    jupiter: {
      baslik: "Jüpiter",
      gorsel: "jupiter.jpg",
      aciklama: "Jüpiter, en büyük gezegendir.",
      ses: "jupiter.mp3"
    }
  };

  const secilenBilgi = bilgiler[secilen];
  document.getElementById("gezegenBaslik").innerText = secilenBilgi.baslik;
  document.getElementById("gezegenGorsel").src = secilenBilgi.gorsel;
  document.getElementById("gezegenAciklama").innerText = secilenBilgi.aciklama;
  document.getElementById("gezegenSes").src = secilenBilgi.ses;
}

function sesCal() {
  document.getElementById("gezegenSes").play();

