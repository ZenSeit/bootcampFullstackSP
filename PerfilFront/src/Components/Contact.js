import '../Style/contact.css'

const Contact = ({contactInfo}) => {
  return (
    <div className="contactIcon">
        {
            contactInfo.map(cInfo => <a className='linkContainer' href={cInfo.link} target='_blank'><img className="iconContact" src={`./Images/${cInfo.icon}Logo.png`} /></a>)
        }
        
    </div>
  )
}

export default Contact