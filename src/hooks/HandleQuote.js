import { useState, useEffect} from "react"

const useHandleQuote = (data, quoteType) => {
    const [ quote, setQuote ] = useState("")
    const [ author, setAuthor ] = useState("")

    useEffect(() => {
        if (!data || !quoteType) return

        const handleQuote = () => {
            if (quoteType === 'inspire' && data.quote) {
                setQuote(data.quote)
                setAuthor(data.author)
            }
            if (quoteType === 'joke' && data.data) {
                setQuote(data.data)
                setAuthor('Jokes Always')
  
            }
            if (quoteType === "random" && Array.isArray(data) && data.length > 0) {
                setQuote(data[0].text)
                setAuthor(data[0].author)
            }}
        handleQuote() 
        }, [data, quoteType])

            return {quote , author}}


export default useHandleQuote