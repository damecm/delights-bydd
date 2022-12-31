// import axios from 'axios';
// import React, { Component } from 'react';
// import MenuList from "../menu/menu-list";
// // import AddMenuForm from "../menu/add-menu-form";

// export default class MenuManager extends Component {
//     constructor () {

//         super();
    
//         this.state = {
//             menuItems: [],
//             menuToEdit: {}
//         };

//         this.handleNewFormSubm = this.handleNewFormSubm.bind(this);
//         this.handleEditFormSubm = this.handleEditFormSubm.bind(this);
//         this.handleSuccessFormSubmErr = this.handleSuccessFormSubmErr.bind(this);
//         this.handleDeleteClick = this.handleDeleteClick.bind(this);
//         this.handleEditClick = this.handleEditClick.bind(this);
//         this.clearMenuToEdit = this.clearMenuToEdit.bind(this);
//     }

//     clearMenuToEdit() {
//         this.setState({
//             clearMenuToEdit: {}
//         });
//     }

//     handleEditClick(menuItem) {
//         this.setState({
//             clearMenuToEdit: menuItem
//         });
//     }

//     handleDeleteClick(menuItem) {
//         axios.delete(`https://dd-delights-api.herokuapp.com/item/get/${menuItem.id}`, {withCredentials: true}
//         ).then(response => {
//             this.setState({
//                 menuItems: this.state.menuItems.filter(item => {
//                     return item.id !== menuItem.id;
//                 })
//             })

//             return response.data;
//         }).catch(error => {
//             console.log("handleDeleteClick error", error);
//         });
//     }

//     handleEditFormSubm() {
//         this.getMenuItems();

//     }

//     handleNewFormSubm(menuItem) {
//         this.setState({
//             menuItems: [menuItem].concat(this.state.menuItems)
//         });

//     }

//     handleSuccessFormSubmErr(error) {
//         console.log("handleformsubmerror", error);

//     }
//     getMenuItems() {
//         axios.get("https://dd-delights-api.herokuapp.com/item/get", {withCredentials: true
//             }).then(response => {console.log("menuItems",response); this.setState({menuItems: [... response.data.get_items]});
//             }).catch(error => {console.log("error in getMenuItems", error);});
//     }
//     componentDidMount() {
//         this.getMenuItems();
//     }
//     render() {
//         return (
//             <div className= "menu-mngr-wrapper">
//                 <div className= "left-column">
//                     <AddMenuForm 
//                         handleNewFormSubm = {this.handleNewFormSubm}
//                         handleEditFormSubm = {this.handleEditFormSubm}
//                         handleSuccessFormSubmErr = {this.handleSuccessFormSubmErr}
//                         clearMenuToEdit = {this.clearMenuToEdit}
//                         menuToEdit={this.state.menuToEdit}
//                     />
//                 </div>
//                 <div className="right-column">
//                     <MenuList 
//                         handleDeleteClick={this.handleDeleteClick}
//                         data={this.state.menuItems}
//                         handleEditClick={this.handleEditClick}
//                     />
                    
//                 </div>
//             </div>
//         )
//     }
// }
