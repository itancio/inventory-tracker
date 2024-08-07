import React, { useState, useEffect, useRef } from 'react'
import { Camera } from 'react-camera-pro'
import { Box, Button } from '@mui/material';


export default function Webcam() {
    const camera = useRef(null)
    const [image, setImage] = useState(null)
    const videoConstraints = {
        width: 640,
        height: 360,
        facingMode: 'user' }



    return (
        <Box target='blank'>   
            <Camera ref={camera} style={{ width: '300px', height: '300px' }} />
            <img src={image} alt='Image preview'/>
            <Button 
                onClick={() => setImage(camera.current.takePhoto())}>
                    Take photo
            </Button>
            
        </Box>
    )
}



// import React, { useEffect, useRef, useState } from 'react';
// import { Camera } from 'react-camera-pro'
// import styled from 'styled-components';


// const Wrapper = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
// `;

// const Control = styled.div`
//   position: fixed;
//   display: flex;
//   right: 0;
//   width: 20%;
//   min-width: 130px;
//   min-height: 130px;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   z-index: 10;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 50px;
//   box-sizing: border-box;
//   flex-direction: column-reverse;

//   @media (max-aspect-ratio: 1/1) {
//     flex-direction: row;
//     bottom: 0;
//     width: 100%;
//     height: 20%;
//   }

//   @media (max-width: 400px) {
//     padding: 10px;
//   }
// `;

// const Button = styled.button`
//   outline: none;
//   color: white;
//   opacity: 1;
//   background: transparent;
//   background-color: transparent;
//   background-position-x: 0%;
//   background-position-y: 0%;
//   background-repeat: repeat;
//   background-image: none;
//   padding: 0;
//   text-shadow: 0px 0px 4px black;
//   background-position: center center;
//   background-repeat: no-repeat;
//   pointer-events: auto;
//   cursor: pointer;
//   z-index: 2;
//   filter: invert(100%);
//   border: none;

//   &:hover {
//     opacity: 0.7;
//   }
// `;

// const TakePhotoButton = styled(Button)`
//   background: url('https://img.icons8.com/ios/50/000000/compact-camera.png');
//   background-position: center;
//   background-size: 50px;
//   background-repeat: no-repeat;
//   width: 80px;
//   height: 80px;
//   border: solid 4px black;
//   border-radius: 50%;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `;

// const TorchButton = styled(Button)`
//   background: url('https://img.icons8.com/ios/50/000000/light.png');
//   background-position: center;
//   background-size: 50px;
//   background-repeat: no-repeat;
//   width: 80px;
//   height: 80px;
//   border: solid 4px black;
//   border-radius: 50%;

//   &.toggled {
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `;

// const ChangeFacingCameraButton = styled(Button)`
//   background: url(https://img.icons8.com/ios/50/000000/switch-camera.png);
//   background-position: center;
//   background-size: 40px;
//   background-repeat: no-repeat;
//   width: 40px;
//   height: 40px;
//   padding: 40px;
//   &:disabled {
//     opacity: 0;
//     cursor: default;
//     padding: 60px;
//   }
//   @media (max-width: 400px) {
//     padding: 40px 5px;
//     &:disabled {
//       padding: 40px 25px;
//     }
//   }
// `;

// const ImagePreview = {
//   width: 120,
//   height: 120,
//   backgroundImage: (image) => (image ? `url(${image})` : ''),
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',

//   '@media (max-width: 400px)': {
//     width: 50,
//     height: 120,
//   }
// }

// const FullScreenImagePreview = {
//   width: 100,
//   height: 100,
// //   z-index: 100,
// //   position: absolute,
// //   background-color: black,
// //   background-image:  url(${image});` : '')}
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
// }

// export default function Webcam() {
//   const [numberOfCameras, setNumberOfCameras] = useState(0);
//   const [image, setImage] = useState(null);
//   const [showImage, setShowImage] = useState(false);
//   const camera = useRef(null);
//   const [devices, setDevices] = useState([]);
//   const [activeDeviceId, setActiveDeviceId] = useState();
//   const [torchToggled, setTorchToggled] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter((i) => i.kind == 'videoinput');
//       setDevices(videoDevices);
//     })();
//   });

//   return (
//     <Wrapper>
//       {showImage ? (
//         <FullScreenImagePreview
//           image={image}
//           onClick={() => {
//             setShowImage(!showImage);
//           }}
//         />
//       ) : (
//         <Camera
//           ref={camera}
//           aspectRatio="cover"
//           facingMode="environment"
//           numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
//           videoSourceDeviceId={activeDeviceId}
//           errorMessages={{
//             noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
//             permissionDenied: 'Permission denied. Please refresh and give camera permission.',
//             switchCamera:
//               'It is not possible to switch camera to different one because there is only one video device accessible.',
//             canvas: 'Canvas is not supported.',
//           }}
//           videoReadyCallback={() => {
//             console.log('Video feed ready.');
//           }}
//         />
//       )}
//       <Control>
//         <select
//           onChange={(event) => {
//             setActiveDeviceId(event.target.value);
//           }}
//         >
//           {devices.map((d) => (
//             <option key={d.deviceId} value={d.deviceId}>
//               {d.label}
//             </option>
//           ))}
//         </select>
//         <ImagePreview
//           image={image}
//           onClick={() => {
//             setShowImage(!showImage);
//           }}
//         />
//         <TakePhotoButton
//           onClick={() => {
//             if (camera.current) {
//               const photo = camera.current.takePhoto();
//               console.log(photo);
//               setImage(photo);
              
//             }
//           }}
//         />
//         {camera.current?.torchSupported && (
//           <TorchButton
//             className={torchToggled ? 'toggled' : ''}
//             onClick={() => {
//               if (camera.current) {
//                 setTorchToggled(camera.current.toggleTorch());
//               }
//             }}
//           />
//         )}
//         <ChangeFacingCameraButton
//           disabled={numberOfCameras <= 1}
//           onClick={() => {
//             if (camera.current) {
//               const result = camera.current.switchCamera();
//               console.log(result);
//             }
//           }}
//         />
//       </Control>
//     </Wrapper>
//   );
// };


// export {Webcam}