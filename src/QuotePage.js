import useFetchData from "./hooks/FetchData"
import Quote from "./Quote"

import Button from "./Button"
import Missing from "./Missing"

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
            >{fetchError}
            <Button
            classString={'button inspire'}
            name={'Home'} id={'/'}/>
            </p>}

       

            {!isLoading && !fetchError && <Quote
            data={data}
            selectQuote={selectQuote}
            />}

            {!isLoading && !fetchError && !data && <Missing/>}

        </main>
    )
}
//Will need a missing page! 

export default QuotePage