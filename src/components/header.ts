import crossSvg from '../assets/images/cross.svg';
import cartSvg from '../assets/images/cart.svg';
import profileSvg from '../assets/images/profile.svg';

export const HeaderData = [
  {
    popup: 'Sign up and get 20% off to your first order.',
    link: ' Sign Up Now',
    cross: crossSvg,
    logo: 'SHOP.CO',
    img1: cartSvg,
    img2: profileSvg,
  },
];

export function createHeader(headerCont: {
  popup: any;
  link: any;
  cross: any;
  logo: any;
  img1: any;
  img2: any;
}) {
  const header = `
    <div class='popup'>
      <div id='popupCont'>
      <div>
      ${headerCont.popup}
      <span id='signlink'>${headerCont.link}</span></div>
      <img id='cross' src='${headerCont.cross}'></div>
      </div>
      <div class='headerContents'>
      <div id='logo'>${headerCont.logo}</div>
      <div>
      <img id='cart' src='${headerCont.img1}'>
      <img id='profile' src='${headerCont.img2}'>
      </div></div>
    `;
  return header;
}
export const header = document.querySelector('header');
if (header) {
  const elem = HeaderData.map((item) => createHeader(item)).join('');
  header.innerHTML = JSON.stringify(elem);
}
