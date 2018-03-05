class loginComponent{
    inscriptionTemplate(){
        $("#centralApp").load("src/login/inscription.html");
    }
    connexionTemplate(){
        $("#centralApp").load("src/login/connexion.html");
    }
    checkLogin(id){
        if($('#'+id+'').val()!=""){
            if(id=="user"){
                user=1;
            }else if(id=="pwd"){
                pwd=1;
            }
        }else{
            if(id=="user"){
                user=0;
            }else if(id=="pwd"){
                pwd=0;
            }
        }
        if(user==1 && pwd==1){
            $('#btn_login').removeClass("disabled");
            if($('#share')){
                $('#btn_login').attr('onClick', 'loginService.inscription()');
            }else{
                $('#btn_login').attr('onClick', 'loginService.connexion()');
            }
        }
        if(user==0 || pwd==0){
            $('#btn_login').addClass("disabled");
            $('#btn_login').removeAttr('onclick');
        }
    }
}