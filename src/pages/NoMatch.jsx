import Footer from '../layouts/Footer';
import { Link } from "react-router-dom";

function NoMatch() {
    return (
      <div className="nomatch">
        <h3>
           Oups! La page que vous demandez n&apos;existe pas.
        </h3>
        <Link to="/" className="error__link">
          Retourner sur la page d&apos;accueil
        </Link>
     
        <Footer />
       </div>
    );
  } 
  export default NoMatch;