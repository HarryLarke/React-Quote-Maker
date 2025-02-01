import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom" 

const Button = ({name, classString, setSelectedQuote, selectQuote}) => {
    const navigate = useNavigate ()
    return (
        <Link
        to="/quote"
        className={classString}
        onClick={() =>setSelectedQuote(selectQuote = name)
        }
        >{name}</Link> )
}

export default Button