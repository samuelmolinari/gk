import React, { Component } from 'react';
import OutfitStore from '../stores/OutfitStore';
import Catalog from './Catalog';

import '../css/Outfit.css';

class Outfit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: OutfitStore.getState().toList()
    };

    this._storeListener = null;
  }

  componentDidMount() {
    this._storeListener = OutfitStore.addListener(() => this._onChange());
  }

  componentWillUnmount() {
    this._storeListener.remove();
  }

  render() {
    return (
      <div className="Outfit container">
        <header>
          <h1 className="text-center">Your weekly<br/>Spring/Summer outfit</h1>
        </header>
        <Catalog />
        <ul>
          {
            this.state.items.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))
          }
        </ul>
      </div>
    );
  }

  _onChange() {
    this.setState({items: OutfitStore.getState().toList()});
  }
}

export default Outfit;
