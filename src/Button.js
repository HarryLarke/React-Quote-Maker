import { Link } from "react-router-dom"


const Button = ({name, classString, setSelectQuote}) => {
    return (
       
        <Link
        to="/quote"
        className={classString}
        onClick={() => setSelectQuote(name)}
        >{name}</Link> 
    )
}

export default Button