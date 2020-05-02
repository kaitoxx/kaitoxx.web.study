$(function() {
    $('.btn').click(function(){
        $('#loginpic').fadeIn(1000);
    });
    $('#close-modal').click(function(){
        $('#loginpic').fadeOut();
    });
    $('.login').click(function(){
        $('#login').fadeIn(1000);
    });
    $('#login-close-modal').click(function(){
        $('#login').fadeOut();
    })
    $('#new').click(function(){
        $('#login').fadeOut(1400);
        $('#loginpic').fadeIn(2000);
        


    });



});
