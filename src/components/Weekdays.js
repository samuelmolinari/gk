import React, {Component} from 'react';

class Weekdays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      selected: []
    };
  }

  getClassName(weekday) {
    return "btn btn-default Item-weekday-btn " + (this.isSelected(weekday) ? 'selected' : '');
  }

  isSelected(weekday) {
    return this.state.selected.indexOf(weekday) >= 0;
  }

  render() {
    return (
      <div className="btn-group Item-weekdays">
        {
          this.state.weekdays.map((weekday) => (
            <button key={weekday} className={this.getClassName(weekday)} onClick={() => this._click(weekday)}>{weekday}</button>
          ))
        }
      </div>
    );
  }

  _click(weekday) {
    var selected = this.state.selected;
    if (this.isSelected(weekday)) {
      selected.splice(selected.indexOf(weekday), 1);
    } else {
      selected.push(weekday);
    }

    this.setState({
      weekdays: this.state.weekdays,
      selected: selected
    });
  }
}

export default Weekdays;
