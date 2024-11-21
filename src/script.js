const products = [
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 29.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "1 799 руб.",
    cost: "1 290 руб.",
  },
  {
    title: "Кроссовки Air Jordan",
    image: "./assets/images/slider/Rectangle 30.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "9 799 руб.",
    cost: "8 190 руб.",
  },
  {
    title: "Майка Jordan Sport",
    image: "./assets/images/slider/Rectangle .png",
    description:
      "Футболка Nike НБА Dri-FIT Miami Heat выполнена в стиле джерси City, в которых играет команда.",
    discountPrice: "3 099 руб.",
    cost: "2 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/Rectangle31 .png",
    description:
      "Шорты баскетбольные JBS-1120-014 свободного кроя для отличного комфорта во время игры.",
    discountPrice: "1 799 руб.",
    cost: "1 299 руб.",
  },
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 2119.png",
    description:
      "Мягкий материал мяча обеспечивает превосходный контакт с мячом во время игры.",
    discountPrice: "4 799 руб.",
    cost: "3 290 руб.",
  },
  {
    title: "Кроссовки Nike Lebron XVII",
    image: "./assets/images/slider/1.png",
    description:
      "Большая вставка разработана именно для Расса и выделена линиями, придающими такую форму.",
    discountPrice: "5 799 руб.",
    cost: "4 390 руб.",
  },
  {
    title: "Майка new york",
    image: "./assets/images/slider/2.png",
    description:
      "Футболка Nike НБА NEW YOURK Logo выполнена в стиле City Edition, в которых играет моя команда.",
    discountPrice: "2 099 руб.",
    cost: "1 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/4.png",
    description:
      "Повседневный стиль сочетается в шортах Jordan Jumpman Air TOP И дарит ощущение свободы.",
    discountPrice: "2 799 руб.",
    cost: "2 099 руб.",
  },
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 29.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "1 799 руб.",
    cost: "1 290 руб.",
  },
  {
    title: "Кроссовки Air Jordan",
    image: "./assets/images/slider/Rectangle 30.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "9 799 руб.",
    cost: "8 190 руб.",
  },
  {
    title: "Майка Jordan Sport",
    image: "./assets/images/slider/Rectangle .png",
    description:
      "Футболка Nike НБА Dri-FIT Miami Heat выполнена в стиле джерси City, в которых играет команда.",
    discountPrice: "3 099 руб.",
    cost: "2 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/Rectangle31 .png",
    description:
      "Шорты баскетбольные JBS-1120-014 свободного кроя для отличного комфорта во время игры.",
    discountPrice: "1 799 руб.",
    cost: "1 299 руб.",
  },
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 2119.png",
    description:
      "Мягкий материал мяча обеспечивает превосходный контакт с мячом во время игры.",
    discountPrice: "4 799 руб.",
    cost: "3 290 руб.",
  },
  {
    title: "Кроссовки Nike Lebron XVII",
    image: "./assets/images/slider/1.png",
    description:
      "Большая вставка разработана именно для Расса и выделена линиями, придающими такую форму.",
    discountPrice: "5 799 руб.",
    cost: "4 390 руб.",
  },
  {
    title: "Майка new york",
    image: "./assets/images/slider/2.png",
    description:
      "Футболка Nike НБА NEW YOURK Logo выполнена в стиле City Edition, в которых играет моя команда.",
    discountPrice: "2 099 руб.",
    cost: "1 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/4.png",
    description:
      "Повседневный стиль сочетается в шортах Jordan Jumpman Air TOP И дарит ощущение свободы.",
    discountPrice: "2 799 руб.",
    cost: "2 099 руб.",
  },
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 29.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "1 799 руб.",
    cost: "1 290 руб.",
  },
  {
    title: "Кроссовки Air Jordan",
    image: "./assets/images/slider/Rectangle 30.png",
    description:
      "Кроссовки Air Jordan 5 Retro 'Top 3' Закругленный носок, плоская резиновая подошва.",
    discountPrice: "9 799 руб.",
    cost: "8 190 руб.",
  },
  {
    title: "Майка Jordan Sport",
    image: "./assets/images/slider/Rectangle .png",
    description:
      "Футболка Nike НБА Dri-FIT Miami Heat выполнена в стиле джерси City, в которых играет команда.",
    discountPrice: "3 099 руб.",
    cost: "2 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/Rectangle31 .png",
    description:
      "Шорты баскетбольные JBS-1120-014 свободного кроя для отличного комфорта во время игры.",
    discountPrice: "1 799 руб.",
    cost: "1 299 руб.",
  },
  {
    title: "Баскетбольный мяч",
    image: "./assets/images/slider/Rectangle 2119.png",
    description:
      "Мягкий материал мяча обеспечивает превосходный контакт с мячом во время игры.",
    discountPrice: "4 799 руб.",
    cost: "3 290 руб.",
  },
  {
    title: "Кроссовки Nike Lebron XVII",
    image: "./assets/images/slider/1.png",
    description:
      "Большая вставка разработана именно для Расса и выделена линиями, придающими такую форму.",
    discountPrice: "5 799 руб.",
    cost: "4 390 руб.",
  },
  {
    title: "Майка new york",
    image: "./assets/images/slider/2.png",
    description:
      "Футболка Nike НБА NEW YOURK Logo выполнена в стиле City Edition, в которых играет моя команда.",
    discountPrice: "2 099 руб.",
    cost: "1 300 руб.",
  },
  {
    title: "Шорты баскетбольные",
    image: "./assets/images/slider/4.png",
    description:
      "Повседневный стиль сочетается в шортах Jordan Jumpman Air TOP И дарит ощущение свободы.",
    discountPrice: "2 799 руб.",
    cost: "2 099 руб.",
  },
];

const sliderContent = document.querySelector(".hot__slider-cards");
const cards = document.querySelectorAll(".hot__slider-card");
const prevButton = document.querySelector(".hot__slider-button_prev");
const nextButton = document.querySelector(".hot__slider-button_next");
const scrollbar = document.querySelector(".hot__slider-line-scroll");

let currentIndex = 0;
const itemsPerSlide = 4;
const totalCards = products.length;

function createCard(product) {
  return `
  <div class="hot__slider-card slider__card card">
    <div class="card__container">
      <div class="card__content">
        <h3 class="card__title">${product.title}</h3>
        <div class="card__image">
          <img src="${product.image}" alt="" class="card__source">
        </div>
        <p class="card__description">${product.description}</p>
      </div>
      <div class="card__price">
        <p class="card__discount-price">${product.discountPrice}</p>
        <a href="" class="card__cost"><span>${product.cost}</span>
        <svg class="card__icon-arrow icon icon-arrow">
          <use xlink:href="assets/icons/sprite.svg#icon-arrow"></use>
        </svg></a>
      </div>
    </div>
  </div>
  `;
}

function updateSlider() {
  const start = currentIndex * itemsPerSlide;
  const end = start + itemsPerSlide;
  const cardsToShow = products.slice(start, end).map(createCard).join("");

  sliderContent.innerHTML = cardsToShow;

  const scrollbarPosition =
    ((currentIndex + 0) /
      Math.ceil((totalCards - itemsPerSlide) / itemsPerSlide)) *
    90;
  scrollbar.style.left = `${scrollbarPosition}%`;

  const cards = sliderContent.querySelectorAll(".hot__slider-card");
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.add("visible");
    });
  }, 10);
}

nextButton.addEventListener("click", () => {
  if (currentIndex < Math.ceil(totalCards / itemsPerSlide) - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

updateSlider();
