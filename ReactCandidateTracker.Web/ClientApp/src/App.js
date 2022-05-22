import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./components/Layout";
import { StatusContextComponent } from './StatusComponent';
import AddCandidate from "./AddCandidate";
import Pending from "./components/Pending";
import Confirmed from "./components/Confirmed";
import Rejected from "./components/Rejected";
import Details from "./components/Details";



const App = () => {
    return (
        <StatusContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addcandidate' component={AddCandidate}/>
                <Route exact path='/pending' component={Pending}/>
                <Route exact path='/confirmed' component={Confirmed}/>
                <Route exact path='/rejected' component={Rejected}/>
                <Route exact path='/details/:id' component={Details}/>

            </Layout>
        </StatusContextComponent>
    )
}
export default App;