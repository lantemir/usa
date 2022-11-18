
import ProfileService from "../services/ProfileService";

const GETPROFILE = "GETPROFILE";

let initialState = {
    profile : {}   
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case GETPROFILE: {
            return {...state, profile: action.profile};
        }

        default: return state;
    }
}

export const getProfile = async(dispatch) => {
    try{
        const response = await ProfileService.myProfile()
        console.log("profileReducer")
        console.log(response.data)
        console.log("profileReducer")
        //dispatch(setProfile(response.data))

    } catch(e) {
        console.log(e)
    }
}

export default profileReducer;