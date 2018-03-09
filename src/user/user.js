class userComponent{
    userTemplate(){
        $("#centralApp").load("src/user/user.html");
        var us = stor.getItem("user");
        var userName = us[0];
        setTimeout(function(){
            $("#user_userName").replaceWith(userName); 
        }, 100);
    }
}