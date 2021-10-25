import React from "react";

import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
        <h1>Exibir pagina Home</h1>
        <Link to="/signin">Ir para a pagina Signin</Link>
        </>
    )
}

export default Home