// About.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { aboutContent } from '../content/aboutText.js'
import Particles from '../r3f/Particles.jsx'
import Button from './Button.jsx'

export default function About() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row text-white overflow-auto">
      {/* ──────────────────────────────── */}
      {/* Canvas section */}
      {/* ──────────────────────────────── */}
      <div className="
          w-full        /* full width on mobile */
          h-1/2         /* half the viewport height on mobile */
          lg:w-3/5      /* 3/5 width at lg+ */
          lg:h-full     /* full height at lg+ */
      ">
        <Canvas
          className="w-full h-full"
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
        </Canvas>
      </div>

      {/* ──────────────────────────────── */}
      {/* Content panel */}
      {/* ──────────────────────────────── */}
      <div className="
        w-full                    /* full width on mobile */
        h-auto                    /* grow to content height on mobile */
        lg:w-2/5                  /* 2/5 width at lg+ */
        lg:h-full                 /* full height at lg+ */
        lg:absolute lg:top-0 lg:right-0 lg:pr-12 z-10 /* optional overlay at lg+ */
        bg-warm-gray
        backdrop-blur
        pt-32
        px-8
        mb-50
      ">
        <h1 className="text-3xl font-bold py-4 text-yellow-mellow">
          {aboutContent.headline}
        </h1>
        <p className="py-4">{aboutContent.intro}</p>
        <p>{aboutContent.background}</p>
        <p className="py-4">{aboutContent.passion}</p>

        <div className="py-4 mb-12">
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

        <Button
            id="btn"
            href="mailto:momorosa.design@gmail.com"
            className="font-medium text-black bg-yellow-mellow px-5 py-3"
            aria-label="send message"
            rightIcon="send"
            iconSize="md-18"
            target="_blank"
            rel="noopener noreferrer"
        >
          {aboutContent.buttonText}
        </Button>
      </div>
    </div>
  )
}
