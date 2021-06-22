import React, { Component } from 'react'
import Image from './Image.png'; 
import './App.css'
import {FaInstagram ,FaLinkedin ,FaGithub, FaFacebook } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              
              <img src={Image} alt="Logo" class="response"/>
              <br></br>
              <h5 className="display-6">Praseedha Praveen Kalbhavi</h5>
              <div class="cursor"><AiOutlineMail size={20} /><span font-size="0.1" className="email" ><i className="fab fa-mail"></i><div class="cursor">praseedhakalbhavi@gmail.com</div></span>
              <br></br><br></br></div>
              <br></br>
              <nav id="colorlib-main-menu">
              <a href="https://www.facebook.com/pskalbhavi" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /> </a>
              <a href="https://www.instagram.com/praseedhapraveen/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /> </a>
              <a href="https://www.linkedin.com/in/praseedha-praveen-kalbhavi-bb4091190" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /> </a>
              <a href="https://github.com/pskalbhav1" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
              </nav>
              <br></br>
              </div>
           
          </aside>
        </div>
      </div>
       
    )
  }
}