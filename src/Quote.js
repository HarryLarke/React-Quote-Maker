import { Link } from "react-router-dom"

const Quote = ({quote, author, className, quoteStyle}) => {

    console.log(quoteStyle)
    console.log(className)
    console.log(quote)
    console.log(author)

    return(
        <main
        className={className}>
            <section
                className="quote-container">
                <h1
                className="main-quote"
                style={quoteStyle}
                >{quote}
                </h1>
                <h2
                className="author"
                style={quoteStyle}
                >{author}</h2>
            </section>

            <section
            className="subtitle-container">
                <Link
                className="button inspire"
                to={'/'}
                >Home</Link>
            </section>
        </main>
    )
}

export default Quote