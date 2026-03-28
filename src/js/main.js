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

(function () {
  const mainOneItems = document.querySelectorAll(".mainOne__links-item");
  const mainOneContents = document.querySelectorAll(".mainOne__content-item");

  mainOneItems.forEach((mainOne, inx) => {
    mainOne.addEventListener("click", () => {
      mainOneItems.forEach((mainOne) => {
        mainOne.classList.remove("active");
      });
      mainOneContents.forEach((content) => {
        content.classList.remove("active");
      });

      mainOneItems[inx].classList.add("active");
      mainOneContents[inx].classList.add("active");
    });
  });
})();

const translations = {
  en: {
    address: "Kyiv , mechnikova str. , 14/1",
  },
  ua: {
    address: "Київ ,  вул. Мечникова  14/1",
  },
  ru: {
    address: "Киев, ул. Мечникова, 14/1",
  },
};
window.changeLanguage = function (lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const langLinks = document.querySelectorAll(".header__langs-link");

  langLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    `.header__langs-link[onclick="changeLanguage('${lang}')"]`,
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
};
