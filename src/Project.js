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
                <h4 className="display-5">Personal Projects</h4>
                <ListGroup>
                  <ListGroupItem><b>1. Voice Prescription Builder:</b> A tool that helps doctors prepare prescriptions by taking in voice inputs.<br></br></ListGroupItem>
                  <ListGroupItem><b>2. Face Verification Model:</b> A face verification tool that identifies people in live feed. This can be used as an API for login authentication in websites/mobile apps. <br></br></ListGroupItem>
                  <ListGroupItem><b>3. Disease Detection on Tomato Leaves:</b> A CNN model which helps predict disease on tomato leaves on uploading input images.<br></br></ListGroupItem>
                  <ListGroupItem><b>4. AI based Movie Recommendation System:</b> A recommendation System that predicts interesting movies based on the genre/movie chosen using a large existing dataset.<br></br></ListGroupItem>
                  <ListGroupItem><b>5. Hand Finger Counting Model:</b> A model which accurately predicts the finger count on live feed. This can be used for password verifications at ATMs, door locks etc.<br></br></ListGroupItem>
                  <ListGroupItem><b>6. Image to Sketch Convertor using Python:</b> A model which applies various image processing techniques to get sketches of uploaded images.<br></br></ListGroupItem>
                  <ListGroupItem><b>7. Pdf/text file Reader using Python:</b> This tool helps visually impaired people enjoy the pleasures of reading by listening to the book.<br></br></ListGroupItem>
                  <ListGroupItem><b>8. Text to Speech Conversion Model:</b> A tool that helps speech impaired people communicate effectively by using a real time text to speech convertor.<br></br></ListGroupItem>
                  <ListGroupItem><b>9. Speech to text Conversion Model:</b> This tool helps hearing impaired people read and converse with others.<br></br></ListGroupItem>
                  <ListGroupItem><b>10. Audio Segmentation Model in Python:</b> A model which helps segment audio files based on silence.<br></br></ListGroupItem>
                  <ListGroupItem><b>11. Personalized Reminder Model:</b> A tool which gives out voice reminders at the set time.<br></br></ListGroupItem>

                  <hr></hr>
                </ListGroup>
              </Col> 
              </Row>
           
          </div>
       
        )
    }
}

export default Project