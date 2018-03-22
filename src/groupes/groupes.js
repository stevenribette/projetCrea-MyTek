class groupesComponent{
    constructor(){
        this.groupes = db.userGetGroupes(userComponent.getId());
    }
    template(){
        $("#centralApp").load("src/groupes/groupes.html");
        var container = "";
        for(let g of this.groupes){
            var gro = new groupeComponent(g);
            //container += gro.getGroupe();
            console.log(container);
        }
        setTimeout(function(){
            $("#groupes_groupe").replaceWith(container);
        }, 100);
    }
}