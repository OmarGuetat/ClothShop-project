import {PrimaryButton} from '..'
import './Card.css'

const Card = (props) => {
  return (
    <>
        <div className="card card-general  ">
        <img src={props.imgCard} className="card-img-top img-fluid " alt="Article image"/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <PrimaryButton>Check this </PrimaryButton>
         </div>
    </div>
    
    </>
  )
}

export default Card
