import { useState } from 'react';
import './App.css';
import Contact from './Components/Contact';
import IconGrid from './Components/IconGrid';
import JobCard from './Components/JobCard';
import Timeline from './Components/Timeline';
import profileImage from './Images/DiegoB.png';
import { myDataEs, myDataUs } from './Information/Data'

function App() {

  const [languageState, setLanguageState] = useState(false)

  let dataLanguage = languageState ? myDataUs : myDataEs

  return (
    <div className="App">
      <div className="mainCurriculum">
        <div className="infoCurriculum">
          <div className="titleName">
            <h1 className='namePerson'>{dataLanguage.fullName}</h1>
            <h3 className='profession'>{dataLanguage.profession}</h3>
            <h3 className='profession'>{dataLanguage.email}</h3>
            <h4 className='career'>{dataLanguage.career}</h4>

          </div>
          <div className="contentProfile">
            <p className="descriptionProfile">
              {dataLanguage.descriptionProfile}
            </p>
            <IconGrid imgName={dataLanguage.technologiesIcon} />
          </div>
        </div>
        <div className="imageCurriculum">
          
          <div className='imgContainer'><img className="profileImage" src={profileImage} onClick={() => setLanguageState(!languageState)} /></div>

          <Contact contactInfo={dataLanguage.contact} />


        </div>
      </div>
      <div className='topicSeccion'>
        <h3 className='titleSeccion'>{languageState ? 'Professional Experience' : 'Experiencia Profesional'}</h3>
        <JobCard infoJob={dataLanguage.jobExperience} />
      </div>
      <Timeline educationInfo={dataLanguage.education} language={dataLanguage.language} />
    </div>
  );
}

export default App;
