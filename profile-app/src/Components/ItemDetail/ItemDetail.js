import React, { Component } from 'react';

class ItemDetail extends Component {

  render() {
    return (
      <div className="ItemDetail">
        <strong>item detail</strong> <br/>
        {this.props.selectedItem.fullname} <br/>
        {this.props.selectedItem.linkedin_url}
      </div>
    );
  }
}

export default ItemDetail;
