'use client'

import { useState, useEffect } from 'react';

function getWindowDimensions(): {
    width: number;
    height: number;
} {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    return {
        width: 0,
        height: 0
    }

}

export default function useWindowDimensions(): {
    width: number;
    height: number;
} {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}