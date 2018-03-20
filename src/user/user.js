class userComponent{
    constructor(){
        var us = stor.getItem("user");
        this.userName = us[1];
        this.userId = us[0];
        this.userMediatek = db.getMediatek(this.userId);
    }
    template(){
        $("#centralApp").load("src/user/user.html");
        var uD = db.getUser(this.userId);
        setTimeout(function(){
            $("#user_userName").replaceWith(userName);
            $('#user_pseudo').val(uD.name);
            $('#user_img').val(uD.img);
            //$('#user_share').val(uD.share);
        }, 100);
    }
    checkData(id){
        if($('#'+id+'').val()!=""){
            $('#btn_user').removeClass("disabled");
            $('#btn_user').attr('onClick', 'userComponent.editData()');
        }else{
            $('#btn_user').addClass("disabled");
            $('#btn_user').removeAttr('onclick');
        }
    }
    editData(){
        var ps = $('#user_pseudo').val();
        var img = $('#user_img').val();
        var sh = $('#user_share').val();
        db.setUserName(this.userId, ps);
        db.setUserImg(this.userId, img);
        db.setUserShare(this.userId, share);
    }
    getMediatek(){
        return this.userMediatek;
    }
    getName(){
        return this.userName;
    }
    getId(){
        return this.userId;
    }
}