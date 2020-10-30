const code = document.querySelector('code');
code.innerHTML = `
  /**
   *
   * if you have no idea what to do
   * just do it
   *
   */
  console.log('Hello World');`;

const typingTarget = document.querySelector('.typing a');
typingTarget.setAttribute(
  'data-type',
  `[
    "Hi, i'm Risal Walangadi.",
    "I Love Learning.",
    "I Love to Develop."
   ]`
);

const LinkItem = function (link, icon) {
  this.link = link;
  this.icon = icon;
};

const items = [
  // email
  new LinkItem('mailto: risal.walangadi@gmail.com', 'fa-envelope-o'),
  // github
  new LinkItem('https://github.com/izhal27', 'fa-github'),
  // linkedin
  new LinkItem('https://www.linkedin.com/in/risal-walangadi/', 'fa-linkedin'),
  // instagram
  new LinkItem('https://www.instagram.com/izhal.gooner', 'fa-instagram'),
  // twitter
  new LinkItem('https://twitter.com/gooner_izhal', 'fa-twitter-square'),
  // facebook
  new LinkItem('https://www.facebook.com/izhal.gooner', 'fa-facebook-square'),
];

const renderedItems = items
  .map(
    item => `
    <a href="${item.link}">
      <div class="faa-parent animated-hover icon">
      <i class="fa ${item.icon} faa-tada" aria-hidden="true"></i>
      </div>
    </a>
    `
  )
  .join('');

const itemsContainer = document.querySelector('#items-container');
itemsContainer.innerHTML = renderedItems;
