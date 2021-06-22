import React, { Component} from 'react'
import {
  Row,
 Col,
 
} from 'reactstrap';
import SideBar from './SideBar'  
export class Article extends Component {
   
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
           <h4 className="display-5">Technical Articles</h4>
           <br></br>
            <b>1. Image Recognition</b>
               <p>This article gives you an insight into the field of Image Processing and it's day to day applications in various fields. <br></br>To read more, click <a href="https://medium.com/ieee-manipal/image-recognition-2c8468a3a91">here</a>.</p>
               <br></br>
            <b>2. Quantum Computing</b>
                <p> This article gives an introduction to Quantum Computing and Qubits and how they work.<br></br> To read more, click <a href="https://docs.google.com/document/d/1TOw7mm1UNfuR9f_Cmxx4mP2LbG-32FHQZG16HIZ7KrY/edit">here</a>.</p>
                <br></br>
            <b>3. Up to the minute?</b>
                <p>"Up to the minute?" is an organization that was created to build an application to help the differently abled lead better lives, especially during Covid-19.<br></br> To read more, click <a href="https://medium.com/up-to-the-minute/up-to-the-minute-baf12954f4d8">here</a>.</p>
                <br></br>
            <b>4. AudioBooks: Experience the joy of Reading</b>
                <p> This article gives an insight into creation of AudioBooks using Python libraries<br></br> To read more, click <a href="https://medium.com/up-to-the-minute/audiobooks-experience-the-joy-of-reading-fc172dfc8752">here</a>.</p>

          </Col> 
         </Row>
       
        </div>
           
        )
    }

  }
  export default Article