import React from 'react';
import Joke from './Joke';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import SideBar from './SideBar'  
import './App.css';

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [
        
        {
          setup: "Languages",
          punchline: "C, C++(STL), Python"
        },
        {
          setup: "FrontEnd",
          punchline: "HTMl, CSS, JS, React"
        },
        {
          setup: "Backend",
          punchline: "Python + Flask"
        },
        {
          setup: "Machine Learning",
          punchline: "Image Processing using OpenCV"
        },
        {
          setup: "Deep Learning",
          punchline: "Basics of Neural Networks & CNN's"
        },        
        
      ]
    }
  }

  render() {
    let jokeCards = this.state.jokes.map(humor => {
      return (
        <Col className="p-3" sm="4">
          <Joke humor={humor} />
        </Col>
      )
    })
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
            <h4 className="display-5">My Skills</h4>
          <Container fluid>
          <Row>
            {jokeCards}
          </Row>
          </Container>
          </Col> 
        </Row>
      
      </div>  
      
    )
  }
}

           