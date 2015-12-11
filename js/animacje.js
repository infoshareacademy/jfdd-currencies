/**
 * Created by lukaszk on 11.12.15.
 */

$(document).ready(function(){

    $('*[data-animate]').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'hide',
            offset: '20%'
        });
    });

});
