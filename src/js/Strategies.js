import { Strategy } from './Strategy';
import { StrategyModal } from './StrategyModal';

export class Strategies {
  constructor(strategies) {
    this.title = 'Marketing Strategies';
    this.text =
      'Join 40,000+ other marketers and get proven strategies on email marketing';
    this.strategies = strategies;
  }

  generateStrategiesComponent() {
    let template = '';
    const strategies = document.createElement('section');
    strategies.className = 'strategies';
    strategies.id = 'strategies';

    template += `
        <div class="container">
          <h2>Marketing Strategies</h2>
          <p class="strategies__description">
            Join 40,000+ other marketers and get proven strategies on email
            marketing
          </p>
          <div class="strategies__tags tags">
            <div class="tag tag_selected">All</div>
            <div class="tag tag_bordered">Art</div>
            <div class="tag tag_bordered">Culture</div>
            <div class="tag tag_bordered">Design</div>
          </div>
          <div class="layout-3-column strategy-container">${this.generateStrategiesTemplate()}</div>
        </div>`;

    strategies.innerHTML = template;
    return strategies;
  }

  generateStrategiesTemplate() {
    let strategiesHTML = '';
    this.generateStrategies().forEach(strategy => {
      strategiesHTML += strategy.generateStrategy();
    });
    return strategiesHTML;
  }

  generateStrategies() {
    let strategyItems = [];
    this.strategies.forEach(strategy => {
      strategyItems.push(new Strategy(strategy));
    });
    return strategyItems;
  }

  addStrategyClickHandler() {
    document
      .querySelector('.strategy-container')
      .addEventListener('click', event => {
        if (event.target.closest('.strategy')) {
          let clickedStrategyId = event.target
            .closest('.strategy')
            .getAttribute('data-id');
          let clickedStrategyDate = this.getClickDate(clickedStrategyId);

          this.renderStrategyModalWindow(clickedStrategyDate);
        }
      });
  }

  getClickDate(id) {
    return this.strategies.find(strategy => strategy.id == id);
  }

  renderStrategyModalWindow(strategy) {
    let modal = new StrategyModal('strategy-modal', strategy);
    modal.renderModal();
  }

  addTagsClickHandler = () => {
    document
      .querySelector('.strategies__tags')
      .addEventListener('click', event => {
        if (event.target.classList.contains('tag')) {
          let clickedTag = event.target;
          this.removeSelectedTags();
          this.selectClickedTag(clickedTag);
          if (clickedTag.innerText === 'All') {
            this.showAllStrategies();
          } else {
            this.filterStrategyBySelectedTag(clickedTag.innerText);
          }
        }
      });
  };

  removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
      tag.classList.remove('tag_selected');
      tag.classList.add('tag_bordered');
    });
  };

  selectClickedTag = clickedTag => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
  };

  showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-container .strategy');
    strategies.forEach(strategy => {
      strategy.classList.remove('strategy_hidden');
    });
  };

  filterStrategyBySelectedTag = selectedTag => {
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
}
