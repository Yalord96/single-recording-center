// random color button clinic cards
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return  "#" + randomColor;
  }

$('.clinic__card_button').click(function () {
    $( this ).css('backgroundColor', setBg)
});

// var test = document.getElementById('random_color');
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     test.style.backgroundColor= "#" + randomColor;
// }
// test.addEventListener("click", setBg);

