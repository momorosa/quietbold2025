import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
// import { CameraControls } from '@react-three/drei'
import { frbContent } from '../../content/frb.js'
import Accordion from '../Accordion.jsx'
import Pagination from '../Pagination.jsx'
import Laptop from '../../r3f/Laptop.jsx'

export default function FrbWork() {
    const [showCanvas, setShowCanvas] = useState(false)
    useEffect(() => {
        setShowCanvas(true)
    }, [])

    return <>
        <div className="flex flex-col h-dvh w-full lg:flex-row text-white pt-16 lg:mb-20 pb-16 pr-16 overflow-auto">
            {/* Content Panel */}
            <div className="relative order-2 lg:order-1 w-screen h-2/5 p-4 lg:w-1/2 lg:h-full lg:m-8 pb-16">
                <section className="pb-4">
                    <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
                        {frbContent.headline}
                    </h1>
                    <h2 className="text-2xl py-4">{frbContent.title}</h2>
                    <p className="font-light"> {frbContent.team} </p>
                    <p className="font-light">
                        {" "}
                        {frbContent.startDate} - {frbContent.endDate}{" "}
                    </p>
                    <p className="pt-2 pb-4"> {frbContent.intro}</p>
                    <p className="pt-2 pb-4 text-yellow-mellow-light">
                        {" "}
                        Skills: {frbContent.skills}
                    </p>
                </section>

                {/* Project Accordions */}
                <div className="lg:w-2/3">
                    { frbContent.projects.map((proj, i) => (
                        <Accordion
                            key={proj.projectName}
                            title={proj.projectName}
                            outcomes={proj.keyOutcomes}
                            defaultOpen={i === 0}   // first card pre-expanded
                            buttonProps={ proj.actionButton }
                        >
                            {proj.description}
                        </Accordion>
                    ))}
                </div>
            </div>
            {/* Canvas Panel */}
            <div className="relative order-1 lg:order-2 flex-1 w-full h-1/2 p-4 lg:w-1/2 lg:h-full">
                {showCanvas && <Canvas
                    className="touch-none"
                >
                    <Laptop />
                </Canvas>}
            </div>
        </div>
        <Pagination 
            prev={{ href: '/work/ford', title: 'Ford' }}                
            next={{ href: '/work/personal', title: 'Personal Projects' }}                
        />
    </>   
}
