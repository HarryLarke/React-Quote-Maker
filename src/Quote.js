import useFetchData from "./hooks/FetchData"
import { useEffect, useState } from "react"

const Quote = ({selectedQuote}) => {

    const [inspire, setInspire ] = useState(false)
    const [joke, setJoke ] = useState(false)
    const [random, setRandom ] = useState(false)

    const { data, isLoading, error } = useFetchData() 
    

    return(
        <main>
            <h1>{data[0].text}</h1>
            <h2>{data[0].author}</h2>
        </main>
    )
}

export default Quote