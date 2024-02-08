// LogicContext.js
import { createContext, useReducer, useEffect } from "react";
import { INITIAL_STATE, logicReducer } from "./logicReducer";

const LogicContext = createContext();

export function LogicProvider({ children }) {
    const [state, dispatch] = useReducer(logicReducer, INITIAL_STATE);

    useEffect(() => {
        if (state.thankYouModalOpen === false) {
            window.scrollTo(0, 0);
        }
    }, [state.thankYouModalOpen]);

    function openModal() {
        dispatch({ type: "OPEN_MODAL" });
    }

    function closeModal() {
        dispatch({ type: "CLOSE_MODAL" });
    }

    function toggleThankYouModal() {
        dispatch({ type: "TOOGLE_THANK_YOU_MODAL" });
    }

    function handleRewardBtn_Click(title) {
        dispatch({ type: "SET_CHECKED_ITEM", payload: title });
        openModal();
    }

    function checkSelectedItem(title) {
        return state.checkedItem === title;
    }

    function handleInputChange(e) {
        dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
    }

    function handleSubmit() {
        if (state.inputValue !== "") {
            dispatch({ type: "IS_LOADING", payload: true })
            setTimeout(() => {
                switch (state.checkedItem) {
                    case "Pledge with no reward":
                        dispatch({ type: "SET_BAKERS", payload: 1 });
                        closeModal();
                        toggleThankYouModal(true);
                        break;
                    case "Bamboo Stand":
                        if (parseInt(state.inputValue) < 25) {
                            dispatch({ type: "SET_ERRORS", payload: { "Bamboo Stand": true } });
                        }
                        else {
                            dispatch({ type: "SET_ERRORS", payload: { "Bamboo Stand": false } });
                            dispatch({ type: "SET_BAKERS", payload: 1 });
                            dispatch({ type: "SET_PLEDGE_AMOUNT", payload: parseInt(state.inputValue) })
                            dispatch({ type: "SET_LEFT_PLEDGES", payload: { title: "Bamboo Stand" } });
                            closeModal();
                            toggleThankYouModal(true);
                        }
                        break;
                    case "Black Edition Stand":
                        if (parseInt(state.inputValue) < 75) {
                            dispatch({ type: "SET_ERRORS", payload: { "Black Edition Stand": true } });
                        }
                        else {
                            dispatch({ type: "SET_ERRORS", payload: { "Black Edition Stand": false } });
                            dispatch({ type: "SET_BAKERS", payload: 1 });
                            dispatch({ type: "SET_PLEDGE_AMOUNT", payload: parseInt(state.inputValue) })
                            dispatch({ type: "SET_LEFT_PLEDGES", payload: { title: "Black Edition Stand" } });
                            closeModal();
                            toggleThankYouModal(true);
                        }
                        break;
                    case "Mahogany Special Edition":
                        if (parseInt(state.inputValue) < 200) {
                            dispatch({ type: "SET_ERRORS", payload: { "Mahogany Special Edition": true } });
                        }
                        else {
                            dispatch({ type: "SET_ERRORS", payload: { "Mahogany Special Edition": false } });
                            dispatch({ type: "SET_BAKERS", payload: 1 });
                            dispatch({ type: "SET_PLEDGE_AMOUNT", payload: parseInt(state.inputValue) })
                            dispatch({ type: "SET_LEFT_PLEDGES", payload: { title: "Mahogany Special Edition" } });
                            closeModal();
                            toggleThankYouModal(true);
                        }
                        break;
                    default:
                        break;
                }
                dispatch({ type: "IS_LOADING", payload: false })
            }, 2000)
            dispatch({ type: "SET_INPUT_VALUE", payload: 1 });
        }
    }

    return (
        <LogicContext.Provider
            value={{
                openModal,
                closeModal,
                toggleThankYouModal,
                handleRewardBtn_Click,
                checkSelectedItem,
                handleInputChange,
                handleSubmit,
                ...state,
            }}
        >
            {children}
        </LogicContext.Provider>
    );
}

export default LogicContext;