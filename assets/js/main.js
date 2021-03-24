"use strict";

const products = document.getElementsByClassName('category__product');
const productDetails = document.getElementById('product-details');
const productDetailsImage = document.querySelector('.product-details__holder--img');
const productDetailsTitle = document.querySelector('.product-details__holder__info--title');
const productDetailsDescription = document.querySelector('.product-details__holder__info--description');
const productDetailsPrice = document.querySelector('.product-details__holder__info--price');
const menuLink = document.querySelector('.menu-link');
const saleLink = document.querySelector('.sale-link');
const closeBtn = document.querySelector('.product-details__holder--close-btn');

const categories = document.getElementById("categories");

const newest = document.getElementById("newest");
const daily = document.getElementById("daily");
const sale = document.getElementById("sale");

const offset = 440;

const bodyRect = document.body.getBoundingClientRect().top;

const newestRectTop = newest.getBoundingClientRect().top;
const newestRectBottom = newest.getBoundingClientRect().bottom;
const newestPositionTop = newestRectTop - bodyRect;
const newestPositionBottom = newestRectBottom - bodyRect;

const dailyRectTop = daily.getBoundingClientRect().top;
const dailyRectBottom = daily.getBoundingClientRect().bottom;
const dailyPositionTop = dailyRectTop - bodyRect;
const dailyPositionBottom = dailyRectBottom - bodyRect;

const saleRectTop = sale.getBoundingClientRect().top;
const saleRectBottom = sale.getBoundingClientRect().bottom;
const salePositionTop = saleRectTop - bodyRect;
const salePositionBottom = saleRectBottom - bodyRect;

const newestOffsetPositionTop = newestPositionTop - offset;
const newestOffsetPositionBottom = newestPositionBottom - offset;

const dailyOffsetPositionTop = dailyPositionTop - offset;
const dailyOffsetPositionBottom = dailyPositionBottom - offset;

const saleOffsetPositionTop = salePositionTop - offset;
const saleOffsetPositionBottom = salePositionBottom - offset;

const newestBtn = document.getElementById("newest-btn");
const dailyBtn = document.getElementById("daily-btn");
const saleBtn = document.getElementById("sale-btn");

menuLink.addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({
    top: newestOffsetPositionTop,
    behavior: "smooth",
  })
}
);

saleLink.addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({
    top: saleOffsetPositionTop + 0.5,
    behavior: "smooth",
  })
}
);

newestBtn.addEventListener("click", () =>
  window.scrollTo({
    top: newestOffsetPositionTop,
    behavior: "smooth",
  })
);

dailyBtn.addEventListener("click", () =>
  window.scrollTo({
    top: dailyOffsetPositionTop + 0.5,
    behavior: "smooth",
  })
);

saleBtn.addEventListener("click", () =>
  window.scrollTo({
    top: saleOffsetPositionTop + 0.5,
    behavior: "smooth",
  })
);

const swiperMain = new Swiper(".swiper-main", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperCategories = new Swiper(".swiper-categories", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 10,
    },
  }
});

document.addEventListener("scroll", () => {
  if (pageYOffset < 900) {
    categories.classList.add("sticky-60");
    categories.classList.remove("sticky-50");
  } else {
    categories.classList.add("sticky-50");
    categories.classList.remove("sticky-60");
  }
  if (pageYOffset > newestOffsetPositionTop && pageYOffset < newestOffsetPositionBottom) {
    newestBtn.classList.add("border-bottom");
  } else {
    newestBtn.classList.remove("border-bottom");
  }
  if (pageYOffset > dailyOffsetPositionTop && pageYOffset < dailyOffsetPositionBottom) {
    dailyBtn.classList.add("border-bottom");
  } else {
    dailyBtn.classList.remove("border-bottom");
  }
  if (pageYOffset > saleOffsetPositionTop && pageYOffset < saleOffsetPositionBottom) {
    saleBtn.classList.add("border-bottom");
  } else {
    saleBtn.classList.remove("border-bottom");
  }
});

Array.from(products).forEach(p => {
  p.addEventListener('click', () => {
    productDetails.classList.remove('d-none');
    productDetailsImage.src =  p.children[0].src;
    productDetailsTitle.textContent =  p.children[1].textContent;
    productDetailsDescription.textContent =  p.children[2].textContent;
    productDetailsPrice.textContent =  p.children[3].textContent;
  })
})

closeBtn.addEventListener('click', () => {
  productDetails.classList.add('d-none');
})

const productDetailsHolder = document.querySelector('.product-details__holder');

productDetails.addEventListener('click', () => {
  productDetails.classList.add('d-none');
})

productDetailsHolder.addEventListener('click', (e) => {
  e.stopPropagation();
})
