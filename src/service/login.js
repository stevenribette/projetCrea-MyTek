class loginService{
    inscription(user, password, share){
        db.addUser(user, pwd, share);
        console.log(user, pwd);
        stor.setItem("user",[user,pwd]);
        this.connexion(user,pwd);
    }
    connexion(user,password){
        var userId = db.checkUser(user, pwd);
        if(userId!=false){
            toggleDisplay("navbar-menu");
            userComponent.userTemplate();
        }
    }
    retrieveUser(){
        if(stor.getItem("user")!=false){
            var userData = stor.getItem("user");
            console.log(userData);
            this.connexion(userData.user, userData.pwd)
        }else{
            loginComponent.connexionTemplate();
        }
    }
    disconnexion(){
        stor.removeItem("user");
        return true;
    }
}