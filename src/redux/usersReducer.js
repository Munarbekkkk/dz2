const initialState = {
    users: [],
    user:null
};

const usersReducer = (state = initialState, action ) => {
    if(action.type === 'FETCH_DATA_SUCCESS'){
        return{
            users: action.payload,
        }
    } else if(action.type === 'FETCH_USER_SUCCESS'){
        return{
            user: action.payload,
        }

    }else{
        return state
    }
};

export default usersReducer;
