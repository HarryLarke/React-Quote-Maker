import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";


const useFetchData = () => {
    const APIKey = process.env.REACT_APP_API_KEY
    const { selectedQuote } = useParams()
    
    const URL = 'https://famous-quotes4.p.rapidapi.com/random'
    const host = 'famous-quotes4.p.rapidapi.com'

    const [ data , setData ] = useState('')
    const [ isLoading, setIsLoading] = useState(true)
    const [ error, setError ] = useState('') 
    
//Some destructuring and simplifying is required! I would have a fecth for each API, and then call acording  with a different  hook maybe - with an orgnising function in the APP file for which one to call! 

    useEffect(() => {
        const fetchPosts = async() => {

            const options = {
                method: 'GET',
                url: URL,
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
                  setError(error)
              } finally { setIsLoading(false) }
        } 
       fetchPosts()
    }, [selectedQuote])

return { data, isLoading, error }
}

export default useFetchData
