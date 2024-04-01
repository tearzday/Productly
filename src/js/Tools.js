import { Tool } from './Tool';

export class Tools {
  constructor(tools) {
    this.title = 'We design tools to unveil your superpowers';
    this.tools = tools;
  }

  generateToolsComponent() {
    let template = '';
    const tools = document.createElement('section');
    tools.className = 'tools';

    template += `
    <div class="container">
        <h2 class="tools__title">
            ${this.title}
        </h2>
        <div class="layout-4-column tool-container">${this.generateToolsTemplate()}</div>
        <div class="tools__button">
            <button class="button button_colored">Sign Up now</button>
        </div>
    </div>
    `;
    tools.innerHTML = template;
    return tools;
  }

  generateToolsTemplate() {
    let toolsHTML = '';
    this.generateTools().forEach(tool => {
      toolsHTML += tool.generateTool();
    });
    return toolsHTML;
  }

  generateTools() {
    let toolsItems = [];
    this.tools.forEach(tool => {
      toolsItems.push(new Tool(tool));
    });
    return toolsItems;
  }
}
