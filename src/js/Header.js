export class Header {
  constructor() {
    this.logo = 'logo-productly.svg';
    this.menuItem = ['Home', 'Services', 'About', 'Product'];
    this.isOpen = false;
  }

  generateHeader() {
    let template = '';
    const header = document.createElement('header');
    header.className = 'header';

    let navigation = '';
    this.menuItem.forEach(item => {
      navigation += ` <li class="navigation__link">${item}</li>`;
    });

    template += `
    <div class="container">
        <div class="header__logo-line">
            <div class="hamburger">
                <span class="hamburger__line"></span>
            </div>
            <a href="#" class="logo">
                <img class="logo-img" alt="Logo company" src="https://svgshare.com/i/14qW.svg">
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

  toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburger');
    const headerNav = document.querySelector('.header__navigation');
    hamburgerMenu.addEventListener('click', () => {
      headerNav.classList.toggle('header__navigation_hidden');
      hamburgerMenu.classList.toggle('hamburger_open');
    });
  }
}
