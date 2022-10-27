import {Component} from 'react';
import { NavLink, Link } from "react-router-dom"
import logo from '../assets/images/logo_kasa_pink.png';


class Header extends Component {
    render(){
        return(
            <div>
                <div className="logo">
                    <Link to={`/`}> <img src={logo} alt="logo de kasa"/></Link>
                </div>
       
                <div className="navigation">
                    <NavLink exact to ="/" activeClassName ="nav-active">
                            Accueil
                    </NavLink>
                    <NavLink exact to ="/about" activeClassName ="nav-active">
                            A propos
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Header;