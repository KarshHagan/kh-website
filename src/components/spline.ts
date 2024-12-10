/* eslint-disable simple-import-sort/imports */
// import { breakpoints } from '$utils/breakpoints';
// import { Application } from '@splinetool/runtime';

// export const spline = () => {
//   // Select the canvas element
//   const canvas = document.querySelector('.test-canvas') as HTMLCanvasElement;

//   if (!canvas) {
//     console.error('Canvas element not found. Ensure .test-canvas exists in your HTML.');
//     return;
//   }

//   // Initialize the Spline Application
//   const splineApp = new Application(canvas);

//   // Load the Spline scene
//   splineApp
//     .load('https://prod.spline.design/umYvkOv70ajvEuR4/scene.splinecode')
//     .then(() => {
//       console.log('Spline scene loaded successfully.');

//       const camera = splineApp._camera;

//       console.log('CAM', camera);

//       if (camera) {
//         const toggleCameraState = () => {
//           const device = breakpoints()[0];
//           console.log(device);

//           // if (device === 'mobile' || device === 'mobile-portrait') {
//           //   camera.position.z = 1600;
//           //   camera.position.y += 100;
//           // }
//         };

//         toggleCameraState();
//         window.addEventListener('resize', toggleCameraState);
//       }
//     })
//     .catch((error) => {
//       console.error('Error loading Spline scene:', error);
//     });

//   console.log('Initialized Spline Application:', { canvas, splineApp });
// };
