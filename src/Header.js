import React from 'react';
import Image from './Image.jpg'; 

function Header() {
  // Import result is the URL of your image
  return <img src={Image} alt="Logo" />;
}
export default Header;