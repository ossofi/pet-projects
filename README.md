# Hometask TypeScript Vite DOM API

Your task is to develop webpages (see Pages section down below) according to the provided Figma design.

Figma design link: https://www.figma.com/design/Q0zYyVhjvTQMKg8tqtUPLB/E-commerce-Website-Template-(Freebie)-(Community)?node-id=0-1&t=4ZgOl1BpZ6sfCMRZ-0

## Technical Requirements

- Vite 5 https://vitejs.dev/
- TypeScript 5 https://www.typescriptlang.org/
- HTML5 https://www.w3.org/TR/2011/WD-html5-20110405/
- CCS3/SCSS/SASS/Less or any other approach
- CSS libraries (with required JS/TS for some components like Modals, Tabs, Pagination, etc), possible choise:
  - Tailwind CSS https://tailwindcss.com/
  - Bulma https://bulma.io/
  - Bootstrap https://getbootstrap.com/
  - See more at https://github.com/troxler/awesome-css-frameworks
- Router Navigo https://www.npmjs.com/package/navigo
- Fonts
  - Rubik https://fonts.google.com/specimen/Rubik
  - Poppins https://fonts.google.com/specimen/Poppins
- Fetch API https://learn.javascript.ru/fetch-api
- Backend https://dummyjson.com/docs/products

## Pages

- Homepage Desktop
- Category Page Desktop
- Product Detail Page Desktop

**All pages should be implemented using DOM API. 3 ways how to do it**

- `createElementWithDocumentCreateElementAndAppend` approach
  - HTML example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithDocumentCreateElementAndAppend.html
  - JS example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithDocumentCreateElementAndAppend.js
- `createElementWithTemplateHTMLElementTag` approach
  - HTML example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithTemplateHTMLElementTag.html
  - JS example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithTemplateHTMLElementTag.js
- `createElementWithTemplateString` approach
  - HTML example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithTemplateString.html
  - JS example: https://autocode.git.epam.com/esde-js-ts/frontend-lecture-sandbox/-/blob/lecture-24-04-2024-dom-api/createElementWithTemplateString.js

### Homepage Desktop

<details>
<summary>Design</summary>
<img src="design\homepage\Homepage Desktop.jpg">
</details>

#### Components

- Header (shop.co title and two icons)
- Hero (FIND ANYTHING... title, an image, and all the rest components inside Hero section)
- Categories grid
  - Each category should be loaded from the Backend (see https://dummyjson.com/docs/products#products-category_list)
  - After load each category should be displayed in its own grey square according to the provided figma design (label inside make simple black)
  - Each category item must be clickable, click on each nagigates (Navigo) to the Category Page route `/category/:categoryName` where `categoryName` is the unique name taking from the backend response (see https://dummyjson.com/docs/products#products-category_list)
- STAY UPTO DATE ABOUT... form component
- Footer

### Category Page Desktop

<details>
<summary>Design</summary>
<img src="design\category\Category Page Desktop.jpg">
</details>

#### Components

- Header (shop.co title and two icons)
- Breadcrumbs (Home label on click must navigate to `/` page (Homepage)), Groceries label must be a label containg current `categoryName` (taking from navigo)
- Products grid
  - Each product should be loaded from the Backend accorindg to the `categoryName` (see https://dummyjson.com/docs/products#products-category)
  - After load each product should be displayed in its own card component according to the provided figma design
  - Each product item must be clickable, click on each nagigates (Navigo) to the Product Detail Page route `/:categoryName/:productId` where `productId` is the unique name taking from the backend response (see https://dummyjson.com/docs/products#products-category)
- Filters
  - Sort
    - Click on `Ascending` label must change sort order of the products (from the lowest price to the highest)
    - Click on `Descending` label must change sort order of the products (from the highest price to the lowest)
  - Price
    - Changing slider specify the minimal and maximum price of the product
  - Click on `Apply Filter` button taking select values from Sort and Price components and filter products in the Product grid
  - Click on `Reset Filter` button set sort to the default value (Ascending) and price to the default value (min 0 max 1000)
- STAY UPTO DATE ABOUT... form component
- Footer

### Product Detail Page Desktop

<details>
<summary>Design</summary>
<img src="design\product detail\Product Detail Page Desktop.jpg">
</details>

#### Components

- Header (shop.co title and two icons)
- Breadcrumbs
  - (Home label on click must navigate to `/` page (Homepage)),
  - Groceries label must be a label containg current `categoryName` (taking from navigo)
  - Tree oil 300ml label must a label containg current `productId` (taking from navigo)
- Product details grid
  - Each product should be loaded from the Backend (see https://dummyjson.com/docs/products#products-single)
  - After load display product data according to the provided figma design
  - Data to be displayed:
    - title ("Tree oil 30ml label" in the Figma design)
    - rating ("4.5/5" in the Figma design)
    - description ("The tree oil contains..."" grey text in the Figma design)
    - price ("$260" in the Figma design)
    - discountPercentage ("-40%" in the Figma design)
    - brand ("Hemani Tea" in the Figma design)
    - stock ("78 items" in the Figma design)
    - images (3 images put in the image gallery + one random image as a 4th one)
- STAY UPTO DATE ABOUT... form component
- Footer

## Evaluation criteria - max 10 points

### Render of pages (HTML, CSS, TS) - maximum 6 points

- Homepage <b>2 points</b>
- Category Page <b>2 points</b>
- Product Detail Page <b>2 points</b>

### Usage of Backend - 1 point

### Usage of Navigo - 1 point

### Usage of DOM API - 2 point
