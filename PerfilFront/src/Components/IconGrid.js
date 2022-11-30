import '../Style/iconGrid.css'

function IconGrid({imgName}) {
  return (
    <div className="iconGrid">

      {imgName.map(im => <img className='iconProfile' src={`./Images/${im}Logo.png`} />)}

        
    </div>
  )
}

export default IconGrid