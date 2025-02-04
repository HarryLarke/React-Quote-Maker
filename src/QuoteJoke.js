import useFetchData from "./hooks/FetchData"
import { useEffect, useState } from "react"

const Quote = ({selectedQuote}) => {

    const [inspire, setInspire ] = useState(false)
    const [joke, setJoke ] = useState(false)
    const [random, setRandom ] = useState(false)

    useEffect(() => {
        if (selectedQuote === 'inspire') { setInspire(true) }
        if (selectedQuote === 'joke') { setJoke(true) }
        if (selectedQuote === 'randon') { setRandom(true) }
    }, [selectedQuote])

    const { data, isLoading, FetchData } = useFetchData() 

    return(
        <main>
            <p>{data}</p>
            <p>Here is some text!</p>
        </main>
    )
}

export default Quote