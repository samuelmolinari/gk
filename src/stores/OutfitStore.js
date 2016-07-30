import {MapStore} from 'flux/utils';
import Immutable from 'immutable';
import GkDispatcher from '../dispatcher/GkDispatcher';

class OutfitStore extends MapStore {
  getInitialState() {
    return Immutable.Map();
  }


  reduce(state, action) {
    switch (action.type) {
      case 'outfit/add-item':
        return state.set(action.item.id, action.item);
      default:
        return state;
    }
  }
}

const instance = new OutfitStore(GkDispatcher);

export default instance;
