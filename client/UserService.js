
class UserService{

    constructor() {
        this.url = "http://localhost:9090/users/";
    }

    async getAllUsers(){
        const response = await fetch(this.url);
        return await response.json();
    }

    async getUser(id){
        const response = await fetch(this.url+id);
        return await response.json();
    }

}

export default new UserService();
