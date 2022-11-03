const initState = {
    value: false
};
  
function rootReducer (state = initState, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, value: action.value };
        case "LOGOUT":
            return { ...state, value: action.value };
        default:
            return state;
    }
};

export default rootReducer;