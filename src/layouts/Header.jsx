import {Component} from 'react';
import { NavLink, Link } from "react-router-dom"
import logo from '../assets/images/logo_kasa_pink.png';


class Header extends Component {
    render(){
        return(
            <header>
                <div className="logo">
                    <Link to={`/`}> <img src={logo} alt="logo de kasa" height="48px"/></Link>
                </div>
       
                <div className="navigation">
                    <NavLink end to ="/" >
                            Accueil
                    </NavLink>
                    <NavLink end to ="/about" >
                            A propos
                    </NavLink>
                </div>
            </header>
        )
    }
}

export default Header;