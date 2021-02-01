import firebase from '../fb'

export function getSongs () {
    return (dispatch) => {
        firebase.database().ref('/spotifySongs').on('value', snapshot => {
                dispatch({
                    type: "SONGS_FETCH", 
                    payload:snapshot.val()
                })
        })
    }
}

export function postSong(
    groupName, 
    albums, 
    popularSongs,
    lastRelizes) {
    return (dispatch) => {
        firebase.database().ref('/spotifySongs').push({
            groupName, 
            albums, 
            popularSongs,
            lastRelizes})
    }
}

export function deleteSong (key) {
    return (dispatch) => {
        firebase.database().ref(`/spotifySongs/${key}`).remove()
    }
}

export function editSong (key, groupName, albums, popularSongs, lastRelizes) {
    return (dispatch) => {
        firebase.database().ref(`/spotifySongs`).child(key).update({groupName, albums, popularSongs, lastRelizes})
    }
}

