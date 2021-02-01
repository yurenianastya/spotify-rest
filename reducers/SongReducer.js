

export default function(state = {}, action){
    switch(action.type){
        case "SONGS_FETCH":
            return {
                ...state,
                songsList:action.payload
            }
        default:
            return state
    }
}