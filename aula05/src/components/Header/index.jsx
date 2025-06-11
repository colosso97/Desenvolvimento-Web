import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/empresa"}>Empresa</Link>
                        </li>
                        <li>
                            <Link to={"/contato"}>Contato</Link>
                        </li>
                        <li>
                            <Link to={"/noticias"}>Noticias</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
