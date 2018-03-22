class mediatekComponent{
    constructor(med_id){
        this.med_id = med_id;
        this.med = db.getMediatekFiches(med_id);
    }
    template(){
        $("#centralApp").load("src/mediatek/mediatek.html");
        var container = "";
        for(let e of this.med){
            var fic = new ficheComponent(e);
            container += fic.getFiche();
        }
        setTimeout(function(){
            $("#mediatek_fiches").replaceWith(container);
        }, 100);
    }
    removeFiche(id){
        //this.med
    }
}