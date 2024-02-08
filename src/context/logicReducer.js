export const INITIAL_STATE = {
    modalIsOpen: false,
    thankYouModalOpen: false,
    checkedItem: "",
    bakers: 5007,
    pledgeAmount: 89914,
    inputValue: 1,
    isLoading: false,
    leftPledges: {
        "Bamboo Stand": 101,
        "Black Edition Stand": 64,
        "Mahogany Special Edition": 0
    },
    errors: {
        "Bamboo Stand": false,
        "Black Edition Stand": false,
        "Mahogany Special Edition": false
    }
}

export function logicReducer(state, action) {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, modalIsOpen: true };
        case "TOOGLE_THANK_YOU_MODAL":
            return { ...state, thankYouModalOpen: !state.thankYouModalOpen };
        case "CLOSE_MODAL":
            return { ...state, modalIsOpen: false };
        case "SET_CHECKED_ITEM":
            return { ...state, checkedItem: action.payload };
        case "SET_BAKERS":
            return { ...state, bakers: state.bakers + action.payload };
        case "SET_PLEDGE_AMOUNT":
            return { ...state, pledgeAmount: state.pledgeAmount + action.payload }
        case "SET_INPUT_VALUE":
            return { ...state, inputValue: action.payload }
        case "IS_LOADING": 
            return { ...state, isLoading: action.payload }
        case "SET_LEFT_PLEDGES":
            return {
                ...state,
                leftPledges: {
                    ...state.leftPledges,
                    [action.payload.title]: state.leftPledges[action.payload.title] - 1
                }
            };
        case "SET_ERRORS":
            return { ...state, errors: { ...state.errors, ...action.payload } };
        default:
            return state;
    }
}