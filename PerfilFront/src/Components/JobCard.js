import '../Style/JobCard.css'

function JobCard({infoJob}) {
  return (
    <>
    {infoJob.length>0 && (
      <div className='jobContent'>
      {
        infoJob.map((job,idx)=><div className="jobCardContent">
        <div className='jobCardImage'>
          <img className='companyIcon' src={`./Images/companies/${job.company.toLowerCase()}Logo.png`}/>
        </div>
        <div className='jobCardInfo'>
            <p>{job.job}</p>
            <p>{job.time.from} <br/>{job.time.to}</p>
            <p>{job.company}</p>            
        </div>
    </div>)
      }
      </div>
    )}
    </>
    
    
  )
}

export default JobCard