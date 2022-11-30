import '../Style/TimelineItem.css'

export default function TimelineItem({program,institution,year}) {
    return (
        <>
        {program && (<div className="timelineItem">
                <div className="timelineDot"></div>
                <div className="timelineDate">{year}</div>
                <div className="timelineContent">
                    <h3>{program}</h3>
                    <p>
                        {institution}
                    </p>
                </div>
            </div>)}
            
        </>
    )
}
