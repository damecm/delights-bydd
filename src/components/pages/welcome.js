import React from 'react';
import welcomePic from "../../../static/assets/images/background/welcomePage2.jpg";
import { Link } from 'react-router-dom';
import { handleMouseEnter, handleMouseLeave } from '../menu/menu-item';
export default function() {
  return (
    <div>
        <Link to={"/menu"}>
            <div
              className='content-page-wrapper'
                
              style={{
                background: "url(" + welcomePic + ") repeat", backgroundSize: "cover", backgroundPosition: "center" }}
            />
        </Link>
        
        
    </div>
  );
}
