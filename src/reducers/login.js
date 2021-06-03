const initialState = {
    isLogin: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL': {
            // const newStatus = { ...state }
            // newStatus.isLogin = true
            // console.log(newStatus)

            const newStatus = true
            return {
                isLogin: newStatus
            }
        }

        case 'LOGIN_FAIL': {
            state.isLogin(false)
            return state
        }

        default:
            return state;
    }
}

export default loginReducer;