// "use client"

// import { useCallback } from "react"
// import Particles from "react-particles"
// import type { Container, Engine } from "tsparticles-engine"
// import { loadSlim } from "tsparticles-slim"

// export default function ParticleComponent() {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine)
//   }, [])

//   const particlesLoaded = useCallback(async (container: Container | undefined) => {
//     // Optional: Do something when particles are loaded
//   }, [])

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       className="absolute inset-0 z-0"
//       options={{
//         background: {
//           color: {
//             value: "transparent",
//           },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 100,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#FF6B00",
//           },
//           links: {
//             color: "#FF6B00",
//             distance: 150,
//             enable: true,
//             opacity: 0.3,
//             width: 1,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 1,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 50,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   )
// }

