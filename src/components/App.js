import React from 'react'
import './App.css';
import NavContainer from '../containers/NavContainer'
import ProfileContainer from '../containers/ProfileContainer'
import Main from './Main'

const App = () => (
    <div>
        <NavContainer />
        <ProfileContainer />
        <Main />
    </div>
)

export default App;
