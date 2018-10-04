(function(){
    function peticionJqueryAjax (url) {

        $.ajax({
            dataType: "json",
            url: url,
        })
         .done(function( data, textStatus, jqXHR ) {
             console.log( "La solicitud se ha completado correctamente:", data );
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             console.log( "La solicitud a fallado:", textStatus);
        });
    
    }
    
    peticionJqueryAjax ("http://airemad.com/api/v1/pollen");
})();
