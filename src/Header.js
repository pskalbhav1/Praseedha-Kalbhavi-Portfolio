import React from 'react';
import Image from './Image.png'; 
import './App.css';

function Header() {
  // Import result is the URL of your image
  return <img src={Image} alt="Logo" class="responsive"/>;
}
export default Header;