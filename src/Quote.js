

const Quote = ({data, selectQuote}) => {

    const handleQuoteStyle = () => {
        if (selectQuote === 'joke') {
            const fontFamily = "var(--TERTIARY-FONT)"
            return fontFamily }
        
        if (selectQuote === 'random') {
            const rNum = Math.floor(Math.random() * (4 - 1) + 1) 
            if (rNum === 1) {
            const fontFamily = "var(--TERTIARY-FONT)"
            return fontFamily
            }

            if (rNum === 2) {
            const fontFamily = "var(--SECONDARY-FONT)"
            return fontFamily
            }
     
            if (rNum === 3) {
            const fontFamily = "var(--TERTIARY-FONT)"
            return fontFamily

            }
        }}

        const handleQuote = () => {
        if (selectQuote === 'inspire') {
            const { text } = data 
            return text
        }
        if (selectQuote === 'joke') {
            const {joke } = data
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

    //Maybe do a varying style functions, where the style of the quote is change according to the type of quote chosen! 
    //Could I turn this into a hook? Or the random number generator into one? 
    //need to set a default or remember previous value chosen?? SO when reload occurs it keeps the original quote brings a new one! --Could save to local storage?
    //
    //variable destructuring here! Mabye put the same definition on the page , but have a different process of destructuring when item move onto the page?
    return(
        <main
        className="main">
            <section
                className="quote-container">
                <h1
                className="main-quote"
                style={{fontFamily:handleQuoteStyle()}}
                >{handleQuote()}
                </h1>
                <h2
                className="author"
                style={{fontFamily:handleQuoteStyle()}}
                >{handleAuthor()}</h2>
            </section>
        </main>
    )
}

export default Quote