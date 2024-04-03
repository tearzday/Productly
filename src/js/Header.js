export class Header {
  constructor() {
    this.logo = 'https://svgshare.com/i/14qW.svg';
    this.menuItem = [
      {
        name: 'Home',
        link: 'index.html'
      },
      {
        name: 'Strategies',
        link: '#strategies'
      },
      {
        name: 'About',
        link: '#about'
      },
      {
        name: 'Contacts',
        link: '#contact'
      }
    ];
  }

  generateHeader() {
    let template = '';
    const header = document.createElement('header');
    header.className = 'header';

    let navigation = '';
    this.menuItem.forEach(item => {
      navigation += ` <li class="navigation__link"><a class="link" href="${item.link}">${item.name}</a></li>`;
    });

    template += `
    <div class="container">
        <div class="header__logo-line">
            <div class="hamburger">
                <span class="hamburger__line"></span>
            </div>
            <a href="#" class="logo">
                <img class="logo-img" alt="Logo company" src="${this.logo}">
            </a>
        </div>
        <nav class="header__navigation header__navigation_hidden">
            <ul class="navigation">
                ${navigation}
            </ul>
        </nav>
        <div class="header__buttons">
            <button class="button button_bordered">Sign In</button>
            <button class="button button_colored">Sign Up</button>
        </div>
    </div>`;

    header.innerHTML = template;
    return header;
  }

  queryMenu() {
    const hamburgerMenu = document.querySelector('.hamburger');
    const headerNav = document.querySelector('.header__navigation');
    const headerLink = document.querySelectorAll('.link');

    this.navigationLink(headerLink, headerNav, hamburgerMenu);

    this.toggleMenu(hamburgerMenu, headerNav, hamburgerMenu);
  }

  toggleMenu(clickItem, toggleItem, hamburgerIcon) {
    clickItem.addEventListener('click', () => {
      toggleItem.classList.toggle('header__navigation_hidden');
      hamburgerIcon.classList.toggle('hamburger_open');
    });
  }

  navigationLink(headerLink, headerNav, hamburgerMenu) {
    headerLink.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const scrollItemId = link.getAttribute('href');
        if (scrollItemId[0] === '#') {
          document.querySelector(scrollItemId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
      this.toggleMenu(link, headerNav, hamburgerMenu);
    });
  }
}
