import { useEffect, useState } from "react"

const useHandleBackground = (quoteType) => {

    const [ className, setClassName ] = useState('main one')

    useEffect(() => {
    if (!quoteType) return 

        const handleBackground = () => {
        let newClassName = ''

            if (quoteType === 'inspire') {
            const backgroundOptions = ["four", "five", "six"];
            const rNum = Math.floor(Math.random() * backgroundOptions.length); 
            newClassName = `main ${backgroundOptions[rNum]}`;
            }

            if (quoteType === 'joke') {
            const backgroundOptions = ["seven", "eight"];
            const rNum = Math.floor(Math.random() * backgroundOptions.length); 
            newClassName = `main ${backgroundOptions[rNum]}`
            }
            
            if (quoteType === 'random') {
            const backgroundOptions = ["one", "two", "three", "four", "five", "six"];
            const rNum = Math.floor(Math.random() * backgroundOptions.length); 
            newClassName = `main ${backgroundOptions[rNum]}`;
            }
    setClassName(newClassName)}
    handleBackground()

}, [quoteType])

return className
}

export default useHandleBackground
