import { connect } from 'react-redux'
import { crawlerActions } from '../actions'
import UserInputForm from '../components/UserInputForm'


const mapStateToProps = (state, ownProps) => {
    return {
        tempStoredItem: state.crawler.temp,
        currentUser: {
            id: state.profile[0].id,
            name: state.profile[0].name,
            photoURL: state.profile[0].photoURL
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: (crawledItem, author, userInput) => {            
            dispatch(crawlerActions.saveItem(crawledItem, author, userInput))
            //dispatch(itemActions.createItem(value))
            //dispatch(crawlerActions.crawlerStart())
        }
    }
}

const SaveItemButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInputForm)

export default SaveItemButtonContainer
