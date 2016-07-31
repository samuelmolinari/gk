import React, {Component} from 'react';
import PreferenceStore from '../stores/PreferenceStore';

class Sizes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
      selected: PreferenceStore.get(props.category)
    };

    this._storeListener = null;
  }

  componentDidMount() {
    this._storeListener = PreferenceStore.addListener(() => this._onChange());
  }

  componentWillUnmount() {
    this._storeListener.remove();
  }

  _onChange() {
    this.setState({
      sizes: this.state.sizes,
      selected: PreferenceStore.get(this.props.category)
    });
  }

  getClassName(size) {
    let defaultClasses = 'btn btn-default Item-size-btn ';
    return defaultClasses + (this.isSelected(size) ? 'selected' : '');
  }

  isSelected(size) {
    return size === this.state.selected;
  }

  render() {
    return (
      <div className="btn-group Item-sizes">
        {
          this.state.sizes.map((size) => (
            <button key={size} className={this.getClassName(size)} onClick={() => this._click(size)}>{size}</button>
          ))
        }
      </div>
    );
  }

  _click(size) {
    var selected = null;
    if(!this.isSelected(size)) {
      selected = size;
    }

    this.setState({
      sizes: this.state.sizes,
      selected: selected
    });

    PreferenceStore.getDispatcher().dispatch({
      type: `preference/set-size`,
      category: this.props.category,
      size: selected
    });
  }
}

export default Sizes;
