import './Container.css'

const Container = (props) => {
  return (
    <div className='container main-container p-5' >
        {props.children}
    </div>
  )
}

export default Container
