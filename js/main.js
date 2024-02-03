var elInp = document.querySelector('.inp')

function fn(){
    var val = elInp.value
    var Inp = elInp.value

    if(val == val.toLowerCase() || val == val.toUpperCase()){
    elInp.style.backgroundColor = 'red'
    }else{
        elInp.style.backgroundColor = 'green'
    }
    
    if( Inp.length > 8  ){
        elInp.style. backgroundColor = 'green'
        elInp.style. color = 'wheat'
     }else if(Inp.length < 8 ){
        elInp.style. backgroundColor = 'red'
        elInp.style. color = 'wheat'
   } 
   elInp.value = ''
   elInp = focus()
    
}