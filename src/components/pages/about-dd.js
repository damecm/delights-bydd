import React from 'react';
import aboutPic from "../../../static/assets/images/headshot/dd-delight-headshot2.png";

export default function() {
  
  return (
    <div className='content-wrapper'>
      <div
        className='left-side' style={{ background: "url(" + aboutPic + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className='right-side'>
          <h1>My Story</h1>
          
          
          <p>   My Love for  baking came at an early age. I grew up with 10 siblings and being one of the eldest I learned to bake to help my mom out in the kitchen.
              As I worked on perfecting my recipes I realized how happy the homemade baked goods made everyone, which in turn made me very fulfilled that I could bring
              such joy in the simple things in life. So I continued on in my later years to spread the joy of baking to everyone I encountered in my life. I was brought
              up to always take a gift when you go to someones house and my gift was always one from the heart, my baking.
              It is the simple things in life so spread some joy!
          </p>

        </div>
      
    </div>
  )
}
