import { Brick, registerBrick } from 'olympe';
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';



export default class HandPoseDetection extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} cameraSource
     * @param {function(*)} setHands
     */
     async update($, [cameraSource], [setHands]) {

        const video = document.createElement('video');
        video.setAttribute('width', 640);
        video.setAttribute('height', 480);
        
        const stream = await navigator.mediaDevices.getUserMedia(
            {
                
                'audio': false,
                'video': {
                    facingMode: 'user',
                    'width': 1920,
                    'height': 1080
                    
                }
            }
        );
        video.srcObject = stream;
        video.play();

        async function next(){
            const model = handPoseDetection.SupportedModels.MediaPipeHands;
            const detectorConfig = {
                runtime: 'mediapipe', // or 'tfjs',
                solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
                modelType: 'full'
            }
            const detector = await handPoseDetection.createDetector(model, detectorConfig);
    
            async function update(){
                const hands = await detector.estimateHands(video);
                setHands(hands);
                requestAnimationFrame(update);
            }
            update();  
        }

        //needed to prevent a crash at the init. Sure there's a better way ;-)
        setTimeout(next, 2000);
    }
}

registerBrick('01839233e98e2ceb7c20', HandPoseDetection);
