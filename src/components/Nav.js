import React from 'react'
import AddItemWindowOpenButtonContainer from '../containers/AddItemWindowOpenButtonContainer'
import AddItemWindowContainer from '../containers/AddItemWindowContainer'
import SignInMenuContainer from '../containers/SignInMenuContainer'

const Nav = ({authenticated}) => (
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
                <div className="pull-right nav-user-icon">
                    <SignInMenuContainer />
                </div>
                <form className="navbar-form navbar-right">
                    { authenticated ?
                        <div>
                            <AddItemWindowOpenButtonContainer>Add Item</AddItemWindowOpenButtonContainer>
                            <AddItemWindowContainer/>
                        </div>
                        : null
                    }
                </form>
            </div>
        </div>
    </nav>
)

export default Nav
