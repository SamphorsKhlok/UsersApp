import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class ItemList extends Component {

  showItemDetail(id){
    //alert(id);
    this.props.onSelect(id);
    console.log("item list is "+ id);
  }

  render() {
    return (
      <div className="ItemList">
        {this.props.item.fullname}
        <Button bsStyle="info" onClick={this.showItemDetail.bind(this,this.props.item.id)}>View Detail</Button>
      </div>
    );
  }
}

export default ItemList;
