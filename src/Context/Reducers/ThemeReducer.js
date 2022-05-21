const intialState = JSON.parse(localStorage.getItem("changeMyTheme")) || {
    theme: "dracula",
    check:false,
}

const changeTheme = (state = intialState, action) => {
    var newState;
    switch (action.type) {
        case "THEME_CHANGE":
            newState = {
                ...state,
                theme: action.payload === true ? "fantasy" : "dracula",
                check: action.payload,

            };
            localStorage.setItem("changeMyTheme", JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
}

export default changeTheme;