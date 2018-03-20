class ficheComponent{
    constructor(fic_id){
        var fic = db.getFiche(fic_id);
        this.ficTitle = fic.fic_title;
        this.ficUrl = fic.fic_url;
        this.ficMediatek = fic.mediatek_id;
    }
    template(){
        $("#centralApp").load("src/fiche/fiche.html");
    }
    getTitle(){
        return this.ficTitle;
    }
}