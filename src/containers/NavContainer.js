import { connect } from 'react-redux'
import Nav from '../components/Nav'

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default NavContainer
