import {Containerbutton} from "./Styled"

import { Link } from "react-router-dom"

export function Button ({label, children, className, aref}){
    return(

            <Containerbutton onClick={() => window.open(aref, '_blank')} className={className}id={label}><h2>{label}</h2>{children} 
            </Containerbutton>

        
    )
}