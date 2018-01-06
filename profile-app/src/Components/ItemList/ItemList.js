import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import Label from 'react-bootstrap/lib/Label';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import './ItemList.css';
import NoImage from './../../Resources/noimage.png';

class ItemList extends Component {

  showItemDetail(id){
    //alert(id);
    this.props.onSelect(id);
    console.log("item list is "+ id);
  }

  render() {
    return (
      <ListGroupItem className="ItemList" header={this.props.item.fullname} onClick={this.showItemDetail.bind(this,this.props.item.id)} href="javascript:;">
        <Col sm={2} md={2}>
          <Image src={this.props.item.image_url?this.props.item.image_url: NoImage} alt="NO IMAGE" circle responsive/>
        </Col>
        <div>
          <h4><Label bsStyle="primary">{this.props.item.career_path}</Label></h4>
        </div>
        <div align="left">
          <h6><strong>{this.props.item.location?this.props.item.location: 'N/A'}</strong></h6>
        </div>
      </ListGroupItem>
    );
  }
}

export default ItemList;
