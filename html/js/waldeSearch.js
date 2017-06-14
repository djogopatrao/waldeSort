(function() {

    var appearing = null;
    var trocas = 0;
    var lista = []
    var item = null;

    for( var i=0; i< $('#sortable>li>span').length; i++ ) {
        lista.push( Math.floor(Math.random()*100)-50 )
    }

    lista.sort(function(a,b){return a-b;})

    if ( Math.random() > 0.5 ) {
        item = lista[ Math.floor(Math.random()*lista.length) ]
    } else {
        item = Math.floor(Math.random()*100)-50;
    }


    $('#itemBuscado').html( item )

    $('#sortable>li>span').each(function(x,y){ 
        $(y).html( lista[x]  ).hide();
    });

    $('#sortable>li').click(function(x){

        var el = $(x.currentTarget).find('span');

        if ( appearing ) { 
            appearing.hide();
        }
        appearing = el 
        trocas++;
        el.show()
    })


    $('.btn-existe').click(function(){
        if ( lista.indexOf( item ) > -1 ) {
            alert("Sim, o ítem existe! e você achou em "+trocas+" visualizações!")
        } else {
            alert("O ítem não existe! Você usou "+trocas+" visualizações para descobrir.")
        }
    })


    $('.btn-nao-existe').click(function(){
        if ( lista.indexOf( item ) > -1 ) {
            alert("Não, o ítem existe! Continue procurando.")
        } else {
            alert("Sim, o ítem não existe! Você usou "+trocas+" visualizações para descobrir.")
        }
    });

})()
