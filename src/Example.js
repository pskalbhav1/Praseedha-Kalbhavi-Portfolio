import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {AiFillEdit } from "react-icons/ai";
import './Header.js'

const Example = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>Hi! I'm Praseedha</ListGroupItem><br></br>
      <AiFillEdit size={20} /> 
      <ListGroupItem><b>Undergraduation:</b> 2019-Present<br></br>I'm currently a second year CCE student studying at Manipal Instittue of Technology, Manipal. </ListGroupItem>
      <ListGroupItem><b>Senior Secondary Education:</b> 2017-2019<br></br>I have completed my Senior Secondary education with major subjects as Physics, Chemistry, Computers and Mathematics scoring 95.2 percentage from Lourdes Central School, Mangalore.</ListGroupItem>
      <ListGroupItem><b>Primary and Secondary Education:</b> 2007-2017<br></br>I have completed my Primary and Secondary Education with grade 10 in class 10th from Sharada Vidyalaya, Mangalore. </ListGroupItem>
      <br></br><AiFillEdit size={20} /> 
      <ListGroupItem><b>Other Achievements:</b><br></br>AMTI Stage I Qualified (2016), State Level NTSE Scholar (2017), PRMO Qualified (2017), JEE Main and Advanced Qualified (2019)</ListGroupItem>
      <ListGroupItem><b>Interests:</b><br></br>I'm interested in the field of AI/ML, Web Development and Competitive Programming. I like to explore and try out things on my own. </ListGroupItem>
    </ListGroup>
  );

}

export default Example;