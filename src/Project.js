import React, { Component } from 'react'
import {
  Row,
 Col,
  
} from 'reactstrap';
import SideBar from './SideBar'  
import { ListGroup, ListGroupItem } from 'reactstrap';

export class Project extends Component {
   
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
                <h4 className="display-5">My Projects</h4>
                <ListGroup>
                  <ListGroupItem><b>1. OpenCV Projects: </b><br></br>Projects include Face Verification Model, Finger Counting Model, People Counter Model, Conversion of Image to Sketch using OpenCV features and extracting text from Images.<br></br>For more details, check out the <a href="https://github.com/pskalbhav1/OpenCV/tree/master/Projects">Source Code</a>.</ListGroupItem>
                  <br></br>
        
                  <ListGroupItem><b>2. Movie Recommendation System:</b><br></br>This is Movie Recommendation Model which predicts movies based on Content Based Recommendation.<br></br>For more details, check out the <a href="https://github.com/pskalbhav1/Movie-Recommendation-System">Source Code</a>.</ListGroupItem>
                  <br></br>
        
                  <ListGroupItem><b>3. HTML Games:</b><br></br>I tried creating few games using simple HTML, CSS and JS.<br></br>If you are interested in trying them out, don't forget to check out the <a href="https://github.com/pskalbhav1/HTML-Games">Source Code</a>.</ListGroupItem>
                  <br></br>

                  <ListGroupItem><b>4. JS Projects:</b><br></br>Using the DOM (Document Object Module) in JS, I have tried to build a small dice game.<br></br>Check out the  <a href="https://github.com/pskalbhav1/JS-Projects">Source Code</a>.</ListGroupItem>
                  <hr></hr>
                </ListGroup>
              </Col> 
              </Row>
           
          </div>
       
        )
    }
}

export default Project