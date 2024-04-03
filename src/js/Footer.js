export class Footer {
  constructor() {
    this.logo = 'https://svgshare.com/i/14qW.svg';
    this.navigation = [
      {
        title: 'Quick Links',
        links: [
          {
            name: 'About Us',
            href: ''
          },
          {
            name: 'Blog',
            href: ''
          },
          {
            name: 'Contact',
            href: ''
          },
          {
            name: 'FAQ',
            href: ''
          }
        ]
      },
      {
        title: 'Legal Stuff',
        links: [
          {
            name: 'Disclaimer',
            href: ''
          },
          {
            name: 'Financing',
            href: ''
          },
          {
            name: 'Privacy Policy',
            href: ''
          },
          {
            name: 'Terms of Service',
            href: ''
          }
        ]
      },
      {
        title: 'Quick Links',
        links: [
          {
            name: 'About Us',
            href: ''
          },
          {
            name: 'Blog',
            href: ''
          },
          {
            name: 'Contact',
            href: ''
          },
          {
            name: 'FAQ',
            href: ''
          }
        ]
      }
    ];
  }

  generateFooter() {
    let template = '';
    const footer = document.createElement('footer');
    footer.className = 'footer';

    let navigationContent = '';
    this.navigation.forEach(item => {
      let linksContent = '';
      item.links.forEach(link => {
        linksContent += `<li><a href="${link.href}">${link.name}</a></li>`;
      });

      navigationContent += `
        <div class="footer-navigation__column">
            <h4 class="footer-navigation__title">${item.title}</h4>
                <ul class="footer-navigation__links">
                    ${linksContent}
                </ul>
        </div>`;
    });

    template += `
    <div class="container">
        <a href="#" class="logo">
            <img src="${this.logo}" alt="Logo" />
        </a>
        <div class="footer-navigation layout-3-column">
            ${navigationContent}
        </div>
    </div>`;

    footer.innerHTML = template;
    return footer;
  }
}
