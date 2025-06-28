import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader   from '../shaders/particles/vertex.glsl?raw'
import fragmentShader from '../shaders/particles/fragment.glsl?raw'
import glowImgSrc     from '../../public/assets/glow.png'
import myPortrait     from '../../public/assets/my-portrait.png'

export default function Particles() {
  // 1) Build one canvas & texture
  const { canvas, context, texture } = useMemo(() => {
    const size = 128
    const c = document.createElement('canvas')
    c.width = c.height = size
    const ctx = c.getContext('2d')
    ctx.fillRect(0, 0, size, size)
    return { canvas: c, context: ctx, texture: new THREE.CanvasTexture(c) }
  }, [])

  // 2) Prepare your pointer/raycast refs
  const planeRef     = useRef()
  const raycasterRef = useRef(new THREE.Raycaster())
  const screenCursor = useRef(new THREE.Vector2(Infinity, Infinity))
  const canvasCursor = useRef(new THREE.Vector2())
  const canvasPrev   = useRef(new THREE.Vector2())

  // 3) Load portrait texture
  const pictureTexture = useMemo(
    () => new THREE.TextureLoader().load(myPortrait),
    []
  )

  // 4) Build your geometry
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 128, 128)
    geo.setIndex(null)
    geo.deleteAttribute('normal')
    const count = geo.attributes.position.count
    const aI = new Float32Array(count)
    const aA = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      aI[i] = Math.random()
      aA[i] = Math.random() * Math.PI * 2
    }
    geo.setAttribute('aIntensity', new THREE.BufferAttribute(aI, 1))
    geo.setAttribute('aAngle',     new THREE.BufferAttribute(aA, 1))
    return geo
  }, [])

  // 5) Build your shader material, feeding in *that* texture
  const material = useMemo(
    () => new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uResolution:          { value: new THREE.Vector2() },
        uPictureTexture:      { value: pictureTexture },
        uDisplacementTexture: { value: texture }
      },
      transparent: true
    }),
    [pictureTexture, texture]
  )

  // 6) Keep resolution uniform up to date
  const { size, gl } = useThree()
  useEffect(() => {
    material.uniforms.uResolution.value.set(
      size.width  * gl.getPixelRatio(),
      size.height * gl.getPixelRatio()
    )
  }, [size, gl, material])

  // 7) Correct pointer event
  useEffect(() => {
    const onMouseMove = (e) => {
      screenCursor.current.set(
        (e.clientX / size.width)  * 2 - 1,
       -(e.clientY / size.height) * 2 + 1
      )
    }
    window.addEventListener('pointermove', onMouseMove)
    return () => window.removeEventListener('pointermove', onMouseMove)
  }, [size])

  // 8) Draw + update texture each frame
  useFrame(({ camera }) => {
    // raycast to find UV
    raycasterRef.current.setFromCamera(screenCursor.current, camera)
    const hits = raycasterRef.current.intersectObject(planeRef.current)
    if (hits.length) {
      const uv = hits[0].uv
      canvasCursor.current.set(uv.x * 128, (1 - uv.y) * 128)
    }

    // fade previous
    context.globalCompositeOperation = 'source-over'
    context.globalAlpha = 0.02
    context.fillRect(0, 0, 128, 128)

    // draw glow
    const dist = canvasPrev.current.distanceTo(canvasCursor.current)
    canvasPrev.current.copy(canvasCursor.current)
    const alpha = Math.min(dist * 0.1, 1)
    const glowSize = 128 * 0.25

    context.globalCompositeOperation = 'lighten'
    context.globalAlpha = alpha
    const glowImage = new Image()
    glowImage.src = glowImgSrc
    context.drawImage(
      glowImage,
      canvasCursor.current.x - glowSize * 0.5,
      canvasCursor.current.y - glowSize * 0.5,
      glowSize, glowSize
    )

    // upload
    texture.needsUpdate = true
  })

  // 9) Render hidden plane + points
  return (
    <>
      <mesh ref={planeRef} visible={false}>
        <planeGeometry args={[10, 10]} />
      </mesh>
      <points geometry={geometry} material={material} />
    </>
  )
}
