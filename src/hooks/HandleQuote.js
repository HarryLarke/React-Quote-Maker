
const useHandleQuote = (data, quoteType) => {

            if (quoteType === 'inspire' && data.quote) {
                const quote = data.quote
                const author = data.author
                return {quote , author}
            }
            if (quoteType === 'joke' && data.data) {
                const quote = data.data
                const author = 'Jokes Always'
                return {quote , author}
            }
            if (quoteType === "random" && Array.isArray(data) && data.length > 0) {
                const quote = data[0].text
                const author = data[0].author
                return {quote , author}
            }}

//Where will be the best location to padd in the data?? Maybe put back into the fetch function - it's currently running before the fecth??!

export default useHandleQuote