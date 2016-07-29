import {Store} from 'flux/utils';
import Immutable from 'immutable';
import GkDispatcher from '../dispatcher/GkDispatcher';

class OutfitStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._items = Immutable.List();
  }

  getItems() {
    return this._items;
  }

  __onDispatch(action) {
    switch (action.type) {
      case 'outfit/add-item':
        this._items.push(action.item);
        break;
      default:
        break;
    }

    this.__emitChange();
  }
}

const instance = new OutfitStore(GkDispatcher);

export default instance;
