import "./Slider.css"
import {imgSliderA,imgSliderB,imgSliderC} from '../../assets/index'
import SliderText from "../SliderText/SliderText"
const Slider = () => {
  return (
    <>
      <div id="carouselSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <SliderText imgSlider={imgSliderA} heroSub="Welcome To UwU*Shop" heroSubb="(◕‿◕✿)" heroTitle="Our latest items Here!" heroTitleem="Browse" />
          </div>
          <div className="carousel-item">
          <SliderText imgSlider={imgSliderB} heroSub="Welcome To UwU*Shop" heroSubb="(◕‿◕✿)" heroTitle="Our latest items Here!" heroTitleem="Browse" />
          </div>
          <div className="carousel-item">
          <SliderText imgSlider={imgSliderC} heroSub="Welcome To UwU*Shop" heroSubb="(◕‿◕✿)" heroTitle="Our latest items Here!" heroTitleem="Browse" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider
