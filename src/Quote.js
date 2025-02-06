
import Button from "./Button"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


const Quote = ({quote, author, className, quoteStyle }) => {

   //Might move these functions elsewhere so I don't have to pass them in here? Put on QuotePage! 
    console.log(quoteStyle)
    console.log(className)
    console.log(quote)
    console.log(author)




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
                <Button
                classString={'button inspire'}
                name={'New Quote'}
                id={'/quote'}/>
            </section>
        </main>
    )
}
//Yet to find an appropriate way to reload to the page! Stop quote from loading mutlitple of times? 

export default Quote