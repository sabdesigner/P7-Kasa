import React from 'react'
import { Link } from 'react-router-dom'

import datas from '../assets/datas/logements.json'
const cardsArray = []
//recuperer, transformer et réordonner un tableau.
class Cards extends React.Component {
// renvoyer au hasard à partir du tableau à chaque actualisation de la page.
// Tableau comme argument Math.random() * array.length à l'intérieur de Math.floor() car là où random() arrondit au nombre le plus proche,
// floor arrondira toujours à un nombre entier
     randomize(){
          while (cardsArray.length < 6){
               const randomizeId = Math.floor(Math.random() * (datas.length -1))
               if(!cardsArray.includes(datas[randomizeId])) {
                    cardsArray.push(datas[randomizeId])
               }
          }
          return cardsArray
     }

// chaque éléments est fractionnés avec sa clef id, la page affiche img, descriptif de celle-ci et la legende
     render(){
         this.randomize(datas)
         return (
              <div className="cards">
                   {cardsArray.map((card) => (
                        <Link to={'/logements/' + card.id} key={ card.id }>
                             <img src={ card.cover } alt={ card.title } />
                             <p>{ card.title}</p>
                        </Link>
                   ))}
                   </div>
         )
    }
}

export default Cards
