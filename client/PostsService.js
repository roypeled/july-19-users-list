
class PostsService{

    constructor() {
        this.url = "http://localhost:9090/posts/?userId=";
    }

    async getPosts(userId){
        const response = await fetch(this.url + userId);
        return await response.json();
    }

}

module.exports = new PostsService();
