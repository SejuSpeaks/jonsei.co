import React, { useEffect, useRef, useState } from 'react';
import Webamp from 'webamp';

const WebAmp = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const appRef = useRef();
    const webampRef = useRef();


    const app = appRef.current;
    const webamp = new Webamp();
    webampRef.current = webamp;

    webamp.renderWhenReady(app)
        .then(() => setIsLoaded(true))


    return (
        <div>
            {isLoaded && (
                <>
                    <div className='absolute left-[50%] top-[70%]' ref={appRef}></div>
                </>
            )}

        </div>

    );
};

export default WebAmp;

