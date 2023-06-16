import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class RescaleY extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} transform
     * @param {*} scale
     * @param {function(*)} setRescaledScale
     */
    update($, [transform, scale], [setRescaledScale]) {
        //TODO move this brick in the Zooming Folder
        setRescaledScale(transform.rescaleY(scale));
    }
}

registerBrick('0183e0737834f79880eb', RescaleY);
