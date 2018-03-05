class dbService{
    //connexion to database
    getUser(id){
        return postDB("user/Get", { "use_id" : id });
    }
    addUser(user,pwd,share){
        return postDB("user/Add", { "prm_name" : user, "prm_pwd" : pwd, "prm_share" : share });
    }
    removeUser(){
        return postDB("user/Remove", { "use_id" : id });
    }
    checkUser(user,pwd){
        postDB("user/Check", { "prm_user" : user, "prm_pwd" : pwd });
        return true;
    }
}