import React, { Component } from 'react';
import './List.css';
import ItemList from './../ItemList/ItemList';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class List extends Component {

  handleSelect(id){
    this.props.onSelect(id);
    console.log("list selected is "+ id);
  }

  render() {
    let items = this.props.items;
    let itemList = "Empty List";
    //console.log(items);


    if(items){
      itemList = items.map(item => {
        return <ListGroupItem href="#"><ItemList key={item.id} item={item} onSelect={this.handleSelect.bind(this)}/></ListGroupItem>
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
