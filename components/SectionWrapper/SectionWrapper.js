import './SectionWrapper.css'

const SectionWrapper = (props) => {
  return (
    <div className='section-wrapper bg-warning-subtle  ' >
        {props.children}
    </div>
  )
}

export default SectionWrapper
