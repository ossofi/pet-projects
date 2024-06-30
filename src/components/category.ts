import { loadInfo } from '../app/Api';
import { router } from '../main';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export async function createCategoryPage(
  categoryData: any,
): Promise<HTMLElement> {
  const info = await loadInfo();

  const categories = document.createElement('div');
  categories.className = 'category';
  categories.setAttribute('data-navigo', '');

  const topLine = document.createElement('hr');
  topLine.id = 'lineCtgrs';

  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'breadcrumb';
  breadcrumb.setAttribute('aria-label', 'breadcrumbs');

  const breadcrumbList = document.createElement('ul');

  const breadcrumbHome = document.createElement('li');

  const breadcrumbHomeLink = document.createElement('a');
  breadcrumbHomeLink.href = '/';
  breadcrumbHomeLink.textContent = 'Home';

  breadcrumbHome.appendChild(breadcrumbHomeLink);

  const breadcrumbActive = document.createElement('li');
  breadcrumbActive.className = 'is-active';

  const breadcrumbActiveLink = document.createElement('a');
  breadcrumbActiveLink.href = '';
  breadcrumbActiveLink.setAttribute('aria-current', 'page');

  let currCat = categoryData.products[0].category;
  currCat = currCat.charAt(0).toUpperCase() + currCat.substr(1);
  breadcrumbActiveLink.textContent = currCat;

  breadcrumbActive.appendChild(breadcrumbActiveLink);
  breadcrumbList.append(breadcrumbHome, breadcrumbActive);
  breadcrumb.appendChild(breadcrumbList);

  const groceriesContainer = document.createElement('div');
  groceriesContainer.className = 'groceries';

  const filterContainer = document.createElement('div');
  filterContainer.className = 'filter';

  const filertext = document.createElement('div');
  filertext.textContent = 'Filters';
  filertext.id = 'filterText';

  const filerImg = document.createElement('img');
  filerImg.src = '../src/assets/images/filter.svg';

  filertext.append(filerImg);

  const filtLine = document.createElement('hr');
  filtLine.id = 'filtLine';

  const filtertext2 = document.createElement('div');
  filtertext2.textContent = 'Sort';
  filtertext2.id = 'filterText2';

  const sort = document.createElement('div');

  const filtLine2 = document.createElement('hr');
  filtLine2.id = 'filtLine';

  const filtertext3 = document.createElement('div');
  filtertext3.textContent = 'Price';
  filtertext3.id = 'filterText3';

  const grcrsCont = document.createElement('div');
  grcrsCont.className = 'grcrsCont';

  const groceriesTitle = document.createElement('div');
  groceriesTitle.id = 'grcrsTitle';
  groceriesTitle.textContent = currCat;

  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'grCards';

  const bottomLine = document.createElement('hr');
  bottomLine.id = 'lineCtgrsBttm';

  let ascOrDesc = 0;

  const sortAscend = document.createElement('div');
  sortAscend.textContent = 'Ascending';
  sortAscend.id = 'ascend';
  sortAscend.addEventListener('click', () => {
    ascOrDesc = 0;
    sortProductsAscending(categoryData.products, cardsContainer);
    sortAscend.style.fontWeight = 'bold';
    sortDescend.style.fontWeight = 'normal';
  });

  const sortDescend = document.createElement('div');
  sortDescend.textContent = 'Descending';
  sortDescend.id = 'descend';
  sortDescend.addEventListener('click', () => {
    ascOrDesc = 1;
    sortProductsDescending(categoryData.products, cardsContainer);
    sortDescend.style.fontWeight = 'bold';
    sortAscend.style.fontWeight = 'normal';
  });

  sort.append(sortAscend, sortDescend);

  const sliderCont = document.createElement('div');
  const slider: any = document.createElement('div');
  slider.id = 'slider';

  noUiSlider.create(slider, {
    start: [0, 1000],
    step: 100,
    connect: true,
    range: {
      min: 0,
      max: 3000,
    },
    tooltips: [
      {
        to: function (value) {
          return '$' + value;
        },
      },
      {
        to: function (value) {
          return '$' + value;
        },
      },
    ],
  });

  sliderCont.append(slider);

  const filtLine3 = document.createElement('hr');
  filtLine3.id = 'filtLine2';

  const button1 = document.createElement('button');
  button1.id = 'catBttn1';
  button1.textContent = 'Apply Filter';
  button1.addEventListener('click', () => {
    let value1 = slider.noUiSlider.options.tooltips[0]
      .to(slider.noUiSlider.get()[0])
      .slice(1, -3);
    let price1 = Number(value1);
    let value2 = slider.noUiSlider.options.tooltips[1]
      .to(slider.noUiSlider.get()[1])
      .slice(1, -3);
    let price2 = Number(value2);
    applyFilter(
      categoryData.products,
      cardsContainer,
      price1,
      price2,
      ascOrDesc,
    );
  });
  const button2 = document.createElement('button');
  button2.id = 'catBttn2';
  button2.textContent = 'Reset Filter';
  button2.addEventListener('click', () => {
    slider.noUiSlider.set([0, 1000]);
    sortProductsAscending(categoryData.products, cardsContainer);
  });

  filtertext2.append(sort);
  filterContainer.append(
    filertext,
    filtLine,
    filtertext2,
    filtLine2,
    filtertext3,
    sliderCont,
    filtLine3,
    button1,
    button2,
  );

  groceriesContainer.append(filterContainer, grcrsCont);
  grcrsCont.append(groceriesTitle, cardsContainer, bottomLine);
  categories.append(topLine, breadcrumb, groceriesContainer);

  categoryData.products.forEach((categoryData: any) => {
    const cardElement = createCard(categoryData, info);
    cardsContainer.appendChild(cardElement);
  });

  return categories;
}

