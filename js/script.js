$(document).ready(function(){
    $('.nav-open').click(function(){
        $('.nav-collapse').fadeIn(200);
    });

    // Closes menu when you click outside
    $(document).click(function(event){
        var trigger = $('.nav-open');
        var menu = $('.nav-collapse');

        if (menu[0] !== event.target && !menu.has(event.target).length && trigger[0] !== event.target && !trigger.has(event.target).length) {
            $('.nav-collapse').fadeOut(200);
        }
    });
});
