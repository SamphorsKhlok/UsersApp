import React, { Component } from 'react';
import List from './List/List';
import './App.css';
import ItemDetail from './ItemDetail/ItemDetail'
import Data from './../Data/list.json';

class App extends Component {
  constructor (){
    super();
    this.state = {
      items:[],
      selectedItem:{}
    }
  }

  componentWillMount(){
    this.setState({
      items: Data.result,
      selectedItem: Data.result[0]
    })
  }

  handleSelect(id){
    console.log("App id is"+ id);
    let index = this.state.items.findIndex(item => item.id === id);
    this.setState({
      //items: Data.result,
      selectedItem: this.state.items[index]
    });
    console.log("App index "+ index);
  }

  render() {
    return (
      <div className="App">
        <strong>App Component</strong><br/>
        <List items={this.state.items} onSelect={this.handleSelect.bind(this)}/>
        <ItemDetail selectedItem={this.state.selectedItem}/>
      </div>
    );
  }
}

export default App;
