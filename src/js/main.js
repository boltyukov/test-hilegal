import "../scss/style.scss";

(function () {
  const isOpen = document.querySelector(".header__box-burger");
  const isClose = document.querySelector(".header__nav-close");
  const navigation = document.querySelector(".header__nav");
  isOpen.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  isClose.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
})();
