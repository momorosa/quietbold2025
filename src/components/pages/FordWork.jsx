import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { fordContent } from '../../content/ford.js'
import Accordion from '../Accordion.jsx'
import Button from '../Button.jsx'
import Pagination from '../Pagination.jsx'
import Suv from '../../r3f/Suv.jsx'

export default function FordWork() {
    const [showCanvas, setShowCanvas] = useState(false)
    useEffect(() => {
        setShowCanvas(true)
    }, []);

    return <>
        <div className="flex flex-col h-screen w-full lg:flex-row text-white pt-16 mb-20 pb-16 lg:pr-16">
        {/* Content Panel */}
            <div className="relative order-2 lg:order-1 w-screen h-2/5 p-4 lg:w-1/2 lg:h-full lg:m-8 pb-16">
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
                <p className="pt-4 pb-2 italic">Ford work is confidential. Reach out for a private showcase.</p>
                <Button
                    id="btn"
                    href="mailto:momorosa.design@gmail.com"
                    className="font-medium text-black bg-yellow-mellow px-5 py-3 mt-4"
                    aria-label="send message"
                    rightIcon="send"
                    iconSize="md-18"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Send message
                </Button>
       
            </div>
        {/* Canvas Panel */}
            <div className="relative order-1 lg:order-2 flex-1 w-full h-1/2 p-4 lg:w-1/2 lg:h-full">
                {showCanvas && <Canvas className="touch-none" gl={{ antialias: true }}>
                    <Suv />
                </Canvas>}
            </div>
        </div>
        <Pagination 
            prev={{ href: '/', title: 'Home' }}                
            next={{ href: '/work/frb', title: 'First Republic Bank' }}                
        />
    </>
}
