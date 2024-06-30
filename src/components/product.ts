import { loadInfo } from '../app/Api';
import { router } from '../main';
import starSvg from '../assets/images/star.svg';

export async function createProductPage(
  productData: any,
): Promise<HTMLElement> {
  const info = await loadInfo(productData.category);

  const product = document.createElement('div');
  product.className = 'productPage';
  product.setAttribute('data-navigo', '');

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

  const breadcrumbCategory = document.createElement('li');

  const breadcrumbCategoryLink = document.createElement('a');
  breadcrumbCategoryLink.href = `/category/${productData.category}`;

  let currCat = productData.category;
  currCat = currCat.charAt(0).toUpperCase() + currCat.substr(1);
  breadcrumbCategoryLink.textContent = currCat;

  breadcrumbCategory.appendChild(breadcrumbCategoryLink);

  const breadcrumbActive = document.createElement('li');
  breadcrumbActive.className = 'is-active';

  const breadcrumbActiveLink = document.createElement('a');
  breadcrumbActiveLink.href = '';
  breadcrumbActiveLink.setAttribute('aria-current', 'page');
  breadcrumbActiveLink.textContent = productData.title;

  breadcrumbActive.appendChild(breadcrumbActiveLink);
  breadcrumbList.append(breadcrumbHome, breadcrumbCategory, breadcrumbActive);
  breadcrumb.appendChild(breadcrumbList);

  const productContainer = document.createElement('div');
  productContainer.className = 'productContainer';

  const productImage = document.createElement('div');
  productImage.className = 'productImgs';

  const mainImgBg = document.createElement('div');
  mainImgBg.className = 'mainImgBg';

  const img = document.createElement('img');
  img.src = productData.images[0];
  img.id = 'mainProdImg';

  mainImgBg.append(img);

  const sideImgs = document.createElement('div');
  sideImgs.id = 'sideImgs';

  const img1Bg = document.createElement('div');
  img1Bg.id = 'prodImgBg';

  const img2 = document.createElement('img');
  img2.src = productData.images[0];
  img2.id = 'prodImg1';

  img1Bg.append(img2);

  const img2Bg = document.createElement('div');
  img2Bg.id = 'prodImgBg';

  const img3 = document.createElement('img');
  if (productData.images[1]) img3.src = productData.images[1];
  img3.id = 'prodImg1';

  img2Bg.append(img3);

  const img3Bg = document.createElement('div');
  img3Bg.id = 'prodImgBg';

  const img4 = document.createElement('img');
  if (productData.images[2]) img4.src = productData.images[2];
  img4.id = 'prodImg1';

  img3Bg.append(img4);

  sideImgs.append(img1Bg, img2Bg, img3Bg);
  productImage.append(sideImgs, mainImgBg);

  const productInfo = document.createElement('div');
  productInfo.className = 'productInfo';

  const productTitle = document.createElement('div');
  productTitle.textContent = productData.title;
  productTitle.id = 'productTitle';

  const productDescription = document.createElement('div');
  productDescription.textContent = productData.description;
  productDescription.id = 'prodDescr';

  const ratingContainer = document.createElement('div');
  ratingContainer.id = 'ratingCont';

  const rating = document.createElement('div');
  rating.innerText = Math.round(productData.rating * 2) / 2 + '/5';
  rating.id = 'prodRatingId';

  ratingContainer.appendChild(rating);
  ratingContainer.appendChild(createStarRating(productData.rating));

  const priceContainer = document.createElement('div');
  priceContainer.className = 'priceContainer';

  const price = document.createElement('div');
  price.innerText = `$${productData.price}`;
  price.id = 'priceId2';

  let noDiscPrice = Math.round(
    productData.price +
      (productData.price * productData.discountPercentage) / 100,
  );

  const oldPrice = document.createElement('div');
  oldPrice.innerText = `$${noDiscPrice}`;
  oldPrice.id = 'oldPrice';

  const discount = document.createElement('div');
  discount.innerText = '-' + productData.discountPercentage + '%';
  discount.id = 'discount';

  const prodLine = document.createElement('hr');
  prodLine.id = 'prodLine';

  const brand = document.createElement('div');
  brand.innerText = 'Brand';
  brand.id = 'brand';

  const prodBrand = document.createElement('div');
  prodBrand.innerText = productData.brand;
  prodBrand.id = 'prodBrand';

  const prodLine2 = document.createElement('hr');
  prodLine2.id = 'prodLine2';

  const stock = document.createElement('div');
  stock.innerText = 'In Stock';
  stock.id = 'stock';

  const stockNum = document.createElement('div');
  stockNum.innerText = productData.stock + ' items';
  stockNum.id = 'stockNum';

  const prodLine3 = document.createElement('hr');
  prodLine3.id = 'prodLine2';

  const cartFunc = document.createElement('div');
  cartFunc.id = 'cartFunc';

  const clicker = document.createElement('div');
  clicker.id = 'clicker';

  const valueElement: any = document.createElement('div');
  valueElement.textContent = '0';
  let value = 0;

  const add = document.createElement('button');
  add.id = 'add';
  add.textContent = '+';
  add.addEventListener('click', () => {
    value += 1;
    valueElement.textContent = value;
  });

  const substract = document.createElement('button');
  substract.id = 'sub';
  substract.textContent = '-';
  substract.addEventListener('click', () => {
    if (value > 0) {
      value -= 1;
    }
    valueElement.textContent = value;
  });

  clicker.append(substract, valueElement, add);

  const addToCart = document.createElement('button');
  addToCart.textContent = 'Add to Cart';
  addToCart.id = 'addToCart';

  cartFunc.append(clicker, addToCart);

  priceContainer.append(price, oldPrice, discount);

  productInfo.append(
    productTitle,
    ratingContainer,
    priceContainer,
    productDescription,
    prodLine,
    brand,
    prodBrand,
    prodLine2,
    stock,
    stockNum,
    prodLine3,
    cartFunc,
  );
  productContainer.append(productImage, productInfo);
  product.append(topLine, breadcrumb, productContainer);

  return product;
}

function createStarRating(rating: number): HTMLElement {
  const starContainer = document.createElement('div');
  starContainer.className = 'starContainer';

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement('img');
    star.src = starSvg;
    star.className = 'star2';
    starContainer.appendChild(star);
  }

  if (hasHalfStar) {
    const halfStar = document.createElement('img');
    halfStar.src = starSvg;
    halfStar.className = 'halfstar2';
    starContainer.appendChild(halfStar);
  }

  return starContainer;
}
