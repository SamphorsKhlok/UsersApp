import React, { Component } from 'react';
import List from './List/List';
import './App.css';
import ItemDetail from './ItemDetail/ItemDetail'
import Data from './../Data/list.json';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

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
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Users Profile</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Col sm={6} md={4}>
              <List items={this.state.items} onSelect={this.handleSelect.bind(this)}/>
            </Col>
            <Col sm={6} md={8}>
              <ItemDetail selectedItem={this.state.selectedItem}/>
            </Col>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default App;
