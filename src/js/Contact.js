export class Contact {
  constructor() {
    this.title = 'Contact Us';
    this.text =
      'Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase)';
    this.phone = '+375 (22) 345-00-99';
    this.mail = 'emailname@gmail.com';
  }

  generateContact() {
    let template = '';
    const contact = document.createElement('section');
    contact.className = 'contact';
    contact.id = 'contact';

    template += `
    <div class="container">
          <h2>${this.title}</h2>
          <div class="layout-2-column contact-container">
            <div class="contact__content">
              <p>
                ${this.text}
              </p>
              <div class="contact__link">
                <div class="icon-circle icon-circle__white">
                  <span class="ico icon_pnohe"></span>
                </div>
                <a href="tel:+375 (22) 345-00-99">+375 (22) 345-00-99</a>
              </div>
              <div class="contact__link">
                <div class="icon-circle icon-circle__white">
                  <span class="ico icon_email"></span>
                </div>
                <a href="mailto:emailname@gmail.com">emailname@gmail.com</a>
              </div>
            </div>
            <div class="contact__form">
              <form action="" method="post">
                <div class="layout-2-column contact__line">
                  <input type="text" placeholder="Your name" name="name" />
                  <input type="text" placeholder="Your email" name="email" />
                </div>
                <textarea
                  class="contact__line"
                  name="question"
                  placeholder="What do you want to ask?"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div class="contact__button">
                  <button type="submit" class="button button_colored">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    `;

    contact.innerHTML = template;
    return contact;
  }
}
