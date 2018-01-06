import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import CurrentPosition from './CurrentPosition'
import SocialNetworkLink from './SocialNetworkLink'
import FocusList from './FocusList'



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

    return (
      <div className="ItemDetail">
        <Panel id="panel">
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
                  <FormControl type="text" value={this.props.selectedItem.nation?this.props.selectedItem.nation:''}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="age">
                <Col componentClass={ControlLabel} sm={2}>
                  Age
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.age?this.props.selectedItem.age:''}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="experience">
                <Col componentClass={ControlLabel} sm={2}>
                  Experience
                </Col>
                <Col sm={10}>
                  <FormControl type="text" value={this.props.selectedItem.experience?this.props.selectedItem.experience:''}/>
                </Col>
              </FormGroup>

              {/*conditional render if no position available*/}
              {this.showCurrentPosition()}

              {/*handle multiple social network links*/}
              <SocialNetworkLink profile={this.props.selectedItem}/>

              {/*to display focus as badges properly*/}
              <FocusList focus={this.props.selectedItem.focus} focus_score={this.props.selectedItem.focus_score}/>

              <FormGroup controlId="highlight">
                <Col componentClass={ControlLabel} sm={2}>
                  Highlight
                </Col>
                <Col sm={10}>
                  <Well>{this.props.selectedItem.highlight?this.props.selectedItem.highlight:'N/A'}</Well>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={2}>
                  <Button block type="submit">Cancel</Button>
                </Col>
                <Col sm={2}>
                  <Button block type="submit" bsStyle="danger">Delete</Button>
                </Col>
                <Col sm={2}>
                  <Button block type="submit" bsStyle="warning">Disable</Button>
                </Col>
                <Col  sm={2}>
                  <Button block type="submit" bsStyle="primary">Save</Button>
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