function sortProductsAscending(products: any[], container: HTMLElement) {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  container.innerHTML = '';
  sortedProducts.forEach((product) => {
    const cardElement = createCard(product);
    container.appendChild(cardElement);
  });
}

function sortProductsDescending(products: any[], container: HTMLElement) {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  container.innerHTML = '';
  sortedProducts.forEach((product) => {
    const cardElement = createCard(product);
    container.appendChild(cardElement);
  });
}
function applyFilter(
  products: any[],
  container: HTMLElement,
  minPrice: number,
  maxPrice: number,
  ascOrDesc: any,
) {
  let productsToSort = [];
  if (ascOrDesc === 0) {
    productsToSort = [...products].sort((a, b) => a.price - b.price);
  }
  if (ascOrDesc === 1) {
    productsToSort = [...products].sort((a, b) => b.price - a.price);
  }
  const sortedProducts = productsToSort
    .filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    })
    .sort((a, b) => {
      if (a.price > maxPrice || b.price < minPrice) {
        return 1;
      } else if (a.price < minPrice || b.price > maxPrice) {
        return -1;
      } else {
        return 0;
      }
    });
  container.innerHTML = '';
  sortedProducts.forEach((product) => {
    const cardElement = createCard(product);
    container.appendChild(cardElement);
    console.log('filt');
  });
}

function createCard(post: any, info?: any): HTMLElement {
  const card = document.createElement('div');
  card.id = 'groceryCard';

  const imgBg = document.createElement('div');
  imgBg.id = 'imgBg';

  const prod = post.id;
  const currCategory = post.category;

  imgBg.addEventListener('click', () => {
    router.navigate(`/category/${currCategory}/${prod}`);
  });

  const img = document.createElement('img');
  img.src = post.images[0];
  img.id = 'proId';

  const title = document.createElement('div');
  title.innerText = post.title;
  title.id = 'prodName';

  const ratingContainer = document.createElement('div');
  ratingContainer.id = 'ratingContainer';

  const rating = document.createElement('div');
  rating.innerText = Math.round(post.rating * 2) / 2 + '/5';
  rating.id = 'ratingId';

  ratingContainer.appendChild(rating);
  ratingContainer.appendChild(createStarRating(post.rating));

  const priceContainer = document.createElement('div');
  priceContainer.className = 'priceCont';

  const price = document.createElement('div');
  price.innerText = `$${post.price}`;
  price.id = 'priceId';

  let noDiscPrice = Math.round(
    post.price + (post.price * post.discountPercentage) / 100,
  );

  const oldPrice = document.createElement('div');
  oldPrice.innerText = `$${noDiscPrice}`;
  oldPrice.id = 'firstPrice';

  const discount = document.createElement('div');
  discount.innerText = '-' + post.discountPercentage + '%';
  discount.id = 'discountPerc';

  priceContainer.append(price, oldPrice, discount);

  imgBg.appendChild(img);
  card.append(imgBg, title, ratingContainer, priceContainer);
  return card;
}

function createStarRating(rating: number): HTMLElement {
  const starContainer = document.createElement('div');
  starContainer.className = 'starContainer';

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement('img');
    star.src = '../src/assets/images/star.svg';
    star.className = 'star';
    starContainer.appendChild(star);
  }

  if (hasHalfStar) {
    const halfStar = document.createElement('img');
    halfStar.src = '../src/assets/images/star.svg';
    halfStar.className = 'halfstar';
    starContainer.appendChild(halfStar);
  }

  return starContainer;
}
