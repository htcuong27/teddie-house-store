'use client'

import React, { useEffect } from 'react';

const ScrollFix = () => {

    useEffect(() => {
        const body = document.body;
        body.addEventListener('touchstart', function (event) {
            const startY = event.touches[0].pageY;
            const startTopScroll = body.scrollTop;
    
            if (startTopScroll <= 0) {
                event.preventDefault();
                body.scrollTop = 1;
            }
        }, false);
    }, [])

    return null;
};

export default ScrollFix;