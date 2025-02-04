import axios from "axios";
import { useEffect, useState, useMemo } from "react";


const useFetchData = (selectQuote) => {
    console.log(selectQuote)

    const APIKey = process.env.REACT_APP_API_KEY
    const URLS = useMemo(() => ({
    inspire:{ url: 'https://quotes114.p.rapidapi.com/random', host: 'quotes114.p.rapidapi.com'},
    joke:{ url:'https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day', host:'dad-jokes7.p.rapidapi.com'},
    random:{ url:'https://famous-quotes4.p.rapidapi.com/random', host:'famous-quotes4.p.rapidapi.com'}
}), [])

    const [ data , setData ] = useState('')
    const [ isLoading, setIsLoading] = useState(true)
    const [ fetchError, setFetchError ] = useState('') 
    
//Some destructuring and simplifying is required! I would have a fecth for each API, and then call acording  with a different  hook maybe - with an orgnising function in the APP file for which one to call! 

    useEffect(() => {

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
                  console.log(response.data);
                  setData(response.data)
              } catch (error) {
                  setFetchError(error)
              } finally { setIsLoading(false) }
        } 
        fetchPosts()
    }, [selectQuote, APIKey, URLS])

return { data, isLoading, fetchError }
}

export default useFetchData
