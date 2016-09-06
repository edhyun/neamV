export default socket => store => next => action => {
    console.log('in middleware', typeof action, action)
    switch(action.type){
        case "CRAWLER_START":
            socket.emit('CRAWLER_START', action)
            return next(action)
        default:
            return next(action)
    }
}
