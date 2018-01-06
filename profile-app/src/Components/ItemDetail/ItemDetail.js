import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Badge from 'react-bootstrap/lib/Badge';
import CurrentPosition from './CurrentPosition'
import SocialNetworkLink from './SocialNetworkLink'



class ItemDetail extends Component {

  showCurrentPosition(){
    if(this.props.selectedItem.current_position){
      return <CurrentPosition position={this.props.selectedItem.current_position}/>;
    }else{
      return <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Current Position
        </Col>
        <Col sm={10}>
          <FormControl type="text" value="Not Available"/>
        </Col>
      </FormGroup>;
    }
  }

  render() {
    // let badgesList = this.props.selectedItem.focus.map(item=> {
    //   return (<p> {item} <Badge> {item}</Badge></p>);
    // });


    return (
      <div className="ItemDetail">
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {this.props.selectedItem.fullname}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form horizontal>
              <FormGroup controlId="Email">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" value={this.props.selectedItem.email} />
                </Col>
              </FormGroup>

              <FormGroup controlId="career">
                <Col componentClass={ControlLabel} sm={2}>
                  Career
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.career_path}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="location">
                <Col componentClass={ControlLabel} sm={2}>
                  Location
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.location}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="nationality">
                <Col componentClass={ControlLabel} sm={2}>
                  Nationality
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.nation}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="age">
                <Col componentClass={ControlLabel} sm={2}>
                  Age
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.age}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="experience">
                <Col componentClass={ControlLabel} sm={2}>
                  Experience
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.experience}/>
                </Col>
              </FormGroup>

              {/*conditional render if no position available*/}
              {this.showCurrentPosition()}

               {/*handle multiple social network links*/}
              <SocialNetworkLink profile={this.props.selectedItem}/>

              <FormGroup controlId="focus">
                <Col componentClass={ControlLabel} sm={2}>
                  Focus
                </Col>
                <Col sm={10}>
                  {/*{badgesList}*/}
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={2}>
                  <Button type="submit">Cancel</Button>
                </Col>
                <Col sm={2}>
                  <Button type="submit" bsStyle="danger">Delete</Button>
                </Col>
                <Col sm={2}>
                  <Button type="submit" bsStyle="success">Disable</Button>
                </Col>
                <Col  sm={2}>
                  <Button type="submit" bsStyle="primary">Save</Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default ItemDetail;
