(function() {

    var appearing = []


    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();    

    $('#sortable>li>span').each(function(x,y){ 
        $(y).html( Math.floor(Math.random()*100)-50 ).hide();
    });

    $('#sortable>li').click(function(x){

        var el = $(x.currentTarget).find('span');

        if ( appearing.length>1 ) { 
            appearing[0].hide();
            appearing.splice( 0,1 );
        }
        appearing.push(el)
        el.show()

        console.log(appearing.length)
    })

    $('.btn-ordenado').click(function(){
        var elements = [];
        var isSorted = true;
        $('#sortable>li>span').each(function(x,y){
            elements.push( 1.0 * $(y).html() );
        });
        console.log( elements )
        for( i=1; i < elements.length; i++ ) {
            if ( elements[i-1] > elements[i] ) {
                isSorted = false;
                break;
            }
        }

        if ( isSorted ) {
            alert("Ordenado!")
        } else {
            alert("Não ordenado");
        }


    });

})()
