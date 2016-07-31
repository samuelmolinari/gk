import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GkDispatcher from '../dispatcher/GkDispatcher';

class CatalogStore extends ReduceStore {
  loadNextPage() {
    setTimeout(function() {
      this.getDispatcher().dispatch({
        type: 'catalog/load-more',
        items: [
          {
            id: `${this._nextPage}1`,
            category: 'tshirt',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/293140_main'
          },
          {
            id: `${this._nextPage}2`,
            category: 'tshirt',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/291313_main'
          },
          {
            id: `${this._nextPage}3`,
            category: 'tshirt',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/292437_main'
          },
          {
            id: `${this._nextPage}4`,
            category: 'tshirt',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/294813_main'
          },
          {
            id: `${this._nextPage}5`,
            category: 'jeans',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/293655_main'
          },
          {
            id: `${this._nextPage}6`,
            category: 'jeans',
            image_url: 'http://riverisland.scene7.com/is/image/RiverIsland/293656_main'
          }
        ]
      });
    }.bind(this), 1000)
  }

  getInitialState() {
    this._nextPage = 0;
    this.loadNextPage();
    return Immutable.List();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'catalog/load-more':
        this._nextPage += 1;
        return state.concat(Immutable.fromJS(action.items));
      default:
        return state;
    }
  }
}

const instance = new CatalogStore(GkDispatcher);

export default instance;
