import React, { Component } from 'react';
import shelfie_icon from './shelfie_icon.png';  
import '../../App.css'; 
import {Link, withRouter} from 'react-router-dom'; 

export class Header extends Component {
    render() {
        return (
            <div className='header' >
             <img src={shelfie_icon} style={{width: '30px', height: '30px'}} alt='Header logo' />
             <h1>SHELFIE</h1>
             <Link to='/'> <h4>Dashboard</h4></Link>
             <Link to='/add'><h4>Add Inventory </h4></Link>
            </div>
        )
    }
}

export default withRouter(Header); 
