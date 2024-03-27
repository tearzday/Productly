export class Strategy {
  constructor({ id, title, urlToImage, tags, ...rest }) {
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
  }

  //strategy generator
  generateStrategy() {
    let template = '';
    let strategy = document.createElement('div');
    strategy.className = 'strategy block-shadowed';
    strategy.setAttribute('data-id', this.id);

    this.urlToImage &&
      (template += ` <img class="strategy__img" src="${this.urlToImage}" alt="strategy" />`);

    if (this.title || this.tags) {
      template += `<div class="strategy__content">`;

      this.title &&
        (template += `<h3 class="strategy__name">${this.title}</h3>`);

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
}
