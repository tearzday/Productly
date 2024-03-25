import { Strategy } from './js/Strategy';
import { StrategyModal } from './js/StrategyModal';
import { Modal } from './js/Modal';

const DATA = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/pic1.jpg',
    tags: ['Art', 'Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/pic2.jpg',
    tags: ['Culture'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/pic3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 4,
    title:
      'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    urlToImage: './src/img/strategies/pic4.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/pic5.jpg',
    tags: ['Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 6,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/pic1.jpg',
    tags: ['Art', 'Design'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 7,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/pic2.jpg',
    tags: ['Culture'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  },
  {
    id: 8,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/pic3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content:
      'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '20.03.2024'
  }
];

window.onload = function () {
  //Render Strategies
  if (DATA) {
    renderStrategiesToDom();
  }
  //Tags
  addTagsClickHandler();

  // Generate Base Modal from Modal Class
  addToolsClickHandler();
};

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

const renderStrategiesToDom = () => {
  let strategiesContainer = getStrategiesContainer();
  generateStrategies(DATA).forEach(strategy => {
    strategiesContainer.append(strategy.generateStrategy());
  });

  addStrategyClickHandler();
};

const getStrategiesContainer = () => {
  const strategiesContainer = document.querySelector('.strategy-container');
  return strategiesContainer;
};

const generateStrategies = data => {
  let strategies = [];
  data.forEach(strategy => {
    strategies.push(new Strategy(strategy));
  });
  return strategies;
};

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
  return DATA.find(strategy => strategy.id == id);
};

const renderStrategyModalWindow = strategy => {
  let modal = new StrategyModal('strategy-modal', strategy);
  modal.renderModal();
};
