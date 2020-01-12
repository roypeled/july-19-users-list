
class PostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts/?userId=";
    }

    async getPosts(userId){
        const response = await fetch(this.url + userId);
        return await response.json();
    }

}

module.exports = new PostsService();
