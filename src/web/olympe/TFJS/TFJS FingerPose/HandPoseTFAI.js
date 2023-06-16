import { Brick, registerBrick } from 'olympe';

export default class HandPoseTFAI extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} cameraSource
     * @param {!Array} outputs
     */
    async update($, [cameraSource], outputs) {
        const video = document.createElement('video');
        video.setAttribute('width', 640);
        video.setAttribute('height', 480);
        
        const stream = await navigator.mediaDevices.getUserMedia(
            {
                
                'audio': false,
                'video': {
                    facingMode: 'user',
                    'width': 640,
                    'height': 480
                    
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

registerBrick('0188c33ea7a3f5c95589', HandPoseTFAI);
