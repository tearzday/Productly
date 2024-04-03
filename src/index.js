import { Header } from './js/Header';
import { Promo } from './js/Promo';
import { Tools } from './js/Tools';
import { Strategies } from './js/Strategies';
import { About } from './js/About';
import { Contact } from './js/Contact';
import { Footer } from './js/Footer';
import { Modal } from './js/Modal';

let STRATEGY = [];
let TOOLS = [];
const MAIN = document.querySelector('main');

// Получение data
fetch('data.json')
  .then(res => res.json())
  .then(body => {
    body.forEach(data => {
      data.name === 'Strategy' ? (STRATEGY = data.value) : '';
      data.name === 'Tools' ? (TOOLS = data.value) : '';
    });
  })
  .catch(err => console.error('Ошибка:', err));

window.onload = function () {
  renderHeaderToDom();

  renderPromoToDom();

  if (TOOLS) {
    renderToolsToDom();
  }
  if (STRATEGY) {
    renderStrategiesToDom();
  }
  renderAboutToDom();
  renderContactToDom();
  renderFooterToDom();
};

/* Header */
const renderHeaderToDom = () => {
  const header = new Header();
  document.body.prepend(header.generateHeader());

  header.queryMenu();
};

/* Promo */
const renderPromoToDom = () => {
  const promo = new Promo();
  MAIN.append(promo.generatePromo());
};

/* Tools */

const renderToolsToDom = () => {
  const tools = new Tools(TOOLS);
  MAIN.append(tools.generateToolsComponent());
};

/* Strategy */

const renderStrategiesToDom = () => {
  const strategies = new Strategies(STRATEGY);
  MAIN.append(strategies.generateStrategiesComponent());
  strategies.addStrategyClickHandler();
  strategies.addTagsClickHandler();
};

/* About */

const renderAboutToDom = () => {
  const about = new About();
  MAIN.append(about.generateAbout());
};

/* About */

const renderContactToDom = () => {
  const contact = new Contact();
  MAIN.append(contact.generateContact());
};

/* Footer */

const renderFooterToDom = () => {
  const footer = new Footer();
  MAIN.append(footer.generateFooter());
};

/* Modal from Tools 

const addToolsClickHandler = () => {
  document
    .querySelector('.tools__button .button')
    .addEventListener('click', () => {
      generateToolsModal();
    });
};

const generateToolsModal = () => {
  renderModalWindow('test');
};

const renderModalWindow = content => {
  let modal = new Modal('tools-modal');
  modal.buildModal(content);
};*/
