import React, { useState } from 'react';
import CollapseElement from '../assets/images/collapse_element.png'

// UseState permet de declarer la "variable etat " active useState est un Hook qui vous permet d'ajouter l'état React 
//aux composants de la fonction. Cela nous permet de conserver l'état local dans un composant de fonction.
const Collapse = ({ title, description, cards, index, page }) => {
    const [active, setActive] = useState(0);
// bouton bascule pour afficher et masquer les données à l'aide du crochet useState avec handleToggle
// nous déclarons une nouvelle variable d'état en appelant le useStateHook, envoie une paire de valeurs -1 argument useState nous renvoie la maj c-a-d setactive
    const Bascule = index => {
        if (index === active) {
            setActive(-1)
            return
        }
        setActive(index)
    }
// déstructuration du tableau qui permet d'attribuer un nom à chaque élément du tableau.                

    return (
        <section>
            <article className='collapse-container'>
                <div className={`collapse collapse-${page}`} >
                    <div onClick={() => Bascule(index)}>
                        
                        <p className='titre'>{title}</p>
                        <img src={CollapseElement} alt="Element flèche" className={active === index ? "active" : ""} />
                    </div>
                </div>

                <div className={`${page}-description ${active === index ? "active" : ""}`}>
                    <p>
                        {description}</p>
                    {cards &&
                        cards.map((card, index) => (
                            <p key={`${card}-${index}`} 
                            className="cards">{card}</p>
                    
                        ))
                    }
                    
                </div>
                
            </article>
        </section >
    );
};

export default Collapse;