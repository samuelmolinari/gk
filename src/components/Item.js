import React, {Component} from 'react';
import GkDispatcher from '../dispatcher/GkDispatcher';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <button onClick={() => this._click()}>Add item</button>
      </div>
    );
  }

  _click() {
    GkDispatcher.dispatch({
      type: 'outfit/add-item',
      item: {
        id: 1
      }
    });
  }
}

export default Item;
