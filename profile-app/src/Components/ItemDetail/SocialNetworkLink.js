import React, { Component } from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

class SocialNetworkLink extends Component {

  render() {
    let urlComponentList = null;
    let urlList = [];

    if(this.props.profile.linkedin_url){
      urlList.push(["Linkedin", this.props.profile.linkedin_url]);
    }

    if(this.props.profile.facebook_url){
      urlList.push(["Facebook", this.props.profile.facebook_url]);
    }

    if(this.props.profile.twitter_url){
      urlList.push(["Twitter", this.props.profile.twitter_url]);
    }

    if(this.props.profile.angellist_url){
      urlList.push(["Angellist", this.props.profile.angellist_url]);
    }

    if(this.props.profile.stackoverflow_url){
      urlList.push(["Stackoverflow", this.props.profile.stackoverflow_url]);
    }

    if(this.props.profile.github_url){
      urlList.push(["Github", this.props.profile.github_url]);
    }

    if(this.props.profile.crunchbase_url){
      urlList.push(["Crunchbase", this.props.profile.crunchbase_url]);
    }

    if(this.props.profile.google_url){
      urlList.push(["Google", this.props.profile.google_url]);
    }

    urlComponentList = urlList.map(item =>{
      return <FormGroup controlId={item[0]}>
          <Col componentClass={ControlLabel} sm={2}>
            {item[0]}
          </Col>
          <Col sm={10}>
            <InputGroup>
              <FormControl type="text" value={item[1]}/>
              <InputGroup.Button>
                <Button href={item[1]}>View</Button>
              </InputGroup.Button>
            </InputGroup>
          </Col>
        </FormGroup>;
    });

    return (
      <div className="SocialNetworkLink">
        {urlComponentList}
      </div>
    );
  }
}

export default SocialNetworkLink;
