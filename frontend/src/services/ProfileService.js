import $api from "../http";

export default class ProfileService {
    static async myProfile(){
        const resp = $api.get('/api/profile/')
        return resp
    }

    static async updateMyProfile(emailChange){
        const resp = $api.put('/api/profile/', {
            emailChange: emailChange
        })
        return resp
    }

    static async uploadPhotoProfile(uploadData){
        const resp = $api.post('/api/profile/', {
            cover: uploadData
        })
    }
}

