/**
 * 
 */

var AlertMessage = {
    selector: ".alert",
    duration: 2500,
    autoHide: true,
    showSuccess: function( content ){
        $( AlertMessage.selector ).html(content);
        $( AlertMessage.selector ).addClass("alert-success");
        
        $( AlertMessage.selector ).fadeIn('slow');
        if ( AlertMessage.autoHide ) {
           setTimeout( "AlertMessage.hide()", AlertMessage.duration );
        };
    },
    showError: function( content ){
        $( AlertMessage.selector ).html(content);
        $( AlertMessage.selector ).addClass("alert-danger");
        
        $( AlertMessage.selector ).fadeIn('slow');
        if ( AlertMessage.autoHide ) {
           setTimeout( "AlertMessage.hide()", AlertMessage.duration );
        };
    },
    showWarning: function( content ){
        $( AlertMessage.selector ).html(content);
        $( AlertMessage.selector ).addClass("alert-warning");
        
        $( AlertMessage.selector ).fadeIn('slow');
        if ( AlertMessage.autoHide ) {
           setTimeout( "AlertMessage.hide()", AlertMessage.duration );
        };
    },
    showInfo: function( content ){
        $( AlertMessage.selector ).html(content);
        $( AlertMessage.selector ).addClass("alert-info");
        
        $( AlertMessage.selector ).fadeIn('slow');
        if ( AlertMessage.autoHide ) {
           setTimeout( "AlertMessage.hide()", AlertMessage.duration );
        };
    },
    hide: function(){
    	
        $( AlertMessage.selector ).fadeOut('slow', function(){
            $( AlertMessage.selector ).removeClass("alert-success");
            $( AlertMessage.selector ).removeClass("alert-danger");
            $( AlertMessage.selector ).removeClass("alert-warning");
            $( AlertMessage.selector ).removeClass("alert-info");
        });
        
    }
};