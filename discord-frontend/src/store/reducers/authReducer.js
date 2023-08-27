const initState = {
    userDetails: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "DUMMY":
            
            return {
                // returns the previous state
                ...state
            };
    
        default:
            return state;
    }
}

export default reducer;