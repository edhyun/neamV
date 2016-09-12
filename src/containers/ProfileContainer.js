import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state) => {
    return {
            authenticated: state.auth.authenticated,
            userName: state.auth.userName,
            userImage: state.auth.userImage,
            likedArticles: state.profile.length > 0 ? state.profile[0].likedArticles : []
        }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export default ProfileContainer
