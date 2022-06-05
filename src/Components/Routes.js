import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MealRandom from './Pages/MealRandom';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/random" component={MealRandom}></Route>
        </Switch>
    )
}

export default Routes;