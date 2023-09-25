import {PrimaryButton } from '..'
import './CollectionCard.css'

const CollectionCard = (props) => {
  return (
      <div className="row align-items-center justify-content-center ">
              <div className="col-lg">
                <img src={props.imgCard} className=" imgCard" alt='img' /> 
                </div>
              <div className="col-lg p-3 ">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <PrimaryButton>Check This Article</PrimaryButton>
              </div>
            </div> 
  )
}

export default CollectionCard
