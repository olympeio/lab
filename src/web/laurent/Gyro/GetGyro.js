import { Brick, registerBrick } from 'olympe';
import { useCallback, useEffect, useState } from 'react';

export default class GetGyro extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(number)} setAlpha
     * @param {function(number)} setBeta
     * @param {function(number)} setGamma
     * @param {function(number)} setA
     * @param {function(number)} setB
     * @param {function(number)} setC
     * @param {function(number)} setD
     */
     update($, inputs, [setAlpha, setBeta, setGamma, setA, setB, setC, setD]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        
        //initialise to 0 before the sensor sends any data
        setAlpha(0);
        setBeta(0);
        setGamma(0);


        // feature detect
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                window.addEventListener('devicemotion', (event) => {
                    setA(event.accelerationIncludingGravity.x);
                    setB(event.accelerationIncludingGravity.y);
                    setC(event.accelerationIncludingGravity.z);
                    //setAccX(event.acceleration.x);
                    //setAccY(event.acceleration.y);
                    //setAccZ(event.acceleration.z);
                    //setRotRateX(event.rotationRate.x);
                    //setRotRateY(event.rotationRate.y);
                    //setRotRateZ(event.rotationRate.z);
                    //setInterval(event.interval); in ms between 2 measures
                });
                }
            })
            .catch(console.error);
        } else {
            // handle regular non iOS 13+ devices
            window.addEventListener('devicemotion', (event) => {
                setA(event.accelerationIncludingGravity.x);
                setB(event.accelerationIncludingGravity.y);
                setC(event.accelerationIncludingGravity.z);
                //setAccX(event.acceleration.x);
                //setAccY(event.acceleration.y);
                //setAccZ(event.acceleration.z);
                //setRotRateX(event.rotationRate.x);
                //setRotRateY(event.rotationRate.y);
                //setRotRateZ(event.rotationRate.z);
                //setInterval(event.interval); in ms between 2 measures
            });
        }

        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
              .then(permissionState => {
                if (permissionState === 'granted') {
                  window.addEventListener('deviceorientation', (event) => {
                    setAlpha(event.alpha);
                    setBeta(event.beta);
                    setGamma(event.gamma);
                  });
                }
              })
              .catch(console.error);
          } else {
            // handle regular non iOS 13+ devices
            window.addEventListener('deviceorientation', (event) => {
                setAlpha(event.alpha);
                setBeta(event.beta);
                setGamma(event.gamma);
              });
          }
    }
}

registerBrick('018369a6d33e47aeb5c3', GetGyro);
