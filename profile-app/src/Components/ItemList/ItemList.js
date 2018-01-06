import React, { Component } from 'react';

class ItemList extends Component {

  render() {
    return (
      <div className="ItemList">
        {this.props.item.fullname}
      </div>
    );
  }
}

export default ItemList;
