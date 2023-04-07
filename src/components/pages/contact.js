import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPic from "../../../static/assets/images/background/mom.jpg";

export default function() {
    return (
        <div className='content-page-wrapper'>
            <div className='left-column' style={{ background: "url(" + contactPic + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className='right-column'>
                <div className='contact-bullet-points'>
                    
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className='text'>denisedame@gmail.com</div>
                    </div>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className='text'>Grand Rapids, MI</div>
                    </div>
                </div>
            </div>


        </div>
    );
}
