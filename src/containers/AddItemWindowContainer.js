import { connect } from 'react-redux'
import { itemActions, crawlerActions, navUIActions } from '../actions'
import AddItemWindow from '../components/AddItemWindow'

const mapStateToProps = (state, ownProps) => {
    return {
        addItemWindow: state.navUI.addItemWindow
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItemWindowClose: () => {
            dispatch(navUIActions.addItemWindowClose())
        },
        saveItem: (value) => {
            dispatch(itemActions.createItem(value))
            dispatch(crawlerActions.crawlerStart())
        }
    }
}

const AddItemWindowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemWindow)

export default AddItemWindowContainer
