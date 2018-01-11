import React, { Component } from 'react';
import List from './List/List';
import './App.css';
import ItemDetail from './ItemDetail/ItemDetail'
import Data from './../Data/list.json';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

class App extends Component {
  constructor (){
    super();
    this.state = {
      items:[],
      selectedItem:{}
    }
  }

  componentWillMount(){
    // this.setState({
    //   items: Data.result,
    //   selectedItem: Data.result[0]
    // })
    axios.get('http://localhost:3000/profile').then(
      data => {
        console.log(data);
        this.setState({
          items: data.data.result,
          selectedItem: data.data.result[0]
        })
      }
    );

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

  handleSearch(event){
    console.log('searching');

    let temp;
    axios.get('http://localhost:3000/profile').then(
      data => {
        temp = data.data.result;
      }
    );
    //console.log(temp);
    //console.log(event.target.value);
    temp = temp.filter(item => {
      if(item.experience){
        return item.experience.indexOf(event.target.value) > -1;
      }
    });

    if(temp){
      this.setState({
        items: temp,
        selectedItem: temp[0]
      });
    }
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
              <input type="text" onChange={this.handleSearch.bind(this)} placeholder="search experience"/>
              <List items={this.state.items} onSelect={this.handleSelect.bind(this)}/>
            </Col>
            <Col sm={6} md={8}>
              <ItemDetail selectedItem={this.state.selectedItem}/>
            </Col>
          </Panel.Body>
          <Panel.Footer></Panel.Footer>
        </Panel>
      </div>
    );
  }
}

export default App;
