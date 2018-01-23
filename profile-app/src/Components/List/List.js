import React, { Component } from 'react';
import './List.css';
import ItemList from './../ItemList/ItemList';
import ListGroup from 'react-bootstrap/lib/ListGroup';

class List extends Component {

  handleSelect(id){
    this.props.onSelect(id);
    console.log("list selected is "+ id);
  }

  render() {
    let items = this.props.items;
    let itemList = "Empty List";

    if(items){
      itemList = items.map(item => {
        return <ItemList key={item.id} item={item} onSelect={this.handleSelect.bind(this)}/>
      });
    }

    return (
      <div className="List">

        <ListGroup>
          {itemList}
        </ListGroup>
      </div>
    );
  }
}

export default List;
