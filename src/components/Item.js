import React, {Component} from 'react';
import GkDispatcher from '../dispatcher/GkDispatcher';
import Weekdays from './Weekdays';
import Sizes from './Sizes';
import '../css/Item.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <img src={this.props.data.get('image_url')} />
        <Weekdays />
        <br/>
        <Sizes category={this.props.data.get('category')} />
      </div>
    );
  }

  _click() {
    GkDispatcher.dispatch({
      type: 'outfit/add-item',
      item: this.props.data.toObject()
    });
  }
}

export default Item;
