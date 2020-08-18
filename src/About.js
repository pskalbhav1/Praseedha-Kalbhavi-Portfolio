import React, { Component } from 'react'
import Example from './Example';

import SideBar from './SideBar';
import {
  Row,
 Col,
} from 'reactstrap';
export class About extends Component {
   
    render() {
       
        return (
        <div>
       
        <hr className="my-1" />
        <hr className="my-1" />
          <br></br>
          <br></br>
       
          <div>
         <Row>
          <Col>
           <SideBar/>
          </Col>
          <Col xs={8}>
            <Example/>
          </Col> 
         </Row>
         </div>
       

        </div>
       
        )
    }
}

export default About