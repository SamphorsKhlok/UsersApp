import React, { Component } from 'react';
import Data from './../../Data/list.json';
import ItemList from './../ItemList/ItemList';

class List extends Component {
  constructor (){
    super();
    this.state = {list:[]}
  }

  componentWillMount(){
    this.setState({
      list: Data.result
    })
  }

  render() {
    console.log(this.state.list);
    let itemList;


    if(this.state.list){
      itemList = this.state.list.map(item => {
        return <ItemList key={item.id} item={item}/>
      });
    }else {
      itemList = "Empty List";
    }

    return (
      <div className="List">
        list item here
        {itemList}
      </div>
    );
  }
}

export default List;
