import { Brick, registerBrick, Query } from 'olympe';
import Hand from './Hand.js';
import * as fp from 'fingerpose';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export default class Estimate extends Brick {

    setupExecution($) {
        const validGestures = new Map();
        const handGestures = Query.instancesOf(Hand).executeFromCache().map((hand) => {
            validGestures.set(hand.getName(), hand);
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
        const GE = new fp.GestureEstimator(handGestures);
        const [predictionInput, scoreInput] = this.getInputs();

        return combineLatest([$.observe(predictionInput), $.observe(scoreInput)]).pipe(map((values) => {
            return values.concat([GE, validGestures]);
        }));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} predictions
     * @param {number} score
     * @param {function(*)} setGestureLeft
     * @param {function(*)} setGestureRight
     * @param {function(*)} setPoseData
     */
    update($, [predictions, score, GE, validGestures], [setGestureLeft, setGestureRight, setPoseData]) {
        const leftPrediction = predictions.find((prediction) => prediction.handedness === "Left")
        const rightPrediction = predictions.find((prediction) => prediction.handedness === "Right")

        if (leftPrediction){
            const estimatedGestures = GE.estimate(leftPrediction.keypoints3D.map(({x, y, z}) => [x,y,z]), score);

            setGestureLeft(validGestures.get(estimatedGestures.gestures[0]?.name ?? null));
        }else{
            setGestureLeft(null);
        }

        if (rightPrediction){
            const estimatedGestures = GE.estimate(rightPrediction.keypoints3D.map(({x, y, z}) => [x,y,z]), score);
            setGestureRight(validGestures.get(estimatedGestures.gestures[0]?.name ?? null));
        }else{
            setGestureRight(null);
        }
        
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
    }
}

registerBrick('0188c38607a39f1e4a8d', Estimate);