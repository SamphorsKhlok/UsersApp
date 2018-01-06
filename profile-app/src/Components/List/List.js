import React, { Component } from 'react';
import ItemList from './../ItemList/ItemList';

class List extends Component {

  handleSelect(id){
    this.props.onSelect(id);
    console.log("list selected is "+ id);
  }

  render() {
    let items = this.props.items;
    let itemList;
    //console.log(items);


    if(items){
      itemList = items.map(item => {
        return <ItemList key={item.id} item={item} onSelect={this.handleSelect.bind(this)}/>
      });
    }else {
      itemList = "Empty List";
    }

    return (
      <div className="List">
        list item here <br/>
        {itemList}
      </div>
    );
  }
}

export default List;
