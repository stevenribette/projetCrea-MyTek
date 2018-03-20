class loginService{
    inscription(user, pwd, share){
        var usId = db.addUser(user, pwd, share);
        stor.setItem("user",JSON.stringify([usId,user,pwd]));
        this.connexion(user,pwd);
    }
    connexion(user,pwd){
        var userId = db.checkUser(user, pwd);
        if(userId != false){
            toggleDisplay("navbar-menu");
            stor.setItem("user",JSON.stringify([userId,user,pwd]));
            mediatekComponent.template();
        }
    }
    retrieveUser(){
        if(stor.getItem("user")){
            var userData = stor.getItem("user");
            this.connexion(userData[1], userData[2])
        }else{
            loginComponent.connexionTemplate();
        }
    }
    disconnexion(){
        stor.removeItem("user");
        return true;
    }
}