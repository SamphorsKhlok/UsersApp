import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class CurrentPosition extends Component {

  render() {
    return (
      <div className="CurrentPosition">
        <FormGroup controlId="position_title">
          <Col componentClass={ControlLabel} sm={2}>
            Current Position
          </Col>
          <Col sm={10}>
            <FormControl type="text" value={this.props.position.position_title }/>
          </Col>
        </FormGroup>
        <FormGroup controlId="company_name">
          <Col componentClass={ControlLabel} sm={2}>
            Current Company
          </Col>
          <Col sm={10}>
            <FormControl type="text" value={this.props.position.position_company_name}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="months">
          <Col componentClass={ControlLabel} sm={2}>
            Duration
          </Col>
          <Col sm={10}>
            <FormControl type="text" value={this.props.position.months}/>
          </Col>
        </FormGroup>
      </div>
    );
  }
}

export default CurrentPosition;
