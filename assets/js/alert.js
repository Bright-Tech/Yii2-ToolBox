/**
 * 
 */

var AlertMessage = {
    selector: ".alert",
    duration: 3000,
    show: function(autoHide){
        var hide = arguments[0] || 1;
        $(AlertMessage.selector).fadeIn('slow');
        if (hide) {
           setTimeout( "AlertMessage.hide()", AlertMessage.duration );
        };
    },
    hide: function(){
        $(AlertMessage.selector).fadeOut('slow');
    }
};