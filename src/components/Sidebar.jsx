import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Sidebar = () => {
    
    return (
        <div className="sidebar">

            <ul>
                <li className='list-item'> 
                <a href='/home'/>
                < HomeIcon className='icon' /> HOME </li>
                
            </ul>
            <br />
            <div className='list-item'>
                <EditNoteIcon className='icon' fontSize='large'/> Registrations
            </div>
            <ul>
              
                <a href="/Event"><li>Event</li></a>

            </ul>
            <ul>
              
              <a href="/Food"><li>Food</li></a>

          </ul>
         
            <div className='list-item'>
                <VisibilityIcon className='icon'/> View
            </div>
            <ul>
                {/* <a href="/Eventview"><li>Event Details View</li></a> */}
                <a href="/Eventview"><li>Eventview</li></a>

            </ul>
            <ul>
                {/* <a href="/Foodview"><li>Food Details View</li></a> */}
                <a href="/Foodview"><li>Foodview</li></a>

            </ul>
           
           


        </div>      
    );
};

export default Sidebar;