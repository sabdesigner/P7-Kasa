import React from 'react'
import { Link } from 'react-router-dom'
import datas from '../assets/datas/logements.json'

const cardsArray = []
class Cards extends React.Component {
    randomize() {
        while (cardsArray.length < 6) {
            const randomizeId = Math.floor(Math.random() * (datas.length - 1))
            if (!cardsArray.includes(datas[randomizeId])) {
                cardsArray.push(datas[randomizeId])
            }
        }
        return cardsArray
    }
    render() {
        this.randomize(datas)
        return (
            <div className="cards">
                {cardsArray.map((card) => (
                    <Link to={'/logements/' + card.id} key={card.id}>
                        <img src={card.cover} alt={card.title} />
                        <p>{card.title}</p>
                    </Link>
                ))}
            </div>
        )
    }
}

export default Cards
