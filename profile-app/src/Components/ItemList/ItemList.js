import React, { Component } from 'react';

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
        <button onClick={this.showItemDetail.bind(this,this.props.item.id)}>View Detail</button>
      </div>
    );
  }
}

export default ItemList;
