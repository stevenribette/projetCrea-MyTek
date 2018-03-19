class loginService{
    inscription(user, pwd, share){
        db.addUser(user, pwd, share);
        stor.setItem("user",JSON.stringify([user,pwd]));
        this.connexion(user,pwd);
    }
    connexion(user,pwd){
        var userId = db.checkUser(user, pwd);
        if(userId!=false){
            toggleDisplay("navbar-menu");
            //userComponent.userTemplate();
        }
    }
    retrieveUser(){
        if(stor.getItem("user")!=false){
            var userData = stor.getItem("user");
            this.connexion(userData.user, userData.pwd)
        }else{
            loginComponent.template();
        }
    }
    disconnexion(){
        stor.removeItem("user");
        return true;
    }
}