import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import GkDispatcher from '../dispatcher/GkDispatcher';

class CatalogStore extends ReduceStore {
  loadNextPage() {
    setTimeout(function() {
      this.getDispatcher().dispatch({
        type: 'catalog/load-more',
        items: [
          {id: this._page + 1 + 0}
        ]
      });
    }.bind(this), 1000)
  }

  getInitialState() {
    this._page = 0;
    this.loadNextPage();
    return Immutable.List();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'catalog/load-more':
        this._page += 1;
        return state.concat(Immutable.fromJS(action.items));
      default:
        return state;
    }
  }
}

const instance = new CatalogStore(GkDispatcher);

export default instance;
