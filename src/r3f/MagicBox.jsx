import { useRef } from 'react'
import { MeshPortalMaterial, useGLTF, Environment, Edges, PivotControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

/* preload once so each lazy Canvas doesn’t fetch again */
useGLTF.preload('/assets/models/aobox-transformed.glb')

/* ───── One face (portal) ───── */
function Side({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }) {
    const { nodes } = useGLTF('/assets/models/aobox-transformed.glb')
    const mesh = useRef()

    // spin the inner shape
    useFrame((state, delta) => {
        mesh.current.rotation.x += delta
        mesh.current.rotation.y += delta
    })

    return (
        <MeshPortalMaterial attach={`material-${index}`}>
        {/* mini-scene rendered *inside* this face */}
            <ambientLight intensity={0.7} />
            <Environment preset="city" />

            <spotLight 
                position={[ 2, 2, 2 ]}
                intensity={ 1.5 }
                angle={ 0.3 }
                penumbra={ 0.8 }
            />

            {/* baked-AO cube background */}
            <mesh 
                rotation={rotation}
                geometry={nodes.Cube.geometry}
            >
                <meshStandardMaterial
                    color={bg}
                    aoMap={nodes.Cube.material.aoMap}
                    aoMapIntensity={1}
                />
            </mesh>

            {/* inner shape (static now) */}
            <mesh ref={ mesh } castShadow receiveShadow>
                {children}
             <meshStandardMaterial 
                color={bg} 
                roughness={ 0.4 }
                metalness={ 0.1 }
            />
            </mesh>
        </MeshPortalMaterial>
    )
}

/* ───── Portal cube with PivotControls ───── */
export default function MagicBox({ scale = 2, ...props }) {
  return (
    <PivotControls anchor={[ -1.1, -1.1, -1.1 ]} scale={ 0.75 } lineWidth={ 3.5 }>
      <group scale={scale} {...props}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <Edges />

          {/* six portal faces */}
          <Side rotation={[0, 0, 0]} bg="hotpink" index={0}>
            <torusGeometry  args={[0.65, 0.3, 64]} />
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
          </Side>
          <Side rotation={[0, Math.PI / 2,  Math.PI / 2]} bg="lightgreen" index={2}>
            <boxGeometry  args={[1.15, 1.15, 1.15]} />
          </Side>
          <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
            <octahedronGeometry />
          </Side>
          <Side rotation={[0, -Math.PI / 2, 0]} bg="orange" index={4}>
            <icosahedronGeometry />
          </Side>
          <Side rotation={[0,  Math.PI / 2, 0]} bg="indianred" index={5}>
            <dodecahedronGeometry />
          </Side>
        </mesh>
      </group>
    </PivotControls>
  )
}
