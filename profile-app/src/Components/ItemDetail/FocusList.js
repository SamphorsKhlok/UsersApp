import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Badge from 'react-bootstrap/lib/Badge';
import Label from 'react-bootstrap/lib/Label';

class FocusList extends Component {
  showFocusList(){
    let focus = this.props.focus;
    let focus_score = this.props.focus_score;
    let focusList = null;

    if(focus){
      focusList = focus.map(item =>{
        return <h5>
          <Label style={styles.badgeItem} bsStyle="success">{item.toUpperCase()} <Badge>{focus_score[item].toFixed(2)*100}%</Badge></Label>
        </h5>;
      });

      return <FormGroup controlId="focus">
        <Col componentClass={ControlLabel} sm={2}>
          Focus
        </Col>
        <Col sm={10}>
          <div>
            {focusList}
          </div>
        </Col>
      </FormGroup>;
    }
  }
  render() {
    return (
      <div className="FocusList">
        {this.showFocusList()}
      </div>
    );
  }
}

const styles = {
  badgeItem :{
    padding:7,
  }
};

export default FocusList;
