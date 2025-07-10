// About.jsx
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { aboutContent } from '../content/aboutText.js'
import Particles from '../r3f/Particles.jsx'
import Button from './Button.jsx'

export default function About() {

  // delay mounting the Canvas until after CSS has laid out the wrapper
  const [showCanvas, setShowCanvas] = useState(false)
  useEffect(() => {
    setShowCanvas(true)
  }, [])

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row text-white overflow-auto">

      {/* ──────────────────────────────── */}
      {/* Canvas section */}
      {/* ──────────────────────────────── */}
        
      <div className="relative flex-none w-full h-2/5 lg:w-3/5 lg:h-full">
      {showCanvas && (
        <Canvas
          className="absolute inset-0 block touch-none"
          gl={{ antialias: true }}
          camera={{ fov: 35, position: [0, 0, 18] }}
        >
          <color attach="background" args={['#202020']} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Particles />
        </Canvas>)}
      </div>

      {/* ──────────────────────────────── */}
      {/* Content panel */}
      {/* ──────────────────────────────── */}
      <div className="w-full h-auto lg:w-2/5 lg:h-full               
        lg:pr-12 bg-warm-gray backdrop-blur lg:pt-32 px-8 z-10 mb-50 lg:mb-0">
        <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
          {aboutContent.headline}
        </h1>
        <p className="py-4">{aboutContent.intro}</p>
        <p>{aboutContent.background}</p>
        <p className="py-4">{aboutContent.passion}</p>

        <Button
            id="btn"
            href="mailto:momorosa.design@gmail.com"
            className="font-medium text-black bg-yellow-mellow px-5 py-3 mt-8"
            aria-label="send message"
            rightIcon="send"
            iconSize="md-18"
            target="_blank"
            rel="noopener noreferrer"
        >
          {aboutContent.buttonText}
        </Button>

        <div className="py-4 mt-12">
            <a
                href={aboutContent.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-mellow-light underline transition"
            >
                GitHub
            </a>
            {' | '}
            <a
                href={aboutContent.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-mellow-light underline transition"
            >
                LinkedIn
            </a>
        </div>

      </div>
    </div>
  )
}
