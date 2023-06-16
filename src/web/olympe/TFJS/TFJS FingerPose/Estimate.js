import { Brick, registerBrick, Query } from 'olympe';
import { GestureDescription, GestureEstimator } from 'fingerpose';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import Gesture from "./Gesture";

export default class Estimate extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const validGestures = new Map();
        const handGestures = Query.instancesOf(Gesture).executeFromCache().map((gesture) => {
            validGestures.set(gesture.getName(), gesture);
            const handGesture = new GestureDescription(gesture.getName());
            gesture.getCurls().forEach((curl) => {
                handGesture.addCurl(Number.parseInt(curl.getFinger()), curl.getCurlValue());
            });
            gesture.getDirections().forEach((direction) => {
                handGesture.addDirection(Number.parseInt(direction.getFinger()), direction.getDirectionValue());
            });
            return handGesture;
        });

        const estimator = new GestureEstimator(handGestures);
        const [predictionInput, scoreInput] = this.getInputs();

        return combineLatest([$.observe(predictionInput), $.observe(scoreInput)]).pipe(map((values) => {
            return values.concat([estimator, validGestures]);
        }));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} predictions
     * @param {number} score
     * @param {!Object} estimator
     * @param {!Map<string, Gesture>} validGestures
     * @param {function(*)} setGestureLeft
     * @param {function(*)} setGestureRight
     * @param {function(*)} setPoseData
     */
    update($, [predictions, score, estimator, validGestures], [setGestureLeft, setGestureRight, setPoseData]) {
        const leftPrediction = predictions.find((prediction) => prediction.handedness === "Left")
        const rightPrediction = predictions.find((prediction) => prediction.handedness === "Right")

        const leftEstimatedGestures = leftPrediction
            ? estimator.estimate(leftPrediction.keypoints3D.map(({x, y, z}) => [x, y, z]), score)
            : null;
        setGestureLeft(validGestures.get(leftEstimatedGestures?.gestures[0]?.name ?? null));

        const rightEstimatedGestures = rightPrediction
            ? estimator.estimate(rightPrediction.keypoints3D.map(({x, y, z}) => [x, y, z]), score)
            : null;
        setGestureRight(validGestures.get(rightEstimatedGestures?.gestures[0]?.name ?? null));
    }
}

registerBrick('0188c38607a39f1e4a8d', Estimate);