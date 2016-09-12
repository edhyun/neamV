import React from 'react'
import AddItemWindowOpenButtonContainer from '../containers/AddItemWindowOpenButtonContainer'
import AddItemWindowContainer from '../containers/AddItemWindowContainer'
import SignInMenuContainer from '../containers/SignInMenuContainer'

const Nav = ({ signInWithGoogle, signInWithFacebook, signOut, authenticated, userName, userImage }) => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><strong>neam.io</strong></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form className="navbar-form navbar-left">
                    <AddItemWindowOpenButtonContainer>Add Item</AddItemWindowOpenButtonContainer>
                    <AddItemWindowContainer/>
                </form>
                <div className="pull-right nav-right">
                    <SignInMenuContainer />                    
                </div>
            </div>
        </div>
    </nav>
)

export default Nav
