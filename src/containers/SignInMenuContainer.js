import { connect } from 'react-redux'
import SignInMenu from '../components/SignInMenu'
import { authActions } from '../actions'

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        userName: state.auth.userName,
        userImage: state.auth.userImage
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signInWithGoogle: () => {
            dispatch(authActions.signInWithGoogle())
        },
        signInWithFacebook: () => {
            dispatch(authActions.signInWithFacebook())
        },
        signOut: () => {
            dispatch(authActions.signOut())
        }
    }
}

const SignInMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInMenu)

export default SignInMenuContainer
