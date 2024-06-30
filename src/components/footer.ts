import twSvg from '../assets/images/tw.svg';
import fcbkSvg from '../assets/images/fcbk.svg';
import instSvg from '../assets/images/inst.svg';
import gitSvg from '../assets/images/git.svg';
import paySvg from '../assets/images/payments.svg';

export const FooterData = [
  {
    panelbold: 'STAY UPTO DATE ABOUT OUR LATEST OFFERS',
    email: ' Enter your email address',
    button: 'Subscribe to Newsletter',
    logo: 'SHOP.CO',
    footerdescr:
      'We have clothes that suits your style and which you’re proud to wear. From women to men.',
    twttr: twSvg,
    fcbk: fcbkSvg,
    inst: instSvg,
    git: gitSvg,
    rights: 'Shop.co © 2000-2023, All Rights Reserved',
    payments: paySvg,
  },
];

export function createFooter(footerCont: {
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
}) {
  const footer = `
    <div class='footerPanel'>
    <div id='panelbold'>${footerCont.panelbold}</div>
    <div id='panelForm'>
    <form>
    <input type='text' id='email' placeholder='${footerCont.email}'> 
    <input type='button' id='footerbtn' value='${footerCont.button}'>
    </form>
    </div>
    </div>
    <div class='footerInfo'>
    <div class='infoCont'>
    <div id='footerLogo'>${footerCont.logo}</div>
    <div id='footerdescr'>${footerCont.footerdescr}</div>
    <div class='socials'>
    <img src='${footerCont.twttr}'>
    <img src='${footerCont.fcbk}'>
    <img src='${footerCont.inst}'>
    <img src='${footerCont.git}'>
    </div>
    </div>
    <div class='list'></div>
    </div>
    <hr id='line'>
    <div class='rightsPayment'>
    <div id='rights'>${footerCont.rights}</div>
    <img id='pay' src='${footerCont.payments}'>
    </div>
    `;
  return footer;
}
const ListData = [
  {
    p: 'COMPANY',
    li: ['About', 'Features', 'Works', 'Career'],
  },
  {
    p: 'HELP',
    li: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  { p: 'FAQ', li: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  {
    p: 'RESOURCES',
    li: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      'Youtube Playlist',
    ],
  },
];

export const footer = document.querySelector('footer');
if (footer) {
  const elem = FooterData.map((item) => createFooter(item)).join('');
  footer.innerHTML = elem;
}

function createList(list: { p: string; li: string[] }) {
  const listDiv = document.createElement('div');
  listDiv.id = 'listdiv';

  const p = document.createElement('p');
  p.textContent = list.p;
  p.id = 'listP';
  const ul = document.createElement('ul');

  const li1 = document.createElement('li');
  li1.textContent = list.li[0];
  const li2 = document.createElement('li');
  li2.textContent = list.li[1];
  const li3 = document.createElement('li');
  li3.textContent = list.li[2];
  const li4 = document.createElement('li');
  li4.textContent = list.li[3];

  ul.append(li1, li2, li3, li4);
  listDiv.append(p);
  listDiv.append(ul);

  return listDiv;
}
setTimeout(() => {
  const fragment = document.createDocumentFragment();

  ListData.forEach((item) => {
    const list = createList(item);

    fragment.append(list);
  });

  const ListCont = document.querySelector('.list');
  if (ListCont) ListCont.append(fragment);
});
