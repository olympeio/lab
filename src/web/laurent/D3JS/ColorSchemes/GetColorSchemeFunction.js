import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class GetColorSchemeFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} colorScheme
     * @param {function(*)} setColorSchemeFunction
     */
    update($, [colorScheme], [setColorSchemeFunction]) {
        switch(colorScheme){
            case 'Div-BrBG':
                setColorSchemeFunction(d3.interpolateBrBG);
                break;
            case 'Div-PRGn':
                setColorSchemeFunction(d3.interpolatePRGn);break;
            case 'Div-PiYG':
                setColorSchemeFunction(d3.interpolatePiYG);break;
            case 'Div-PuOr':
                setColorSchemeFunction(d3.interpolatePuOr);break;
            case 'Div-RdBu':
                setColorSchemeFunction(d3.interpolateRdBu);break;
            case 'Div-RdGy':
                setColorSchemeFunction(d3.interpolateRdGy);break;
            case 'Div-RdYlBu':
                setColorSchemeFunction(d3.interpolateRdYlBu);break;
            case 'Div-RdYlGn':
                setColorSchemeFunction(d3.interpolateRdYlGn);break;
            case 'Div-Spectral':
                setColorSchemeFunction(d3.interpolateSpectral);break;
            case 'SSH-Blues':
                setColorSchemeFunction(d3.interpolateBlues);break;
            case 'SSH-Greens':
                setColorSchemeFunction(d3.interpolateGreens);break;
            case 'SSH-Greys':
                setColorSchemeFunction(d3.interpolateGreys);break;
            case 'SSH-Oranges':
                setColorSchemeFunction(d3.interpolateOranges);break;
            case 'SSH-Purples':
                setColorSchemeFunction(d3.interpolatePurples);break;
            case 'SSH-Reds':
                setColorSchemeFunction(d3.interpolateReds);break;
            case 'SMH-Turbo':
                setColorSchemeFunction(d3.interpolateTurbo);break;
            case 'SMH-Viridis':
                setColorSchemeFunction(d3.interpolateViridis);break;
            case 'SMH-Inferno':
                setColorSchemeFunction(d3.interpolateInferno);break;
            case 'SMH-Magma':
                setColorSchemeFunction(d3.interpolateMagma);break;
            case 'SMH-Plasma':
                setColorSchemeFunction(d3.interpolatePlasma);break;
            case 'SMH-Cividis':
                setColorSchemeFunction(d3.interpolateCividis);break;
            case 'SMH-Warm':
                setColorSchemeFunction(d3.interpolateWarm);break;
            case 'SMH-Cool':
                setColorSchemeFunction(d3.interpolateCool);break;
            case 'SMH-CubehelixDefault':
                setColorSchemeFunction(d3.interpolateCubehelixDefault);break;
            case 'SMH-BuGn':
                setColorSchemeFunction(d3.interpolateBuGn);break;
            case 'SMH-BuPu':
                setColorSchemeFunction(d3.interpolateBuPu);break;
            case 'SMH-GnBu':
                setColorSchemeFunction(d3.interpolateGnBu);break;
            case 'SMH-OrRd':
                setColorSchemeFunction(d3.interpolateOrRd);break;
            case 'SMH-PuBuGn':
                setColorSchemeFunction(d3.interpolatePuBuGn);break;
            case 'SMH-PuBu':
                setColorSchemeFunction(d3.interpolatePuBu);break;
            case 'SMH-PuRd1':
                setColorSchemeFunction(d3.interpolatePuRd);break;
            case 'SMH-RdPu':
                setColorSchemeFunction(d3.interpolateRdPu);break;
            case 'SMH-YlGnBu':
                setColorSchemeFunction(d3.interpolateYlGnBu);break;
            case 'SMH-YlGn':
                setColorSchemeFunction(d3.interpolateYlGn);break;
            case 'SMH-YlOrBr':
                setColorSchemeFunction(d3.interpolateYlOrBr);break;
            case 'SMH-YlOrRd':
                setColorSchemeFunction(d3.interpolateYlOrRd);break;
            case 'Cyc-Rainbow':
                setColorSchemeFunction(d3.interpolateRainbow);break;
            case 'Cyc-Sinebow':
                setColorSchemeFunction(d3.interpolateSinebow);break;

                
        }
    }
}

registerBrick('0186e57a15cc14c78913', GetColorSchemeFunction);
