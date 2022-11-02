import React, { useState } from 'react';
import CollapseElement from '../assets/images/collapse_element.png'

const Collapse = ({ title, index, page }) => {
    const [active, setActive] = useState(-1);

    const handleToggle = index => {
        if (index === active) {
            setActive(-1)
            return
        }
        setActive(index)
    }

    return (
        <section>
            <article className='collapse-container'>

                <div className={`collapse collapse-${page}`} >
                    <div onClick={() => handleToggle(index)}>
                        <p className='titre'>
                            {title}
                        </p>
                        <img    src={CollapseElement} 
                                alt="Element flèche" 
                                className={active === index ? "active" : ""} />
                    </div>
                </div>

                
            </article>
        </section >
    );
};

export default Collapse;