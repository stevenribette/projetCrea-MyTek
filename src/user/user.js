class userComponent{
    template(){
        $("#centralApp").load("src/user/user.html");
        var us = stor.getItem("user");
        var userName = us[0];
        setTimeout(function(){
            $("#user_userName").replaceWith(userName); 
        }, 100);
    }
    userData(){
        return stor.getItem("user")[0];
    }
}