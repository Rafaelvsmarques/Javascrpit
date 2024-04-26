//Precisone a tecla F8 para rodar o node JS//
var agora = new Date()
var diaSem = agora.getDay()
//  Aqui podemos observar Domingo ocupando a posisão 0, como primeiro dia da semana //
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:  
         console.log('segunda')  
        break
    case 2:
         console.log('terça') 
        break         
    case 3 :
         console.log('quarta')
         break
    case 4 : 
        console.log ('quinta') 
        break 
    case 5: 
         console.log('Sexta')
         break           
}