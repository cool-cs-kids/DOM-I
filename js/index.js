const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//first, we need to update the Nav

const navBar = document.querySelectorAll('a');
// console.log(navBar);

navBar.forEach((a, index) => {
  // console.log(a);
  // consoe.log(siteContent.nav['nav-item-1']);
  a.textContent = siteContent['nav'][`nav-item-${index}`];
});

// next, we need to add in the h1 text to the CTA, and also add the text to the button

const ctaText = document.querySelector('.cta-text h1');
// console.log(ctaText);

ctaText.textContent = siteContent.cta.h1;

// next, we need to add text to the button!

const ctaButton = document.querySelector('.cta-text button');
// console.log(ctaButton);
ctaButton.textContent = siteContent.cta.button;

// next, we need to update the big picture next to the CTA
const ctaBigPicture = document.querySelector('#cta-img');
// console.log(ctaBigPicture);

ctaBigPicture.src = siteContent.cta['img-src'];

// next, we will target main-content, and target top-content (features and about)

const topContent = document.querySelector('.top-content');

// console.log(topContent);
const featuresContentH4 = topContent.querySelector('.text-content h4');
// console.log(featuresContent);
featuresContentH4.textContent = siteContent['main-content']['features-h4'];
const featuresContent = topContent.querySelector('.text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const aboutContentH4 = topContent.querySelectorAll('.text-content h4')[1];
// console.log(aboutContentH4);
aboutContentH4.textContent = siteContent['main-content']['about-h4'];
const aboutContent = topContent.querySelectorAll('.text-content p')[1];
// console.log(aboutContent);
aboutContent.textContent = siteContent['main-content']['about-content'];

const mainContentImg = document.querySelector('#middle-img');
// console.log(mainContentImg);

mainContentImg.src = siteContent['main-content']['middle-img-src'];

const 