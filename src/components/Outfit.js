import React, { Component } from 'react';
import OutfitStore from '../stores/OutfitStore';
import Item from './Item';

import '../css/Outfit.css';

class Outfit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this._storeListener = null;
  }

  componentDidMount() {
    this._storeListener = OutfitStore.addListener((state) => this._onChange(state));
  }

  componentWillUnmount() {
    this._storeListener.remove();
  }

  render() {
    return (
      <div className="Outfit">
        <Item />
      </div>
    );
  }

  _onChange(state) {
    this.setState({items: OutfitStore.getItems()});
  }
}

export default Outfit;
