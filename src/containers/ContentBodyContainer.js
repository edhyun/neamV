import { connect } from 'react-redux'
import ContentBody from '../components/ContentBody'
import {itemActions} from '../actions'

const mapStateToProps = (state) => {
    return {
        items: state.items,
        userId: state.auth.authenticated ? state.auth.id : null,
        likedArticles: state.profile.length > 0 ? state.profile[0].likedArticles : [],        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {
            dispatch(itemActions.deleteItem(id))
        },
        likeArticle: (userId, itemId) => {
            dispatch(itemActions.likeArticle(userId, itemId))
        },
        unlikeArticle: (userId, itemId) => {
            dispatch(itemActions.unlikeArticle(userId, itemId))
        }
    }
}

const ContentBodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentBody)

export default ContentBodyContainer
