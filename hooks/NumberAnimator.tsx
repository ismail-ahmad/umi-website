'use client';

import {useState, useEffect, useRef} from 'react';

export default function useNumberAnimator({target, duration}:{target:number, duration:number}): number{
    const [value, setValue] = useState<number>(0);
    const currentTime = useRef<number|null>(null);
    const frameId = useRef<number|null>(null);

    useEffect(() => {
        currentTime.current = null;
        function animator(now: number) {
            
            if(currentTime.current === null) {
                currentTime.current = now;
            }
            const elapsedTime = now - currentTime.current;
            const progress = Math.min(elapsedTime/duration, 1);
            const easedValue = 1 - Math.pow(1 - progress ,3);
            setValue(easedValue * target);
            if(progress < 1) {
                frameId.current  = requestAnimationFrame(animator);
            }
        }
        frameId.current  = requestAnimationFrame(animator);
            return () => {
                if(frameId.current !== null){
                    cancelAnimationFrame(frameId.current)
                }
            }
    }, [duration, target]);
    return value
}