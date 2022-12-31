import React from "react";

const MenuPriceList = (props) => {
    const menuPriceList = props.data.item.map(menuItem => {
        return (

            
                <div className="menu-price-list" key={menuItem.id}>
                    <div className="menu-item-img">
                        <img src={menuItem.item_img} />
                    </div>
                    <div className="text-content">
                        <div className="title">
                            {menuItem.item_name}
                        </div>
                        
                        <div className="price">
                            {menuItem.item_price}
                        </div>
                        
                    </div>
                </div>
            
        );

    });

    return <div className="menu-price-list-wrapper">{menuPriceList}</div>;
};
export default MenuPriceList;