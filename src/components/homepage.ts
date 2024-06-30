import { loadCategList, loadInfo } from '../app/Api';
import { router } from '../main';

export const HomeData = [
  {
    maintext1: 'FIND ',
    anything: 'ANYTHING ',
    maintext2: 'THAT MATCHES YOUR STYLE',
    descr1:
      'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
    btn: 'Shop Now',
    statsbold1: '200+',
    statsreg1: 'International Brands',
    statsbold2: '2,000+',
    statsreg2: 'High-Quality Products',
    statsbold3: '30,000+',
    statsreg3: 'Happy Customers',
    spark1: '../src/assets/images/spark1.svg',
    spark2: '../src/assets/images/spark2.svg',
    brand1: '../src/assets/images/versace.svg',
    brand2: '../src/assets/images/zara.svg',
    brand3: '../src/assets/images/gucci.svg',
    brand4: '../src/assets/images/prada.svg',
    brand5: '../src/assets/images/calvinklein.svg',
    categories: 'Categories',
  },
];

export async function createHomepage(homepageCont: {
  maintext1: any;
  anything: any;
  maintext2: any;
  descr1: any;
  btn: any;
  statsbold1: any;
  statsbold2: any;
  statsbold3: any;
  statsreg1: any;
  statsreg2: any;
  statsreg3: any;
  spark1: any;
  spark2: any;
  brand1: any;
  brand2: any;
  brand3: any;
  brand4: any;
  brand5: any;
  categories: any;
}): Promise<HTMLElement> {
  const homepage = document.createElement('div');
  homepage.className = 'homepage';
  homepage.setAttribute('href', '/');
  homepage.setAttribute('data-navigo', '');
  homepage.innerHTML = `
    <div class='homepageCont'>
    <div class='homeclmn1'>
    <div id='maintext'>${homepageCont.maintext1}<span id='anything'>${homepageCont.anything}</span>${homepageCont.maintext2}</div>
    <div id='descr1'>${homepageCont.descr1}</div>
    <button id='shop'>${homepageCont.btn}</button>
    <table class='stats'>
    <tr>
    <td class='statsbold'>${homepageCont.statsbold1}</td>
    <td class='statsbold'>${homepageCont.statsbold2}</td>
    <td class='statsbold'>${homepageCont.statsbold3}</td>
    </tr>
   <tr>
    <td class='statsreg'>${homepageCont.statsreg1}</td>
    <td class='statsreg'>${homepageCont.statsreg2}</td>
    <td class='statsreg'>${homepageCont.statsreg3}</td>
   </tr>
    </table>
    </div>
    <div class='homeclmn2'>
    <img id='spark1' src='${homepageCont.spark1}'>
    <img id='spark2' src='${homepageCont.spark2}'>
    </div>
    </div>
    <div class='brands'>
    <div class='brandsCont'>
    <img id='brand1' src='${homepageCont.brand1}'>
    <img id='brand2' src='${homepageCont.brand2}'>
    <img id='brand3' src='${homepageCont.brand3}'>
    <img id='brand4' src='${homepageCont.brand4}'>
    <img id='brand5' src='${homepageCont.brand5}'>
    </div>
    </div>
    <div class='categories'>
    <div id='ctgrsTitle'>${homepageCont.categories}</div>
    <div class='cards'></div>
    </div>
    `;
  return homepage;
}

loadCategList().then((data: any) => {
  const cards = document.querySelector('.cards');
  if (cards !== null && cards !== undefined) {
    cards.innerHTML = '';
    cards.append(...createCatCards(data as any[]));
  }
});

function createCatCards(data: any[]) {
  if (!data || data.length === 0) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Error';
    return [errorDiv];
  }

  const cardDivs: HTMLDivElement[] = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const itemCap = item.charAt(0).toUpperCase() + item.slice(1);
    const cardDiv = document.createElement('div');
    cardDiv.id = 'card';
    cardDiv.textContent = itemCap;

    cardDiv.addEventListener('click', () => {
      router.navigate(`/category/${item}`);
    });
    cardDivs.push(cardDiv);
  }

  return cardDivs;
}
