import './CardsCollection.css'
import { Card } from "../../components"
import {imgCardA,imgCardB,imgCardC} from "../../assets"

const CardsCollection = () => {
  return (
    <div className="container Cards   " >
      <div className='row' >
        <div className='col-4' >  
           <Card imgCard={imgCardA} title="Fashionista" text="classy black outfit that makes you look fancy and stylish "  />  
        </div>
        <div className='col-4' >  
        <Card imgCard={imgCardB} title="Fashionista" text="classy black outfit that makes you look fancy and stylish "  />
        </div>
        <div className='col-4' >  
        <Card imgCard={imgCardC} title="Fashionista" text="classy black outfit that makes you look fancy and stylish "  />
        </div>
      </div>
         </div>
  )
}

export default CardsCollection
