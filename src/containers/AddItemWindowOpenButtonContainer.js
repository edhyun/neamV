import { connect } from 'react-redux'
import { navUIActions } from '../actions'
import AddItemWindowOpenButton from '../components/AddItemWindowOpenButton'

const mapStateToProps = (state, ownProps) => {
    return {
        addItemWindow: state.navUI.addItemWindow
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItemWindowOpen: () => {
            dispatch(navUIActions.addItemWindowOpen())
        }
    }
}

const AddItemWindowOpenButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItemWindowOpenButton)

export default AddItemWindowOpenButtonContainer
