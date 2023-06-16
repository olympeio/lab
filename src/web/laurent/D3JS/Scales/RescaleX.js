import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class RescaleX extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Transform} transform
     * @param {d3.Scale} scale
     * @param {function(*)} setRescaledScale
     */
    update($, [transform, scale], [setRescaledScale]) {
        //TODO move this brick in the Zooming Folder
        setRescaledScale(transform.rescaleX(scale));
    }
}

registerBrick('0183e070363f45671d5c', RescaleX);
