import React, { Component } from 'react'
import Certificate from './Certificate';
import SideBar from './SideBar';
import {
  Row,
 Col,
} from 'reactstrap';
export class Certifi extends Component {
   
    render() {
       
        return (
        <div>
        <hr className="my-1" />
        <hr className="my-1" />
          <br></br><br></br>

          <Row>
          <Col>
           <SideBar/>
          </Col>
          <Col xs={8}>
            <h4 className="display-5">My Certificates</h4>
            <br></br>
            <Certificate/>
          </Col> 
         </Row>
        

        </div>
       
        )
    }
}

export default Certifi