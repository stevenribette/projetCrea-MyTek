import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class DbService {
    constructor(private http: Http) {}
    apiUrl = "http://maintek.azurewebsites.net/api/";
    appKey = "";
    authHeader = "";

    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", this.authHeader);
        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
    //###############################
    // USER
    //###############################
    getUser(id){
        return this.http.post(
            this.apiUrl + "user/Get" + this.appKey,
            JSON.stringify({
            use_id: id
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    addUser(user,pwd,share){
        return this.http.post(
            this.apiUrl + "user/Add" + this.appKey,
            JSON.stringify({
            prm_name: user,
            prm_pwd: pwd,
            prm_share: share
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    removeUser(id){
        return this.http.post(
            this.apiUrl + "user/Remove" + this.appKey,
            JSON.stringify({
            use_id: id
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    checkUser(user,pwd){
        return this.http.post(
            this.apiUrl + "user/Check" + this.appKey,
            JSON.stringify({
            user: user,
            pwd: pwd
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    setUserImg(id,img){
        return this.http.post(
            this.apiUrl + "user/SetImg" + this.appKey,
            JSON.stringify({
            prm_id: id,
            prm_img: img
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    setUserName(id,name){
        return this.http.post(
            this.apiUrl + "user/SetName" + this.appKey,
            JSON.stringify({
            prm_id: id,
            prm_name: name
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    setUserShare(id,share){
        return this.http.post(
            this.apiUrl + "user/SetShare" + this.appKey,
            JSON.stringify({
            prm_id: id,
            prm_share: share
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
  

  //###############################
  // FICHE
  //###############################
    getFiche(id){
        return this.http.post(
            this.apiUrl + "fiche/Get" + this.appKey,
            JSON.stringify({
            fic_id: id
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    addFiche(titre, url, mediatek){
        return this.http.post(
            this.apiUrl + "fiche/Add" + this.appKey,
            JSON.stringify({
            prm_titre: titre,
            prm_url: url,
            prm_mediatek: mediatek
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    removeFiche(id){
        return this.http.post(
            this.apiUrl + "fiche/Remove" + this.appKey,
            JSON.stringify({
            fic_id: id
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }

  //###############################
  // MEDIATEK
  //###############################
  getMediatek(id){
    return this.http.post(
        this.apiUrl + "mediatek/Get" + this.appKey,
        JSON.stringify({
        mediatek_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  getMediatekFiches(id){
    return this.http.post(
        this.apiUrl + "mediatek/GetFiche" + this.appKey,
        JSON.stringify({
        mediatek_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  mediatekAddFiche(med_id, fic_id){
    return this.http.post(
        this.apiUrl + "mediatek/AddFiche" + this.appKey,
        JSON.stringify({
        mediatek_id: med_id,
        fic_id: fic_id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  mediatekRemoveFiche(med_id, fic_id){
    return this.http.post(
        this.apiUrl + "mediatek/RemoveFiche" + this.appKey,
        JSON.stringify({
        mediatek_id: med_id,
        fic_id: fic_id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  //###############################
  // GROUPE
  //###############################
  getGroupe(id){
    return this.http.post(
        this.apiUrl + "groupe/Get" + this.appKey,
        JSON.stringify({
        gro_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  getGroupeUsers(id){
    return this.http.post(
        this.apiUrl + "groupe/GetUsers" + this.appKey,
        JSON.stringify({
        gro_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  userGetGroupes(id){
    return this.http.post(
        this.apiUrl + "groupe/UserGetGroupes" + this.appKey,
        JSON.stringify({
        use_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setGroupeImg(id,img){
    return this.http.post(
        this.apiUrl + "groupe/SetImg" + this.appKey,
        JSON.stringify({
        gro_id: id,
        prm_img: img
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setGroupeName(id, name){
    return this.http.post(
        this.apiUrl + "groupe/SetName" + this.appKey,
        JSON.stringify({
        gro_id: id,
        prm_name: name
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setGroupeShare(id,share){
    return this.http.post(
        this.apiUrl + "groupe/SetShare" + this.appKey,
        JSON.stringify({
        gro_id: id,
        prm_share: share
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  groupeAddUser(gro_id, use_id){
    return this.http.post(
        this.apiUrl + "groupe/AddUser" + this.appKey,
        JSON.stringify({
        gro_id: gro_id,
        use_id: use_id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  groupeRemoveUser(gro_id, use_id){
    return this.http.post(
        this.apiUrl + "groupe/RemoveUser" + this.appKey,
        JSON.stringify({
        gro_id: gro_id,
        use_id: use_id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  removeGroupe(id){
    return this.http.post(
        this.apiUrl + "groupe/Remove" + this.appKey,
        JSON.stringify({
        gro_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }

  //###############################
  // NOTES
  //###############################
  getNotes(id){
    return this.http.post(
        this.apiUrl + "note/Get" + this.appKey,
        JSON.stringify({
        fic_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  addNote(use_id, fic_id, note){
    return this.http.post(
        this.apiUrl + "note/Add" + this.appKey,
        JSON.stringify({
        use_id: use_id,
        fic_id: fic_id,
        prm_note: note
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setNote(id, note){
    return this.http.post(
        this.apiUrl + "note/Set" + this.appKey,
        JSON.stringify({
        not_id: id,
        prm_note: note
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }

  //###############################
  // AVIS
  //###############################
  getAvis(id){
    return this.http.post(
        this.apiUrl + "avis/Get" + this.appKey,
        JSON.stringify({
        fic_id: id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  addAvis(use_id, fic_id, avis){
    return this.http.post(
        this.apiUrl + "avis/Add" + this.appKey,
        JSON.stringify({
        use_id: use_id,
        fic_id: fic_id,
        prm_avis: avis
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setAvis(id, avis){
    return this.http.post(
        this.apiUrl + "note/Set" + this.appKey,
        JSON.stringify({
        not_id: id,
        prm_avis: avis        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }

  //###############################
  // Visionner
  //###############################
  getVisionner(use_id, fic_id){
    return this.http.post(
        this.apiUrl + "visionner/Get" + this.appKey,
        JSON.stringify({
        use_id: use_id,
        fic_id: fic_id
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  addVisionner(use_id, fic_id){
    return this.http.post(
        this.apiUrl + "visionner/Add" + this.appKey,
        JSON.stringify({
        use_id: use_id,
        fic_id: fic_id,
        prm_status: 0
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
  setVisionner(use_id, fic_id, status){
    return this.http.post(
        this.apiUrl + "visionner/Set" + this.appKey,
        JSON.stringify({
        use_id: use_id,
        fic_id: fic_id,
        prm_status: status
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }
    //###############################
    // OMDB
    //###############################
    omdbSearch(search){
        return this.http.post(
            this.apiUrl + "Omdb/Search" + this.appKey,
            JSON.stringify({
            titre: search
            }),
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }
    omdbGet(name){
    return this.http.post(
        this.apiUrl + "Omdb/Get" + this.appKey,
        JSON.stringify({
        titre: name
        }),
        { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
    }
}