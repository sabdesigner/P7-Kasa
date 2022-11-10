import React from 'react'
import { useParams } from "react-router-dom";

import Rating from "../components/Rating";
import Profile from "../components/Profile";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

import products from '../assets/datas/logements.json'

const Single = () => {
  
  const { cardId } = useParams();
  const card = products.find((card) => card.id === cardId);
  const { title, location, rating, host, equipments, description, pictures } =
  card;
     return (
       <div className="single">
         <Slider slides={pictures} />
         <div className="single__content">
           <div className="single__informations">
             <h1 className="single__title">{title}</h1>
             <p className="single__location">{location}</p>
             <div className="single__tags">
               {card.tags.map((tag, index) => (
                 <Tags key={index} getTag={tag} />
               ))}
             </div>
           </div>
           <div className="single__rating-and-host">
           <Rating rating={rating}/> 
          <Profile host={host} />
           </div>
         </div>

         <section id="single">
     
         <div className="collapse" >
           <Collapse title="Description" content={description}  />
           </div>
           <div className="collapse" >
           <Collapse title="Équipement" content={equipments}  />
         </div>
         </section>
       </div>
     );
   };


export default Single;