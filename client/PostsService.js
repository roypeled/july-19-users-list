
class PostsService{

    constructor() {
        this.url = "/api/posts/?userId=";
    }

    async getPosts(userId){
        const response = await fetch(this.url + userId);
        return await response.json();
    }

}

module.exports = new PostsService();
