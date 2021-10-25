import react from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../views/Home'
import Signin from '../views/Signin'
import Erro404 from '../views/Erro404'

export default function Routes(){
    return(
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="*" component={Erro404}/>
            </switch>
        </BrowserRouter>
    )
}



