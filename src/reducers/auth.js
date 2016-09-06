const auth = (state = { authenticated: false, id: null }, action) => {
    switch(action.type){
        case "INIT_AUTH":
            if(action.payload){
                return Object.assign({}, {
                    authenticated: !!action.payload,
                    id: action.payload ? action.payload.uid : null,
                    userName: action.payload.displayName,
                    userImage: action.payload.photoURL
                })
            }else{
                return {
                    authenticated: !!action.payload,
                    id: null
                }
            }
        case "SIGN_IN_SUCCESS":
            console.log('sigin in success in reducer', action.payload)
            return Object.assign({}, {
                authenticated: !!action.payload,
                id: action.payload ? action.payload.uid : null,
                userName: action.payload.displayName,
                userImage: action.payload.photoURL
            })
        case "SIGN_OUT_SUCCESS":
            return Object.assign({},{
                authenticated: false,
                id: null
            })
        default:
            return state
    }
}

export default auth
