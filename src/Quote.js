import useHandleBackground from "./hooks/HandleBackground"
import useHandleQuoteStyle from "./hooks/HandleQuoteStyle"
import Button from "./Button"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const Quote = ({data, selectQuote}) => {

    const quoteType = selectQuote

    const className  = useHandleBackground(quoteType)
    const quoteStyle = useHandleQuoteStyle(quoteType)
    console.log(quoteStyle)
    console.log(className)

    

        //ALl above to become hooks!

        const handleQuote = () => {
        if (selectQuote === 'inspire') {
            const { text } = data 
            return text
        }
        if (selectQuote === 'joke') {
            const { joke } = data
            return joke
        }
        if (selectQuote === 'random') {
            const { text } = data[0]
            return text
        }//Maybe do these within the return section?

        }

        const handleAuthor = () => {
        if (selectQuote === 'inspire') {
            const { author } = data
            return author
        }
        if (selectQuote === 'joke') {
            const { source } = data
            return source
        }
        if (selectQuote === 'random') {
            const { author } = data[0]
            return author
        }
        }

    //Make both background and fontFamily hooks don't like to run at the same time??? Combine them?
    //Could I turn this into a hook? Or the random number generator into one? 
    //need to set a default or remember previous value chosen?? SO when reload occurs it keeps the original quote brings a new one! --Could save to local storage?

    return(
        <main
        className={className}>
            <section
                className="quote-container">
                <h1
                className="main-quote"
                style={quoteStyle}
                >{handleQuote()}
                </h1>
                <h2
                className="author"
                style={quoteStyle}
                >{handleAuthor()}</h2>
            </section>

            <section
            className="subtitle-container">
                <Link
                className="button inspire"
                to={'/'}
                >Home</Link>
                <Button
                classString={'button inspire'}
                name={'New Quote'}
                id={'/quote'}
                setSelectQuote={selectQuote}/>
            </section>
        </main>
    )
}
//Yet to find an appropriate way to reload to the page!

export default Quote