var click = document.getElementById("burger");
var headerNav = document.getElementById("headerNav");

click.addEventListener("click", function () {
  click.classList.toggle("burger-active");
  headerNav.classList.toggle("menu-active");
});

var language = document.getElementById("language-drop");

language.addEventListener("click", function () {
  language.classList.toggle("active");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// $(function () {
//   (function quantityProducts() {
//     var $quantityArrowMinus = $(".quantity-arrow-minus");
//     var $quantityArrowPlus = $(".quantity-arrow-plus");
//     var $quantityNum = $(".quantity-num");

//     $quantityArrowMinus.click(quantityMinus);
//     $quantityArrowPlus.click(quantityPlus);

//     function quantityMinus() {
//       if ($quantityNum.val() > 1) {
//         $quantityNum.val(+$quantityNum.val() - 1);
//       }
//     }

//     function quantityPlus() {
//       $quantityNum.val(+$quantityNum.val() + 1);
//     }
//   })();
// });
