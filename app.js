const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".modal__fullimg");
const caption = document.querySelector(".modal__caption");


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Ändrar så att rätt bild och text kommer upp.
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
if(e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove("open");
}
});
