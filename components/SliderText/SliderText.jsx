import "./SliderText.css"
import { PrimaryButton } from '..'
const SliderText = (props) => {
  const divStyle = {
    background: `url(${props.imgSlider}) no-repeat top right/cover`,
  };
  return (
    <>
    <div  style={divStyle} className='hero-main' >
      <div className='hero-text'  >
        <div className='container text-fuild ' >
          <h3 className='hero-subtitle lead ' > {props.heroSub}
            <small class="text-body-secondary">{props.heroSubb}</small></h3></div>
        <h4 className='hero-title' > <em>{props.heroTitleEm}</em> {props.heroTitle} </h4>
        <PrimaryButton>Check Now!</PrimaryButton>
      </div>
      </div>
    </>
  )
}

export default SliderText
