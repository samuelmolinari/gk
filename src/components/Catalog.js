import React, {Component} from 'react';
import CatalogStore from '../stores/CatalogStore';
import Item from './Item';
import '../css/Catalog.css';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {items: CatalogStore.getState()};
    this._storeListener = null;
  }

  componentDidMount() {
    this._storeListener = CatalogStore.addListener(() => this._onChange());
  }

  componentWillUnmount() {
    this._storeListener.remove();
  }

  _onChange() {
    this.setState({items: CatalogStore.getState()});
  }

  _loadNextPage() {
    CatalogStore.loadNextPage();
  }

  render() {
    return (
      <div className="Catalog">
        <ul className="Catalog-ul">
          {
            this.state.items.map((item) => (
              <li className="Catalog-li" key={item.get('id')}>
                <Item data={item} />
              </li>
            ))
          }
        </ul>
        <div className="Catalog-load-more-container">
          <button className="Catalog-load-more" onClick={() => this._loadNextPage()}>Load more</button>
        </div>
      </div>
    )
  }
}

export default Catalog;
