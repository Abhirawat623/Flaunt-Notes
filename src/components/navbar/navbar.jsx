import "./navbar.css";
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar-heading">
      <span>
       <Link to='/'><img
          src="https://i.ibb.co/bdwSXYT/Wix-Logo-Maker-and-13-more-pages-Personal-Microsoft-Edge-25-09-2023-23-29-35-removebg-preview.png"
          className="nav-logo"
          alt="nav-logo"
          border="0"
        /></Link>
      </span>
    
      <Link to='/login'><span className="material-symbols-outlined circle">account_circle</span></Link>
    </div>
  );
};
