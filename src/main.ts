import './style.css';

import { createHeader, HeaderData } from './components/header';
import { createFooter, FooterData } from './components/footer';
import { createHomepage, HomeData } from './components/homepage';
import { createCategoryPage } from './components/category';
import { createProductPage } from './components/product';
import { loadInfo } from './app/Api';
import Navigo from 'navigo';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header></header>
  <main></main>
  <footer></footer>
`;

const header = document.querySelector('header');
if (header) {
  const elem = HeaderData.map(
    (item: {
      popup: any;
      link: any;
      cross: any;
      logo: any;
      img1: any;
      img2: any;
    }) => createHeader(item),
  ).join('');
  header.innerHTML = elem;
}
const footer = document.querySelector('footer');
if (footer) {
  const elem = FooterData.map(
    (item: {
      panelbold: any;
      email: any;
      button: any;
      logo: any;
      footerdescr: any;
      twttr: any;
      fcbk: any;
      inst: any;
      git: any;
      rights: any;
      payments: any;
    }) => createFooter(item),
  ).join('');
  footer.innerHTML = elem;
}

export const router = new Navigo('/');

function handleChange(
  handler: (params?: any) => Promise<HTMLElement>,
  params?: unknown,
) {
  const main = document.querySelector('main');
  if (main) {
    console.log('handleRouteChange page', main);
    main.innerHTML = '';

    handler(params).then((page) => {
      console.log('handleRouteChange page', page);
      main.append(page);
    });
  }
}

router.on({
  '/': () => {
    handleChange(createHomepage, HomeData[0]);
    router.navigate('/');
  },
  '/category/:id': async (params: { data: { id: any } }) => {
    const categoryData = await loadInfo(params.data.id);
    console.log(categoryData, 'thats it');
    handleChange(() => createCategoryPage(categoryData));
    router.navigate(`/category/${params.data.id}`);
  },
  '/category/:id/:proId': async (params: {
    data: { id: string; proId: string };
  }) => {
    const { id, proId } = params.data;
    const response = await loadInfo(id);
    const product = response.products.find((p) => p.id.toString() === proId);
    handleChange(() => createProductPage(product), { id, proId });
    router.navigate(`/category/${id}/${proId}`);
  },
});
router.resolve();
