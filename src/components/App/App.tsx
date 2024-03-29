import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Bio from '../Bio/Bio';
import Footer from '../Footer/Footer';
import './App.css';

const App: React.FC = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleDarkTheme = (): void => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className={darkTheme ? 'Dark' : 'Light'}>
            <Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Education" component={Education} />
                <Route exact path="/Experience" component={Experience} />
                <Route exact path="/Bio" component={Bio} />
            </Switch>
            <Footer darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        </div>
    );
};

export default App;
