import React from 'react'
import * as THREE from 'three'
import { Html, ContactShadows, PresentationControls, Float, Environment } from '@react-three/drei'
import { useControls } from 'leva'
import SuvModel from './SuvModel.jsx'

export default function Suv() {

    const envOptions = [ 'city','dawn','night','sunset','warehouse','forest','apartment','studio' ]
    
    // creates a leva color picker
    const { carColor, trimColor, environmentPreset } = useControls({
        carColor: { value: '#CF9033' },
        trimColor: { value: '#000000'},
        environmentPreset: {
            value: 'city',
            options: envOptions
        }  
    })

    return<>
        <Environment preset={ environmentPreset } />
        <PresentationControls
            global
            rotation={[ 0.25, -0.5, 0]}
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1, 0.75 ]}
            damping={ 0.2 }
            snap
        >
            <Float rotationIntensity={ 0.4 }>
                <group position-y={-1.2} scale={1.7}>
                    <SuvModel color={ carColor } trimColor={ trimColor} />
                </group>       
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