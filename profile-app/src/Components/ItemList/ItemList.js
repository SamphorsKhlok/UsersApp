import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import Label from 'react-bootstrap/lib/Label';
import './ItemList.css';

class ItemList extends Component {

  showItemDetail(id){
    //alert(id);
    this.props.onSelect(id);
    console.log("item list is "+ id);
  }

  render() {
    return (
      <div className="ItemList">
        <Col sm={2} md={3}>
          <Image src={this.props.item.image_url} alt="NO IMAGE" circle responsive/>
        </Col>
        <div>
          <h4><Label bsStyle="primary">{this.props.item.fullname}</Label></h4>
          <Button bsStyle="default" bsSize="small" onClick={this.showItemDetail.bind(this,this.props.item.id)}>View Detail</Button>
        </div>
      </div>
    );
  }
}

export default ItemList;
