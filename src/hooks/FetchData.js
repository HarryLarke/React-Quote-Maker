import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const FetchData = () => {
    const APIKey = process.env.REACT_APP_API_KEY
    const URLInspire = 'https://famous-quotes4.p.rapidapi.com/random'
    const URLInspireHost = 'famous-quotes4.p.rapidapi.com'
    const URLJokes = 'https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day'
    const URLJokesHost = 'dad-jokes7.p.rapidapi.com'
    const URLQuote = 'https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness'
    const URLQuoteHost = 'the-personal-quotes.p.rapidapi.com'

    const { selectedQuote } = useParams() 
    const [ data , setData ] = useState('')

    useEffect(() => {

    const fetchPostsInspire = async() => {
        const options = {
        method: 'GET',
        url: URLInspire,
        params: {
            category: 'all',
            count: '2'
        },
        headers: {
            'x-rapidapi-key': APIKey,
            'x-rapidapi-host': URLInspireHost
        }
        };
        
        try {
        const response = await axios.request(options);
        setData(response.data)
        } catch (error) {
        console.error(error);
        }
        
        
    } 
    fetchPostsInspire() 
}, [selectedQuote])

return { data }
}

export default FetchData
