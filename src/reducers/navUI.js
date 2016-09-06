const navUI = (state = { addItemWindow: false }, action) => {
    //console.log(action)
    switch (action.type){
        case "ADD_ITEM_WINDOW_OPEN":
            return {
                addItemWindow: true
            }
        case "ADD_ITEM_WINDOW_CLOSE":
            return {
                addItemWindow: false
            }
        default:
            return state
    }
}

export default navUI
