import useFetchData from "./hooks/FetchData"
import useHandleBackground from "./hooks/HandleBackground"
import useHandleQuoteStyle from "./hooks/HandleQuoteStyle"
import useHandleQuote from "./hooks/HandleQuote"

import Quote from "./Quote"
import Button from "./Button"
import Missing from "./Missing"

const QuotePage = ({selectQuote, setSelectQuote}) => {

    const { data, quoteType, isLoading, fetchError } = useFetchData(selectQuote) 
    const { quote, author } = useHandleQuote(data, quoteType)
    const className  = useHandleBackground(quoteType)
    const quoteStyle = useHandleQuoteStyle(quoteType)

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
            quote={quote}
            author={author}
            className={className}
            quoteStyle={quoteStyle}
            setSelectQuote={setSelectQuote}
            quoteType={quoteType}
            />}

            {!isLoading && !fetchError && !data && <Missing/>}

        </main>
    )
}

export default QuotePage