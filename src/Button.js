import { Link } from "react-router-dom"


const Button = ({name, classString, setSelectQuote, id}) => {
    return (
       
        <Link
        to={id}
        className={classString}
        onClick={() => setSelectQuote(name)}
        >{name}</Link> 
    )
}

export default Button