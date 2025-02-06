import { useEffect, useState } from "react"

const useHandleBackground = (quoteType) => {

    const [ className, setClassName ] = useState('one')

    useEffect(() => {
    if (!quoteType) return 

    let isMounted = true

        const handleBackground = () => {
        let newClassName = ''

            if (quoteType === 'inspire') {
            const rNum = Math.floor(Math.random() * (4 - 1) + 1) 
            newClassName = `main ${["four", "five", "six"][rNum]}`
            }

            if (quoteType === 'joke') {
            const rNum = Math.floor(Math.random() * (3 - 1) + 1)
            newClassName = `main ${["seven", "eight"][rNum]}`
            }
            
            if (quoteType === 'random') {
            const rNum = Math.floor(Math.random() * (7 - 1) + 1) 
            newClassName = `main ${["one", "two", "three", "four", "five", "six"][rNum]}`
    }
    setClassName(newClassName)}
    handleBackground()

    return () => {isMounted = false}

}, [quoteType])

return className
}

export default useHandleBackground
