import '../Style/Timeline.css'
import TimelineItem from './TimelineItem';

function Timeline({educationInfo,language}) {
    return (
        <>
        {educationInfo.length>0 && (<div className='timelineContainer'>
            <h3 className='titleTimeline'>{language==='ES' ? 'Educacion' : 'Education'}</h3>
            <section className="timelineSection">
                <div className="timelineItems">
                    {
                        educationInfo.map((edu,idx)=><TimelineItem
                            key={idx} 
                            program={edu.program}
                            institution={edu.institution}
                            year={edu.year}
                            />)
                    }

                </div>
            </section>
        </div>)}
        </>
        
    )
}

export default Timeline;