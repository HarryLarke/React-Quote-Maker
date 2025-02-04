import Button from "./Button"

const Home = ({setSelectQuote}) => {

    const handleBackground = () => {
        const rNum = Math.floor(Math.random() * (4 - 1) + 1) 
        if (rNum === 1) {
            const className = "main one"
            return className
        }
        if (rNum === 2) {
            const className = "main two"
            return className}
        if (rNum === 3) {
            const className = "main three"
            return className
        }}
     
//Generate seperate components?? They are not doing too much!
    return  (
        <main
        className={handleBackground()}
        >
            <section
                className="container">
                <h1
                className="title-main"
                >Quoter Maker!
                </h1>
            </section>

            <section 
            className="subtitle-container">
                <h2
                className="subtitle"
                >Choose a quote to generate:</h2>
            </section>

            <div
            className="button-holder">
                <Button
                classString={'button inspire'}
                name={'inspire'}
                setSelectQuote={setSelectQuote}
                />
                <Button
                classString={'button joke'}
                name={'joke'}
                setSelectQuote={setSelectQuote}
                />
                <Button
                classString={'button inspire'}
                name={'random'}
                setSelectQuote={setSelectQuote}
                />

            </div>

        </main>
    )
    }
//Will need to the above into proper strings!!!
export default Home 