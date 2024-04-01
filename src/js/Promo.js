export class Promo {
  constructor() {
    this.title = 'The Design Thinking superpowers';
    this.text =
      'Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.';
    this.img = 'https://svgshare.com/i/14w4.svg';
  }

  generatePromo() {
    let template = '';
    const promo = document.createElement('section');
    promo.className = 'promo';

    template += `
    <div class="container">
        <div class="promo__content">
        <h1 class="promo__title">${this.title}</h1>
        <p class="promo__text">
            ${this.text}
        </p>
        <div class="promo__buttons">
            <button class="button button_colored">Get started</button>
            <a href="#" class="link-button">
            <span class="ico ico_play"></span>
            <span class="link-button__text">Watch the Video</span>
            </a>
        </div>
        </div>
        <img
        class="promo__images"
        src="${this.img}"
        alt="The Design Thinking superpowers"
        />
    </div>
    `;

    promo.innerHTML = template;
    return promo;
  }
}
