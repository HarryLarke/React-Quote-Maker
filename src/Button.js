import { useNavigate } from "react-router-dom"

const Button = ({name, classString, setSelectedQuote, selectQuote}) => {
    return (
        <button
        className={classString}
        onClick={() => setSelectedQuote(selectQuote = name)}
        >{name}</button> )
}

export default Button