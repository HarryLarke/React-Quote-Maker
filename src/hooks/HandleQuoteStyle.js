import { useState, useEffect } from "react"


const useHandleQuoteStyle = (quoteType) => {
    console.log(quoteType)

    const [ quoteStyle, setQuoteStyle ] = useState({fontFamily: "'Cookie', serif"})

    useEffect(() => {
        if (!quoteType) return 

        const handleQuoteStyle = () => {

        let fontFamily = "'Cookie', serif"
        if (quoteType === 'joke') {
            fontFamily = "'Freckle Face', static"}
        
        if (quoteType === 'random') {
            const rNum = Math.floor(Math.random() * (4 - 1) + 1) 
            fontFamily = ["'Silkscreen', static", "'Freckle Face', static", "'Rye', static"][rNum]}

        setQuoteStyle({fontFamily})}

        handleQuoteStyle() 

    }, [quoteType])

    return quoteStyle
}

export default useHandleQuoteStyle