export class About {
  constructor() {
    this.title = 'About Us';
    this.text =
      'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase)';
    this.employee = [
      {
        name: 'Kathy Rosenberg',
        position: 'Product Manager',
        mail: 'kathyr@gmail.com',
        avatar: 'https://i.ibb.co/zNTRJcG/avatar1.png'
      },
      {
        name: 'Alexandra Boyarskaya',
        position: 'Support Marketing Specialist',
        mail: 'alexandrab@gmail.com',
        avatar: 'https://i.ibb.co/3mW9BKs/avatar2.png'
      },
      {
        name: 'Melani Amini',
        position: 'Photographer',
        mail: 'melania@gmail.com',
        avatar: 'https://i.ibb.co/P974L6T/avatar3.png'
      }
    ];
  }

  generateAbout() {
    let template = '';
    const about = document.createElement('section');
    about.className = 'about';
    about.id = 'about';

    let employeeContainer = '';
    this.employee.forEach(item => {
      employeeContainer += `
        <div class="employee block-shadowed">
            <div class="employee__content">
                <h5>${item.name}</h5>
                <p class="employee__title">${item.position}</p>
                <a class="employee__contact" href="${item.mail}">${item.mail}</a>
            </div>
            <img
            class="employee__photo"
            src="${item.avatar}"
            alt="employee"
            />
        </div>`;
    });

    template += `
    <section class="about" id="about">
        <div class="container">
            <h2>${this.title}</h2>
            <p class="about__text">
                ${this.text}
            </p>
            <div class="layout-3-column employee-container">
                ${employeeContainer}
            </div>
        </div>
    </section>
  `;

    about.innerHTML = template;
    return about;
  }
}
