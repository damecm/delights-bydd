import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItemClass: ""
        };
    }
    

    handleMouseEnter = () => {
        this.setState({ menuItemClass: this.state.menuItemClass });
    }

    handleMouseLeave = () => {
        this.setState({ menuItemClass: "" });

    }

    render() {
        const {item_name, item_price, item_img} = this.props.item;
        return (
            

                <div className="menu-item-wrapper"

                
                >

                    <div
                        className={
                            "item-img-background-wrapper" + this.state.menuItemClass
                        }
                        style={{
                            backgroundImage: "url(" + item_img + ")"
                        }}
                        
                    />
                    <div className="img-text-wrapper">
                        <div className='bottom-content-wrapper'>
                            <div className='details'>
                                {item_name}
                                <div>
                                    {item_price}
                                </div>
                            </div>
   
                                
                            
                            
                                

                        </div>
                        
                    </div>
                    
                </div>
                    
                    
            
        );  
    }        
}

