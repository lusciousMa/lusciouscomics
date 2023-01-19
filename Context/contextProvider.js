import React, { useContext, useState } from 'react';
import imagesArr from '../files';

const Context = React.createContext();

export function ContextFunction() {
    return useContext(Context)
}

export function InputProvider({ children }) {
    const [allImages, setAllImages] = useState(imagesArr);

    let obj = {
        allImages,
        setAllImages
    }

    return (
        <Context.Provider value={obj}>
            {children}
        </Context.Provider>
    )
}