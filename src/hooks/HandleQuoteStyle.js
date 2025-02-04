import { useState, useEffect } from "react"


const useHandleQuoteStyle = (quoteType) => {
    console.log(quoteType)

    const [ quoteStyle, setQuoteStyle ] = useState({fontFamily: "Arial, sans-serif"})

    useEffect(() => {
        let fontFamily = "Arial, sans-serif"
        if (quoteType === 'joke') {
            fontFamily = "'Freckle Face', static"}
        
        if (quoteType === 'random') {
            const rNum = Math.floor(Math.random() * (4 - 1) + 1) 
            fontFamily = ["'Silkscreen', static", "'Freckle Face', static", "'Rye', static"][rNum]}

        setQuoteStyle({fontFamily})

    }, [quoteType])

    return quoteStyle
}

export default useHandleQuoteStyle