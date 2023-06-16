import { Brick, registerBrick } from 'olympe';

export default class BumpsDataGen extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} samplesCount
     * @param {number} bumpsCount
     * @param {function(*)} setData
     */
    update($, [samplesCount, bumpsCount], [setData]) {
        
        // Inspired by Lee Byron’s test data generator.
        function bump(a, n) {
            const x = 1 / (0.1 + Math.random());
            const y = 2 * Math.random() - 0.5;
            const z = 10 / (0.1 + Math.random());
            for (let i = 0; i < n; ++i) {
            const w = (i / n - y) * z;
            a[i] += x * Math.exp(-w * w);
            }
        }
        function bumps(n, m) {
            const a = [];
            for (let i = 0; i < n; ++i) a[i] = 0;
            for (let i = 0; i < m; ++i) bump(a, n);
            return a;
        };
        setData(bumps(samplesCount, bumpsCount));
          
    }
}

registerBrick('0184037f54b284f8a8e3', BumpsDataGen);
