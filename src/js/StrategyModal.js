import { Modal } from './Modal';

export class StrategyModal extends Modal {
  constructor(classes, { id, title, urlToImage, tags, content, date }) {
    super(classes);
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.content = content;
    this.date = date;
  }

  generateContent() {
    let template = '';
    let strategy = document.createElement('div');
    strategy.className = 'strategy-modal__content';

    this.urlToImage &&
      (template += ` <img src="${this.urlToImage}" alt="strategy" />`);

    if (this.title || this.tags || this.content || this.date) {
      template += `<div class="strategy__content">`;

      this.date && (template += `<p class="strategy__date">${this.date}</p>`);

      this.title &&
        (template += `<h3 class="strategy__name">${this.title}</h3>`);

      this.content &&
        (template += `<p class="strategy__text">${this.content}</p>`);

      if (this.tags) {
        template += `<div class="strategy__tags tags">`;

        this.tags.map(tag => {
          template += `<div class="tag tag_colored">${tag}</div>`;
        });

        template += `</div>`;
      }

      template += `</div>`;
    }

    strategy.innerHTML = template;
    return strategy;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}
