const shelfItems = (state = [], action) => {
    console.log('in item reducer, action.payload is', action.payload);
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.loginMode
export default shelfItems;