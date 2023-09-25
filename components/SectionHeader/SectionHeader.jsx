import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div className='section-header text-center pb-3 ' >
        <h4>{props.children}</h4>
      </div>
  )
}

export default SectionHeader
