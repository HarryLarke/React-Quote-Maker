import useFetchData from "./hooks/FetchData"
import useHandleBackground from "./hooks/HandleBackground"
import useHandleQuoteStyle from "./hooks/HandleQuoteStyle"


import Quote from "./Quote"
import Button from "./Button"
import Missing from "./Missing"

const QuotePage = ({selectQuote}) => {

    const { data, quoteType, isLoading, fetchError } = useFetchData(selectQuote) 

    const className  = useHandleBackground(quoteType)
    const quoteStyle = useHandleQuoteStyle(quoteType)


const HandleQuote = (data, quoteType) => {

    if (quoteType === 'inspire' && data.quote) {
        const quote = data.quote
        return quote
    }
    if (quoteType === 'joke' && data.data) {
        const quote = data.data
        return quote
    }
    if (quoteType === "random" && Array.isArray(data) && data.length > 0) {
        const quote = data[0].text
        return quote 
    }}

const HandleAuthor = (data, quoteType) => {
    if (quoteType === 'inspire' && data.quote) {
        const author = data.author 
        return author}

    if  (quoteType === 'joke' && data.data) {
        const author = 'Jokes Always'
        return author}

    if (quoteType === "random" && Array.isArray(data) && data.length > 0) {
        const author = data[0].author
        return author
        }}
    

    //Will probably put this into a Feed component - and have the error catches here! 

    return(
        <main>
            {isLoading && <p
            className="status-message">
                Loading Posts...</p>}

            {!isLoading && fetchError && <p
            className="status-message"
            style={{color:'red'}}
            >{fetchError}
            <Button
            classString={'button inspire'}
            name={'Home'} id={'/'}/>
            </p>}

       

            {!isLoading && !fetchError && <Quote
            quote={HandleQuote(data, quoteType)}
            author={HandleAuthor(data, quoteType)}
            className={className}
            quoteStyle={quoteStyle}
            quoteType={quoteType}

            />}

            {!isLoading && !fetchError && !data && <Missing/>}

        </main>
    )
}
//Will need a missing page! 

export default QuotePage