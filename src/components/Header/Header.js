import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-icons">
                <a href="#"><i class="far fa-heart icon"></i></a>
                <a href="#"><i class="fas fa-home icon"></i></a>
            </div>
            
            <h1 className="header_title">Burger <br/> Creator</h1>
        </div> 
        
     );
}
 
export default Header;