const initState = {
    value: false,
    layoutDisplay: '로그인'
};
  
function rootReducer (state = initState, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, value: action.value,layoutDisplay:action.layoutDisplay };
        case "LOGOUT":
            return { ...state, value: action.value,layoutDisplay: action.layoutDisplay };
        default:
            return state;
    }
};

export default rootReducer;