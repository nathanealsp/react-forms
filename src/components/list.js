import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="item">
        <label>Keyword</label>
        <input type="text" id="zip-code" name="zip-code" required="required" placeholder={this.props.skl} />
      </div>
    );
  }
}

export default List;