import { useState, createContext } from 'react';

const loadingContext = createContext()

function LoadingProvider ({ children }) {
	const [loading, setLoading] = useState(false)

    const value = {
        loading,
        setLoading
    }

    return (
        <loadingContext.Provider value={ value }>
            { children }
        </loadingContext.Provider>
    )
}

export { loadingContext, LoadingProvider }