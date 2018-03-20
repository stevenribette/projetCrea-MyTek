class dbService{
    //connexion to database

    //###############################
    // USER
    //###############################
    getUser(id){
        //postDB("user/Get", { "use_id" : id });
        return { "name" : "A", "img" : '', "share" : false };
    }
    addUser(user,pwd,share){
        return postDB("user/Add", { "prm_name" : user, "prm_pwd" : pwd, "prm_share" : share });
    }
    removeUser(){
        return postDB("user/Remove", { "use_id" : id });
    }
    checkUser(user,pwd){
        postDB("user/Check", { "prm_user" : user, "prm_pwd" : pwd });
        return 1;
    }
    setUserImg(id,img){
        return postDB("user/SetImg", { "use_id" : id, "prm_img" : img });
    }
    setUserName(id, name){
        return postDB("user/SetName", { "use_id" : id, "prm_name" : name });
    }
    setUserShare(id,share){
        return postDB("user/SetShare", { "use_id" : id, "prm_share" : share });
    }

    //###############################
    // FICHE
    //###############################
    getFiche(id){
        //return postDB("fiche/Get", { "fic_id" : id });
        return { "fic_title" : "La truite", "fic_url" : 'http://bloper97.fr', "mediatek_id" : 1 };
    }
    addFiche(titre, url, mediatek){
        return postDB("fiche/Add", { "fic_titre" : titre, "fic_url" : url, "mediatek_id" : mediatek });
    }

    //###############################
    // MEDIATEK
    //###############################
    getMediatek(id){
        //return postDB("mediatek/Get", { "fic_id" : id });
        return 1;
    }
    getMediatekFiches(id){
        //return postDB("mediatek/GetFiche", { "mediatek_id" : id });
        return [1];
    }

    //###############################
    // GROUPE
    //###############################
    getGroupe(id){
        return postDB("groupe/Get", { "gro_id" : id });
    }
    getGroupeUser(id){
        return postDB("groupe/GetUser", { "gro_id" : id });
    }
    setGroupeImg(id,img){
        return postDB("groupe/SetImg", { "gro_id" : id, "prm_img" : img });
    }
    setGroupeName(id, name){
        return postDB("groupe/SetName", { "gro_id" : id, "prm_name" : name });
    }
    setGroupeShare(id,share){
        return postDB("groupe/SetShare", { "gro_id" : id, "prm_share" : share });
    }

    //###############################
    // NOTES
    //###############################
    getNotes(id){
        return postDB("note/Get", { "fic_id" : id });
    }
    addNote(use_id, fic_id, note){
        return postDB("note/Add", { "use_id" : use_id, "fic_id" : fic_id, "prm_note" : note });
    }
    setNote(id, note){
        return postDB("note/Set", { "not_id" : id, "prm_note" : note });
    }

    //###############################
    // AVIS
    //###############################
    getAvis(id){
        return postDB("avis/Get", { "fic_id" : id });
    }
    addAvis(use_id, fic_id, avis){
        return postDB("avis/Add", { "use_id" : use_id, "fic_id" : fic_id, "prm_avis" : avis });
    }
    setAvis(id, avis){
        return postDB("avis/Set", { "avi_id" : id, "prm_avis" : avis });
    }

    //###############################
    // Visionner
    //###############################
    getVisionner(use_id, fic_id){
        return postDB("visionner/Get", { "use_id" : use_id, "fic_id" : fic_id });
    }
    addVisionner(use_id, fic_id){
        return postDB("visionner/Add", { "use_id" : use_id, "fic_id" : fic_id, "prm_status" : "Non visionnée" });
    }
    setVisionner(use_id, fic_id, status){
        return postDB("visionner/Set", { "use_id" : use_id, "fic_id" : fic_id, "prm_status" : status });
    }
}