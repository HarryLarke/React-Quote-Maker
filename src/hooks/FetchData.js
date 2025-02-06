import axios from "axios";
import { useEffect, useState, useMemo } from "react";


const useFetchData = (selectQuote) => {

    const APIKey = process.env.REACT_APP_API_KEY

    const URLS = useMemo(() => ({
    inspire:{ url: 'https://demotivational-quotes.p.rapidapi.com/api/quotes/random', host: 'demotivational-quotes.p.rapidapi.com'},
    joke:{ url:'https://jokes-always.p.rapidapi.com/family', host:'jokes-always.p.rapidapi.com'},
    random:{ url:'https://famous-quotes4.p.rapidapi.com/random', host:'famous-quotes4.p.rapidapi.com'}
}), [])

    const [ data , setData ] = useState('')
    const [ quoteType, setQuoteType ] = useState('')
    const [ isLoading, setIsLoading] = useState(true)
    const [ fetchError, setFetchError ] = useState('') 
    
    useEffect(() => {
        if (!selectQuote) return
        let isMounted = true 

        const fetchPosts = async() => {

            const { url, host } = URLS[selectQuote]

            const options = {
               
                method: 'GET',
                url: url,
                headers: {
                  'x-rapidapi-key': APIKey,
                  'x-rapidapi-host': host
                }
              }; 
              try {
                  const response = await axios.request(options);
                  setData(response.data) 
                  setQuoteType(selectQuote)
              } catch (error) {
                  setFetchError(error)
              } finally { setIsLoading(false) }
        } 
        fetchPosts()
        return () => {isMounted = false}
    }, [selectQuote, APIKey, URLS])    


return { quoteType, data, isLoading, fetchError }
}

export default useFetchData
