'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export default function useIntersectionObserver(): {observer: (id: string) => (el: HTMLElement | null) => void, visible: Set<string>} {
    const Items = useRef<Map<string, HTMLElement>>(new Map());
    const [visible, setVisible] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            setVisible((prev) => {
                const next = new Set(prev);
                entries.forEach((entry) => {
                    const key = [...Items.current].find(([_, el]) => el === entry.target)?.[0];

                    if(!key) return;
                    if(entry.isIntersecting){
                        next.add(key);
                    } else{
                        next.delete(key);
                    }
                });
                return next;
            });
        });

        Items.current.forEach((el) => {
            observerRef.current?.observe(el);
        });

        return () => {observerRef.current?.disconnect();}
    },[]);

    const observer = useCallback((id: string) => ((element:HTMLElement | null) => {
            if(id) {
                if(element !== null){Items.current.set(id, element);}
            }
    }), [])
    return {observer, visible}
}

// import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// export interface UseIntersectionObserverOptions {
//   root?: Element | Document | null;
//   rootMargin?: string;
//   threshold?: number | number[];
//   once?: boolean;
//   onChange?: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void;
// }

// export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
//   options: UseIntersectionObserverOptions = {}
// ) {
//   const { root = null, rootMargin = '0px', threshold = 0, once = false, onChange } = options;

//   const [node, setNode] = useState<T | null>(null);
//   const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   // Callback ref: keeps working even if the element mounts/unmounts conditionally
//   const ref = useCallback((el: T | null) => setNode(el), []);

//   // Always-latest onChange without re-creating the observer
//   const onChangeRef = useRef(onChange);
//   onChangeRef.current = onChange;

//   // Stable dep so inline threshold arrays like [0, 0.5, 1] don't recreate the observer
//   const thresholdKey = useMemo(() => JSON.stringify(threshold), [threshold]);

//   const frozen = once && isIntersecting;

//   useEffect(() => {
//     // Effects don't run on the server; the check also covers old browsers
//     if (!node || frozen || typeof IntersectionObserver === 'undefined') return;

//     const observer = new IntersectionObserver(
//       ([observedEntry]) => {
//         setEntry(observedEntry);
//         setIsIntersecting(observedEntry.isIntersecting);
//         onChangeRef.current?.(observedEntry.isIntersecting, observedEntry);
//       },
//       { root, rootMargin, threshold: JSON.parse(thresholdKey) }
//     );

//     observer.observe(node);
//     return () => observer.disconnect(); // cleanup on unmount / dep change
//   }, [node, root, rootMargin, thresholdKey, frozen]);

//   return { ref, isIntersecting, entry };
// }