class groupeComponent{
    constructor(id){
        this.groupe = db.getGroupe(id);
        console.log(this.groupe);
    }
    template(){
        $("#centralApp").load("src/groupe/groupe.html");
    }
    getName(){
        return this.groupe.name;
    }
    getImg(){
        return this.groupe.img;
    }
    getGroupe(){
        return "<div class='mediatekBlock'><p>" + this.getName() + "</p><p>" + this.getImg() + "</p></div>";
    }
}