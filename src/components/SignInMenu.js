import React, { Component } from 'react'

class SignInMenu extends Component {
    constructor(props){
        super(props)

        this.state = {
            signInMenuList: false
        }
    }

    render(){
        const { authenticated, userImage, userName, signInWithGoogle, signInWithFacebook, signOut } = this.props
        return (
            <div>
            {
                !authenticated ?
                (
                    <div className="signIn">
                        <a onClick={() => {
                                this.setState({
                                    signinMenuList: !this.state.signinMenuList
                                })
                            }}>SIGN IN</a>
                        <span className="glyphicon glyphicon-menu-down"></span>
                        <ul className={this.state.signinMenuList ? "signin-list" : "signin-list hidden"}>
                            <li><a href="#" onClick={() => { signInWithGoogle() }}>Sign In With Google</a></li>
                            <li><a href="#" onClick={() => { signInWithFacebook() }}>Sign In With Facebook</a></li>
                        </ul>
                    </div>
                )
                :
                (
                    <div>
                        <img src={userImage} alt="Profile" width={"40px"} />
                        {" Hi, " + userName + "  |  "}
                        <span onClick={() => { signOut() }}>SIGN OUT</span>
                    </div>
                )
            }
            </div>
        )
    }
}

export default SignInMenu
