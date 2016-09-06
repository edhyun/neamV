import { connect } from 'react-redux'
import { crawlerActions } from '../actions'
import UserInputForm from '../components/UserInputForm'


const mapStateToProps = (state, ownProps) => {
    return {
        tempStoredItem: state.crawler.temp
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: (crawledItem, userInput) => {
            dispatch(crawlerActions.saveItem(crawledItem, userInput))
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
