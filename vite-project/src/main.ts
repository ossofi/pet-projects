import './style.css'

// createElementWithDocumentCreateElementAndAppend approach

const staysafepg = document.getElementsByClassName('staysafepg');

Array.from(staysafepg).forEach((myDiv) => {
   
    const mobileimg = document.createElement('img');
    mobileimg.src = '../assets/Group22.svg';
    mobileimg.id = 'mobileimg'
  
    const text2 = document.createElement('div');
    text2.className = 'text2';

    const maintext2 = document.createElement('div');
    maintext2.id = 'maintext2';
    maintext2.textContent = 'Stay safe with Go';
  
    const corona = document.createElement('span');
    corona.id = 'corona';
    corona.textContent = 'Corona.';
    
    const descr2 = document.createElement('div');
    descr2.id = 'descr2';
    descr2.textContent = 
    '24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.';

    const featbut = document.createElement('button');
    featbut.id = 'featbut';
    featbut.textContent = 'FEATURES'
    text2.appendChild(maintext2);
    text2.appendChild(descr2);
    text2.appendChild(featbut);
    maintext2.appendChild(corona);  

    myDiv.appendChild(mobileimg);
    myDiv.appendChild(text2);
  });

// createElementWithTemplateHTMLElementTag approach

  const DATABASE = {
    maintext3: 'Talk to ',
    experts: 'experts.',
    descr3: 'Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.',
    featbut2: 'FEATURES',
    vidpreview: '../assets/Group26.svg', 
  };
  
  function createTestimonial(testimonial: { maintext3: string; experts: string; descr3: string; featbut2: string;  vidpreview: string; }) {
    const testimonialTemplate = document.getElementById("talktoexp");
    if (testimonialTemplate !== null && testimonialTemplate instanceof HTMLTemplateElement) {
      const clone = testimonialTemplate.content.cloneNode(true) as DocumentFragment;

      const info3 = clone.querySelector(".info3");
      if (info3) {
        const text3 = clone.querySelector(".text3");
          if (text3) {
            const row3 = clone.querySelector(".row3");
            if(row3){
              const maintext3 = text3.querySelector("#maintext3");
              if (maintext3) {
                maintext3.textContent = testimonial.maintext3; }
              const experts = text3.querySelector("#exp");
              if (experts) {
                experts.textContent = testimonial.experts; }
              }
            const descr3 = text3.querySelector("#descr3");
            if (descr3) descr3.textContent = testimonial.descr3;
  
            const featbut2 = text3.querySelector('#featbut2');
            if (featbut2) featbut2.textContent = testimonial.featbut2;
          }
        const vidpreview = clone.querySelector("#vidpreview");
        if (vidpreview) {
          vidpreview.setAttribute("src", testimonial.vidpreview);
        } 
      }
      return clone;
    } else {
      return null;
    }
  }
  
  setTimeout(() => {
    const testimonial = createTestimonial(DATABASE);
    if (testimonial !== null) {
      const testimonials = document.querySelector('.contentcontainer3');
      if (testimonials !== null) {
        testimonials.appendChild(testimonial);
      } 
    } 
  }, 0);

  function createCards(testimonial2:{h1: string, p: string}) {
    const testimonialTemplate = document.getElementById("stats-template");
    if (testimonialTemplate !== null && testimonialTemplate instanceof HTMLTemplateElement) {
      const clone2 = testimonialTemplate.content.cloneNode(true) as DocumentFragment;
      
      const h1 = clone2.querySelector("h1");
      if (h1){
        h1.textContent = testimonial2.h1; 
        h1.id = 'styleh1'; }
      const p = clone2.querySelector("p");
      if (p){ 
        p.textContent = testimonial2.p;
        p.id = 'stylep'; }
      return clone2;
    }
  }
  setTimeout(() => {
    const fragment = document.createDocumentFragment();
  
    statsData.forEach((item) => {
      const testimonial2 = createCards(item);
      if (testimonial2 !== null && testimonial2 !== undefined) {
        fragment.append(testimonial2);
      }
    });
  
    const testimonials2 = document.querySelector(".stats");
    if (testimonials2 !== null) {
      testimonials2.append(fragment);
    }
  }, 0);

  const statsData = [
    {
      h1: '2m',
      p: 'USERS',
    },
    {
      h1: '78',
      p: 'COUNTRIES',
    },
    {
      h1: '10,000+',
      p: 'MEDICAL EXPERTS',
    }
  ];

// createElementWithTemplateString approach

function createTestimonial2(testimonial3: { healthcare: any; maintext4: any; descr4: any;}) {
  const content4 = `
    <div class='title4'>
    <div id='healthcare'>${testimonial3.healthcare}</div>
    <div id='maintext4'>${testimonial3.maintext4}</div>
    </div>
    <div id='descr4'>${testimonial3.descr4}</div>
  `;
  return content4;
}

setTimeout(() => {
  const testimonials = document.querySelector(".healthcarepage");

  const elem = Data.map((item) => {
    const testimonial3 = createTestimonial2(item);
    if (testimonial3 !== null && testimonial3 !== undefined) {
      return testimonial3;
    }
  });
  
  console.log(elem, elem.join(""));
  if (testimonials !== null && testimonials !== undefined) {
  testimonials.innerHTML = elem.join("");}

 
}, 0);

const Data = [
  {
    healthcare: 'Healthcare',
    maintext4: 'at your Fingertips.',
    descr4: 'Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.' ,
  }
];


function createCards2(testimonial4: { img4:any; h4: any; p: any;}) {
  const content4 = `
  <div class='card2'>
    <img id='img4' src='${testimonial4.img4}'>
    <div id='h4style'>${testimonial4.h4}</div>
    <div id='descrinfo'>${testimonial4.p}</div>
    </div>
  `;
  return content4;
}

setTimeout(() => {
  const testimonials = document.querySelector(".cards");

  const elem = cardData.map((item) => {
    const testimonial4 = createCards2(item);
    if (testimonial4 !== null && testimonial4 !== undefined) {
      return testimonial4;
    }
  });
  
  console.log(elem, elem.join(""));
  if (testimonials !== null && testimonials !== undefined) {
  testimonials.innerHTML = elem.join("");}

 
}, 0);

const cardData = [
  {
    img4: '../assets/Vector.svg', 
   h4: 'Symptom Checker',
   p: 'Check if you are infected by <br> COVID-19 with our Symptom Checker',
  },
  {
    img4: '../assets/Vector1.svg', 
   h4: '24x7 Medical support',
   p: 'Consult with 10,000+ health workers about your concerns.',
  },
  {
    img4: '../assets/Vector2.svg', 
   h4: 'Conditions',
   p: 'Bringing premium healthcare features to your fingertips.',
  }
];

function createFooter(foot: {google: any; apple: any;}) {
  const footer = `
    <img id='google' src='${foot.google}'></div>
    <img id='apple' src='${foot.apple}'></div>
  `;
  return footer;
}

setTimeout(() => {
  const testimonials = document.querySelector(".footer");

  const elem = footerImg.map((item) => {
    const foot = createFooter(item);
    if (foot !== null && foot !== undefined) {
      return foot;
    }
  });
  
  console.log(elem, elem.join(""));
  if (testimonials !== null && testimonials !== undefined) {
  testimonials.innerHTML = elem.join("");}

 
}, 0);

const footerImg = [
  {
    google: '../assets/image2.svg',
    apple: '../assets/image1.svg',
  }
];