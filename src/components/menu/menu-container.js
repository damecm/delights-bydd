import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from "./menu-item";

export default class MenuContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Delights by DD",
      isLoading: false,
      data: []
      
    };

    this.itemFilter = this.itemFilter.bind(this);
    
    
  }

  itemFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getMenuItems();
    }
    else {
      this.getMenuItems(filter);
    }
  }

  getMenuItems(filter = null) {
    axios
      .get("https://dd-delights-api.herokuapp.com/item/get")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.filter(item => {
              return item.item_category === filter;})
          });
        }
        else {
          this.setState({data: response.data});
        }
      })
      .catch(error => {
        console.log(error);
      });
    
  }
  menuItems() {
    return this.state.data.map(item => {
      return (
        <MenuItem
          key={item.id}
          item={item}
        
        />
      );
    });
  }
  componentDidMount() {
    this.getMenuItems();
  }
    
  
  

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }


    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button className="btn" onClick={() => this.itemFilter("Appetizer")}> Appetizer </button>
          <button className="btn" onClick={() => this.itemFilter("Entree")}>Entree</button>
          <button className="btn" onClick={() => this.itemFilter("Dessert")}>Dessert</button>
          
          <button className="btn" onClick={() => this.itemFilter("CLEAR_FILTERS")}>All</button>
        </div>
        
        <div className="menu-items-wrapper">{this.menuItems()}</div>
      </div>
    );
  }
    
  
  
}
