module.exports = {

    posts: [
        /*{
            id: "TesteID",
            title: "TesteTitle",
            description: "TesteDescrição"
        },*/
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id:generationID(), title, description});
    },

    deletarPost(id){
        
    }
}

function generationID(){
    return Math.random().toString(36).substr(2, 9);
}