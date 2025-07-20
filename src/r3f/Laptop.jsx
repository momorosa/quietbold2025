import React from 'react'
import { Html, useGLTF, ContactShadows, PresentationControls, Float, Environment } from '@react-three/drei'


export default function Laptop() {
    const laptop = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    return<>
        <Environment preset="city" />
        <PresentationControls
            global
            rotation={[ 0.3, -0.5, 0]}
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1, 0.75 ]}
            damping={ 0.2 }
            snap
        >
            <Float rotationIntensity={ 0.4 }>
                <primitive
                    object={ laptop.scene } 
                    position-y={ - 1.2}
                    scale={ 1.5 }
                >
                    <Html>
                        <img
                            src="/ford-support-screenshot.png"
                        />
                    </Html>
                    
                </primitive>        
            </Float>

        </PresentationControls>
        <ContactShadows 
            position-y={ -1.4 } 
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </>
    
}