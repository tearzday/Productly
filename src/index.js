import { Header } from './js/Header';
import { Promo } from './js/Promo';
import { Tools } from './js/Tools';
import { Strategy } from './js/Strategy';
import { StrategyModal } from './js/StrategyModal';
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
  renderToolsToDom();
  renderPromoToDom();

  if (TOOLS) {
    //renderToolsToDom();
  }
  //Render Strategies
  if (STRATEGY) {
    renderStrategiesToDom();
  }

  //Tags
  addTagsClickHandler();

  // Generate Base Modal from Modal Class
  addToolsClickHandler();
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
  MAIN.prepend(promo.generatePromo());
};

/* Tools */

const renderToolsToDom = () => {
  const tools = new Tools(TOOLS);
  MAIN.prepend(tools.generateToolsComponent());
};

/* Tags */

const addTagsClickHandler = () => {
  document
    .querySelector('.strategies__tags')
    .addEventListener('click', event => {
      if (event.target.classList.contains('tag')) {
        let clickedTag = event.target;
        removeSelectedTags();
        selectClickedTag(clickedTag);
        if (clickedTag.innerText === 'All') {
          showAllStrategies();
        } else {
          filterStrategyBySelectedTag(clickedTag.innerText);
        }
      }
    });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = clickedTag => {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll('.strategy-container .strategy');
  strategies.forEach(strategy => {
    strategy.classList.remove('strategy_hidden');
  });
};

const filterStrategyBySelectedTag = selectedTag => {
  let strategies = document.querySelectorAll('.strategy-container .strategy');
  strategies.forEach(strategy => {
    strategy.classList.add('strategy_hidden');
    strategy.querySelectorAll('.tag').forEach(tag => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove('strategy_hidden');
      }
    });
  });
};

/* Strategy */

const renderStrategiesToDom = () => {
  let strategiesContainer = document.querySelector('.strategy-container');
  generateStrategies(STRATEGY).forEach(strategy => {
    strategiesContainer.append(strategy.generateStrategy());
  });

  addStrategyClickHandler();
};

const generateStrategies = data => {
  let strategies = [];
  data.forEach(strategy => {
    strategies.push(new Strategy(strategy));
  });
  return strategies;
};

/* Modal from Tools */

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
};

const addStrategyClickHandler = () => {
  document
    .querySelector('.strategy-container')
    .addEventListener('click', event => {
      if (event.target.closest('.strategy')) {
        let clickedStrategyId = event.target
          .closest('.strategy')
          .getAttribute('data-id');
        let clickedStrategyDate = getClickDate(clickedStrategyId);

        renderStrategyModalWindow(clickedStrategyDate);
      }
    });
};

const getClickDate = id => {
  return STRATEGY.find(strategy => strategy.id == id);
};

const renderStrategyModalWindow = strategy => {
  let modal = new StrategyModal('strategy-modal', strategy);
  modal.renderModal();
};
