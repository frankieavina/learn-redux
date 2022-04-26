// A reducer the is initalized to false so no the user is not signed in.
// If the action is Sign in it will be the opposite of state which will 
// return true. 
const loggedReducer = (state=false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state; 
        default:
            return state; 
    }
}

export default loggedReducer; 