import { Link } from 'react-router-dom'

function NoMatch() {
    return (
        <div>
            <div className="nomatch">
                <h2>404</h2>
                <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
                <Link to="/" className="error__link">
                    Retourner sur la page d&apos;accueil
                </Link>
            </div>
        </div>
    )
}
export default NoMatch
