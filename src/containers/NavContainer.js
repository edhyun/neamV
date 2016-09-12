import { connect } from 'react-redux'
import Nav from '../components/Nav'
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

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default NavContainer
