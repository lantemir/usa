import $api from "../http";

export default class ProfileService {
    static async myProfile(){
        const resp = $api.get('/api/profile/')
        return resp
    }
}