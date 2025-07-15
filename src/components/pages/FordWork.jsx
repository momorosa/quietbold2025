import { useState, useEffect } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { CameraControls } from '@react-three/drei'
import { fordContent } from '../../content/ford.js'
import { FancyLink } from "../FancyLink.jsx"
import Accordion from '../Accordion.jsx'

export default function FordWork() {
//   const [showCanvas, setShowCanvas] = useState(false);
//   useEffect(() => {
//     setShowCanvas(true);
//   }, []);

  return (
    <div className="flex flex-col h-screen w-full lg:flex-row text-white pt-16 lg:mb-80 pb-16 pr-16">
      {/* Content Panel */}
      <div className="relative order-2 lg:order-1 w-full h-2/5 p-4 lg:w-1/2 lg:h-full lg:m-8 pb-16">
        <section className="pb-4">
          <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
            {fordContent.headline}
          </h1>
          <h2 className="text-2xl py-4">{fordContent.title}</h2>
          <p className="font-light"> {fordContent.team} </p>
          <p className="font-light">
            {" "}
            {fordContent.startDate} - {fordContent.endDate}{" "}
          </p>
          <p className="pt-2 pb-4"> {fordContent.intro}</p>
          <p className="pt-2 pb-4 text-yellow-mellow-light">
            {" "}
            Skills: {fordContent.skills}
          </p>
        </section>

        {/* Project Accordions */}
        <div className="lg:w-2/3">
            { fordContent.projects.map((proj, i) => (
                <Accordion
                    key={proj.projectName}
                    title={proj.projectName}
                    outcomes={proj.keyOutcomes}
                    defaultOpen={i === 0}   // first card pre-expanded
                >
                    {proj.description}
                </Accordion>
            ))}
        </div>
        
       
    </div>
      {/* Canvas Panel */}
    <div className="relative order-1 lg:order-2 flex-1 w-full h-1/2 p-4  lg:w-1/2 lg:h-full"></div>
    </div>
  );
}
