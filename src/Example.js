import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {AiFillEdit } from "react-icons/ai";
import './Header.js'

const Example = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>Hi! I'm Praseedha Praveen Kalbhavi</ListGroupItem><br></br>
      <AiFillEdit size={20} /> 
      <ListGroupItem><b>Undergraduation:</b> 2019-Present<br></br>I'm currently a third year Computer and Communication student studying at Manipal Instittue of Technology, Manipal. </ListGroupItem>
      <ListGroupItem><b>Senior Secondary Education:</b> 2017-2019<br></br>I have completed my Senior Secondary education with major subjects as Physics, Chemistry, Computers and Mathematics scoring 95.2 percentage from Lourdes Central School, Mangalore.</ListGroupItem>
      <ListGroupItem><b>Primary and Secondary Education:</b> 2007-2017<br></br>I have completed my Primary and Secondary Education with grade 10 in class 10th from Sharada Vidyalaya, Mangalore. </ListGroupItem>
      <br></br><AiFillEdit size={20} /> 
      <ListGroupItem><b>Other Achievements:</b><br></br>Generation Google APAC Scholar(2021), MIT Covid-19 Challenge Winner (HACK4THEFUTURE) (2020), GHCI Codathon Runner's Up(2020), JEE Main and Advanced Qualified(2019) , State Level NTSE Scholar (2017), PRMO Qualified (2017), ,AMTI Stage I Qualified (2016)</ListGroupItem>
      <ListGroupItem><b>Interests:</b><br></br>I'm interested in the field of AI/ML, Web Development and Competitive Programming. I love taking part in hackathons, enjoy exploring and trying out things on my own. </ListGroupItem>
    </ListGroup>
  );

}

export default Example;