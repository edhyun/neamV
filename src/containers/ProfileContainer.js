import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state) => {
    return state.auth.authenticated && state.profile.length > 0 ?
        {
            userName: state.auth.userName,
            userImage: state.auth.userImage,
            likedArticles: state.profile[0].likedArticles
        }
        :{
            userName: "not login",
            userImage: "",
            likedArticles: []
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
