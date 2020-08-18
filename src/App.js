import './App.css';
import React, { useState } from 'react';
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Article from "./Article"
import Certifi from "./Certifi"
import {Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';
import {HashRouter as Router, Route, } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap";
import { Button } from 'reactstrap';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Router>
      <Navbar class="light" light expand="md">
      <Nav> <LinkContainer to="/"><NavItem><Button color="light"><b>MY PORTFOLIO</b></Button>{' '}</NavItem></LinkContainer></Nav>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar></Nav>
        <Nav>
                <LinkContainer to="/">
                   <NavItem><Button color="light">ABOUT</Button>{' '}</NavItem>
                </LinkContainer>
        </Nav>
        
        <Nav> 
                <LinkContainer to="/skills">
                   <NavItem><Button color="light">SKILLS</Button>{'   '}</NavItem>
                   
                </LinkContainer>
        </Nav>  

        <Nav>    
                <LinkContainer to="/project">
                   <NavItem><Button color="light">PROJECTS</Button>{'   '}</NavItem>
                   
                </LinkContainer>
        </Nav>
        
        <Nav>       
                <LinkContainer to="/article">
                   <NavItem><Button color="light">TECH ARTICLES</Button>{'   '}</NavItem>
                   
                </LinkContainer>
        </Nav>
                
        <Nav>    
                <LinkContainer to="/certifi">
                   <NavItem><Button color="light">CERTIFICATES</Button>{'   '}</NavItem>
                   
                </LinkContainer>
        </Nav>
      </Collapse>
      </Navbar>
        
      
         
      <Route exact path="/" component={About}>
          </Route>
          <Route path="/skills" component={Skills}>
          </Route>
          <Route path="/project" component={Project}>
          </Route>
          <Route path="/article" component={Article}>
          </Route>
          <Route path="/certifi" component={Certifi}>
          </Route>

         
          
         
          
         

    </Router>
    </div>
  );

}

export default App
        
  