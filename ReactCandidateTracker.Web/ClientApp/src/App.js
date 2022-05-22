import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import { StatusContextComponent } from "./components/StatusComponent";
import AddCandidate from "./Pages/AddCandidate";
import Pending from "./Pages/Pending";
import Confirmed from "./Pages/Confirmed";
import Rejected from "./Pages/Rejected";
import Details from "./Pages/Details";



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