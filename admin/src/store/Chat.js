
const INITIAL_STATE = {
    chatId: "null",
    user: {},
};

export const chatReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            return {
                ...state,
                user: action.user,
                chatId: action.chatId
            };

        default:
            return state;
    }
};