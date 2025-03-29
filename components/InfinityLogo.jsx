"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function InfinityLogo() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xff0000, 2)
    pointLight1.position.set(2, 3, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffa500, 2)
    pointLight2.position.set(-2, -3, 4)
    scene.add(pointLight2)

    // Create infinity symbol using a parametric curve
    const createInfinityPath = () => {
      const points = []
      const numPoints = 200

      for (let i = 0; i <= numPoints; i++) {
        const t = (i / numPoints) * Math.PI * 2

        // Parametric equation for infinity symbol (lemniscate of Bernoulli)
        const x = Math.sin(t) / (1 + Math.cos(t) * Math.cos(t))
        const y = (Math.sin(t) * Math.cos(t)) / (1 + Math.cos(t) * Math.cos(t))

        points.push(new THREE.Vector3(x * 2, y * 2, 0))
      }

      return new THREE.CatmullRomCurve3(points)
    }

    const infinityPath = createInfinityPath()
    const tubeGeometry = new THREE.TubeGeometry(
      infinityPath,
      150, // tubularSegments - increased for smoother curve
      0.12, // radius
      20, // radiusSegments - increased for smoother tube
      false, // closed
    )

    // Create glowing material with improved settings
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xff5500,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.1,
    })

    const infinityMesh = new THREE.Mesh(tubeGeometry, tubeMaterial)
    scene.add(infinityMesh)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000

    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xff3300,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      infinityMesh.rotation.y += 0.005
      particlesMesh.rotation.y += 0.001

      // Pulse effect
      const time = Date.now() * 0.001
      const pulse = Math.sin(time) * 0.1 + 0.9
      infinityMesh.scale.set(pulse, pulse, pulse)

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      controls.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

