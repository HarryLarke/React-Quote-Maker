import useFetchData from "./hooks/FetchData"
import Quote from "./Quote"

const QuotePage = ({selectQuote}) => {

    const { data, isLoading, fetchError } = useFetchData(selectQuote) 
    //Will probably put this into a Feed component - and have the error catches here! 

    return(
        <main>
            {isLoading && <p
            className="status-message">
                Loading Posts...</p>}

            {!isLoading && fetchError && <p
            className="status-message"
            style={{color:'red'}}
            >{fetchError}</p>}

            {!isLoading && !fetchError && <Quote
            data={data}
            selectQuote={selectQuote}
            />}
        </main>
    )
}

export default QuotePage