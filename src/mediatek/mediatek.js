class mediatekComponent{
    constructor(med_id){
        this.med = db.getMediatekFiches(med_id);
    }
    template(){
        $("#centralApp").load("src/mediatek/mediatek.html");
        var container = "";
        var sL = "";
        var sR = "";
        for(let e of this.med){
            var fic = new ficheComponent(e);
            container += fic.getTitle();
        }
        setTimeout(function(){
            $("#mediatek_fiches").replaceWith(container);
        }, 100);
    }
}