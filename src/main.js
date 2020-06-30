// random color button clinic cards
let test = document.querySelectorAll(".clinic__card_button");
const setBg = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

for (let i = 0; i < test.length; i++) {
  test[i].addEventListener("click", function () {
    this.style.backgroundColor = setBg();
  });
}
//    RANDOM COLOR JQUERY
//   Jquery function random color clinic button
// $(".clinic__card_button").click(function () {
//   $(this).css("backgroundColor", setBg);
// });

document.getElementById('prev').addEventListener('click', minusSlide);
document.getElementById('next').addEventListener('click', plusSlide);
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  //var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
