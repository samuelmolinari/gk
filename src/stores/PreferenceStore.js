import {MapStore} from 'flux/utils';
import Immutable from 'immutable';
import GkDispatcher from '../dispatcher/GkDispatcher';

class PreferenceStore extends MapStore {
  getInitialState() {
    return Immutable.Map();
  }


  reduce(state, action) {
    switch (action.type) {
      case 'preference/set-size':
        return state.set(action.category, action.size);
      default:
        return state;
    }
  }
}

const instance = new PreferenceStore(GkDispatcher);

export default instance;
