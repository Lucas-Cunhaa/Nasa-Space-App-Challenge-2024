import { Link } from "react-router-dom" 
import React from 'react'

const NavBar= ( { children, link }    ) => {
    return (
        <nav>
            <Link to={link}>{children}</Link>
        </nav>
    )
}
export default NavBar