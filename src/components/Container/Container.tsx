import React from 'react';
import './Container.css';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Bio from '../Bio/Bio';

const Container = () => {
    return (
        <div>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/">
                        <Redirect to="/Home" />
                    </Route>
                    <Route exact path="/Education" component={Education} />
                    <Route exact path="/Experience" component={Experience} />
                    <Route exact path="/Bio" component={Bio} />
                </Switch>
            </div>
        </div>
    );
};

export default Container;
