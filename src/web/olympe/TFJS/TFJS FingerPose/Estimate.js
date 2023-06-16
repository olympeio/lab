import { Brick, registerBrick, Query } from 'olympe';
import Hand from './Hand.js';
import * as fp from 'fingerpose';

export default class Estimate extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} predictions
     * @param {string} score
     * @param {function(*)} setGesture
     * @param {function(*)} setPoseData
     */
    update($, [predictions, score], [setGesture, setPoseData]) {
        // Get available gestures
        const handGestures = Query.instancesOf(Hand).executeFromCache().map((hand) => {
            console.log(hand.getName());
            const handGesture = new fp.GestureDescription(hand.getName());
            
            handGesture.addCurl(fp.Finger.Thumb,hand.getThumb().getCurl())
            handGesture.addDirection(fp.Finger.Thumb,hand.getThumb().getDirection())

            handGesture.addCurl(fp.Finger.Index,hand.getIndex().getCurl())
            handGesture.addDirection(fp.Finger.Index,hand.getIndex().getDirection())

            handGesture.addCurl(fp.Finger.Middle,hand.getMiddle().getCurl())
            handGesture.addDirection(fp.Finger.Middle,hand.getMiddle().getDirection())

            handGesture.addCurl(fp.Finger.Ring,hand.getRing().getCurl())
            handGesture.addDirection(fp.Finger.Ring,hand.getRing().getDirection())

            handGesture.addCurl(fp.Finger.Pinky,hand.getPinky().getCurl())
            handGesture.addDirection(fp.Finger.Pkny,hand.getPinky().getDirection())
            return handGesture;
        });
        
        const GE = new fp.GestureEstimator(handGestures)
        
        const estimatedGestures = GE.estimate(predictions.landmarks, score);
        console.log(estimatedGestures.gestures[0])
        setGesture(estimatedGestures.gestures[0])
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
    }
}

registerBrick('0188c38607a39f1e4a8d', Estimate);