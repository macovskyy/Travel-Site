import React, { useState } from 'react';
import menuIcon from './img/menuIcon.png'
import menuCross from './img/menuCross.png'
import arrowLi from './img/arrowLi.png'
import './header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    // для Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    // для Service
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    // для повороту стрілки при натисканні на Service
    const [isArrowRotated, setIsArrowRotated] = useState(false);

    const toggleService = () => {
        setIsServiceOpen(!isServiceOpen);
        setIsArrowRotated(!isArrowRotated);
    }

    return ( 
        <div className="header">
            
            <div className='headerContent'>
                <NavLink to='/' style={{ textDecoration: 'none' }} >
                    <div className='headerLogo'>
                        Travelulu
                    </div>
                </NavLink>
                    <img src={menuIcon} className='headerMenuIcon' alt='Меню' onClick={toggleMenu}></img>
                    {isMenuOpen && (
                        <div className='headerMenu'>
                            <div className='menuHeader'>
                                <div className='menuLogo'>
                                    Travelulu
                                </div>
                                <img src={menuCross} className='menuCross' alt='Меню' onClick={toggleMenu}></img>
                            </div>
                            <div className='menuList'>
                            <ul className='mainMenuList'>
                                <NavLink to='/' style={{textDecoration: 'none', color: '#fff'}}>
                                    <li className='menuItem'>Home</li>
                                    </NavLink>
                                    <li className='menuItem ' onClick={toggleService}>
                                        <div className='menuItemService'>
                                            <img src={arrowLi} className={`arrowLi${isArrowRotated ? ' rotated' : ''}`}></img>
                                            <p>Services</p>
                                        </div>
                                        
                                        {isServiceOpen && (
                                            <ul className='menuServices'>
                                                <li className='menuServicesItem'>Planning</li>
                                                <li className='menuServicesItem'>Financing</li>
                                                <li className='menuServicesItem'>Purchasing</li>
                                                <li className='menuServicesItem'>Reviewing</li>
                                                <li className='menuServicesItem'>Flying</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className='menuItem'>Continents</li>
                                    <li className='menuItem'>Contact</li>
                                    <li className='menuItem'>Privacy</li>
                                </ul>
                                </div>
                            </div>
                    )}
                </div>
            
        </div>
     );
}
 
export default Header;