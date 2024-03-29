export class Tool {
  constructor({ iconClass, iconColor, title, text, ...rest }) {
    this.iconClass = iconClass;
    this.iconColor = iconColor;
    this.title = title;
    this.text = text;
  }

  generateTool() {
    let template = '';
    let tool = document.createElement('div');
    tool.className = 'tool';

    if (this.iconClass || this.iconColor) {
      template += `<div class="tool__icon">`;

      template += `<div class="icon-square ${this.iconColor}">`;
      template += `<span class="ico ${this.iconClass}"></span>`;

      template += `</div>`;
      template += `</div>`;
    }

    this.title && (template += `<h4 class="tool__title">${this.title}</h4>`);
    this.text && (template += `<p class="tool__text">${this.text}</p>`);

    tool.innerHTML = template;
    return tool;
  }
}
